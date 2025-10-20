import React from 'react';
import './styleComponents/Section.css';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlighted' | 'minimal';
}

const Section = ({ title, children, className = '', variant = 'default' }: SectionProps) => {
  return (
    <section className={`section-container ${className} ${variant}`}>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;