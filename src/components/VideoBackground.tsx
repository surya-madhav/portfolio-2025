'use client';

import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }

    // Smooth parallax effect
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        const scrollFactor = 0.15; // Reduced for smoother effect
        requestAnimationFrame(() => {
          containerRef.current!.style.transform = `translate3d(0, ${scrolled * scrollFactor}px, 0)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="video-background">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="video-element"
      >
        <source src="/backgrounds/backgriund.mp4" type="video/mp4" />
      </video>
    </div>
  );
}