import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => {
  return (
    <section id={id} className="mb-20 pt-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        {icon && <span>{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <div className="h-px bg-gradient-to-r from-neon-blue to-transparent flex-grow ml-4"></div>
      </div>
      <div className="pl-0 md:pl-8">
        {children}
      </div>
    </section>
  );
};

export default Section;