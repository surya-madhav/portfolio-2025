'use client';

import NavBar from '@/components/NavBar';
import PageSection from '@/components/PageSection';
import AnimatedBadges from '@/components/AnimatedBadges';
import VideoBackground from '@/components/VideoBackground';

export default function Home() {
  return (
    <div className="parallax-wrapper">
      <VideoBackground />
      
      <div className="parallax-content">
        {/* Hero Section */}
        <section className="parallax-section">
          <div className="content-wrapper">
            <div className="flex items-start justify-center">
              <div className="text-center pt-24 sm:pt-32 px-4">
                <div className="glass-panel rounded-2xl p-6 sm:p-8 transition-all duration-300">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 hover:from-orange-300 hover:to-orange-400">
                    Sai Surya Rebbapragada's Portfolio
                  </h1>
                  <div className="mt-2 h-0.5 w-3/4 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <AnimatedBadges />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="parallax-section">
          <div className="content-wrapper">
            <div className="flex items-center justify-center min-h-screen">
              <div className="glass-panel rounded-2xl p-8 m-4 w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                  About Me
                </h2>
                <div className="mt-4">
                  {/* Content will go here */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="parallax-section">
          <div className="content-wrapper">
            <div className="flex items-center justify-center min-h-screen">
              <div className="glass-panel rounded-2xl p-8 m-4 w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                  Projects
                </h2>
                <div className="mt-4">
                  {/* Content will go here */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <NavBar />
    </div>
  );
}