/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { ProfileInfo } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { SkillsExperience } from './components/SkillsExperience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LiveEditorModal } from './components/LiveEditorModal';

export default function App() {
  const [profile, setProfile] = useState<ProfileInfo>(() => {
    try {
      const saved = localStorage.getItem('portfolio_custom_profile');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return initialPortfolioData.profile;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_custom_profile', JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  const handleResetProfile = () => {
    setProfile(initialPortfolioData.profile);
    try {
      localStorage.removeItem('portfolio_custom_profile');
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Navigation */}
      <Navbar
        profile={profile}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero profile={profile} />
        <About profile={profile} services={initialPortfolioData.services} />
        <Projects projects={initialPortfolioData.projects} />
        <SkillsExperience
          skillCategories={initialPortfolioData.skillCategories}
          experience={initialPortfolioData.experience}
        />
        <Testimonials testimonials={initialPortfolioData.testimonials} />
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Live Configuration / Personalization Modal */}
      <LiveEditorModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
        onResetToDefault={handleResetProfile}
      />
    </div>
  );
}
