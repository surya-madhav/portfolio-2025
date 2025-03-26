'use client';

import { useState, useEffect } from 'react';

const badges = [
  { prefix: 'Software', suffix: 'Engineer' },
  { prefix: 'AI', suffix: 'Engineer' },
  { prefix: 'Big Data', suffix: 'Engineer' },
  { prefix: 'Full Stack', suffix: 'Engineer' }
];

export default function AnimatedBadges() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % badges.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4">
      <p className="text-lg sm:text-xl">
        <span className={`inline-block transition-all duration-1000 text-gray-700 font-semibold hover:bg-yellow-100/20 px-2 rounded-lg ${
          isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {badges[currentIndex].prefix}
        </span>
        {' '}
        <span className="text-gray-700 font-medium hover:text-gray-700 hover:bg-yellow-100/20 px-2 rounded-lg transition-colors">Engineer</span>
      </p>
    </div>
  );
}