'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface PageSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageSection({ id, children, className = '' }: PageSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      // Change background color when section is in view
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [inView]);

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </section>
  );
}