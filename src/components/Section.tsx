import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode | ((isOpen: boolean) => ReactNode);
  className?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
  collapseContainer?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  icon,
  children,
  className,
  collapsible,
  defaultOpen = true,
  collapseContainer = true,
}) => {
  const isCollapsible = Boolean(collapsible);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useMemo(() => `${id}-content`, [id]);

  useEffect(() => {
    if (!isCollapsible || !isOpen) return;
    const raf = requestAnimationFrame(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    return () => cancelAnimationFrame(raf);
  }, [isCollapsible, isOpen]);

  const handleToggle = () => {
    if (!isCollapsible) return;
    setIsOpen((prev) => !prev);
  };

  const renderedChildren = typeof children === 'function'
    ? (children as (open: boolean) => ReactNode)(isOpen)
    : children;

  const isContainerHidden = isCollapsible && collapseContainer && !isOpen;

  return (
    <section id={id} className={`mb-20 pt-16 scroll-mt-20 ${className ?? ''}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-3 shrink-0">
          {icon && <span>{icon}</span>}
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        </div>
        <div className="h-px bg-gradient-to-r from-neon-blue to-transparent flex-1 min-w-[64px]"></div>
        {isCollapsible && (
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls={contentId}
            className="p-2 text-neon-blue hover:text-neon-purple transition-colors"
            aria-label={isOpen ? `Recolher ${title}` : `Expandir ${title}`}
          >
            <span className="inline-flex chevron-float">
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </span>
          </button>
        )}
      </div>
      <div
        id={contentId}
        className={`pl-0 md:pl-8 ${isContainerHidden ? 'hidden' : ''}`}
        aria-hidden={isContainerHidden}
      >
        {renderedChildren}
      </div>
    </section>
  );
};

export default Section;
