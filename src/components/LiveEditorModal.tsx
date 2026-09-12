import React, { useState } from 'react';
import { X, Check, SlidersHorizontal, RotateCcw, Copy, Download } from 'lucide-react';
import { ProfileInfo } from '../types';

interface LiveEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  onUpdateProfile: (updated: ProfileInfo) => void;
  onResetToDefault: () => void;
}

export const LiveEditorModal: React.FC<LiveEditorModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onResetToDefault,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfileInfo, value: any) => {
    onUpdateProfile({
      ...profile,
      [field]: value,
    });
  };

  const copyConfig = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(profile, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50 shrink-0">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-neutral-800" />
            <h3 className="text-base font-bold font-display text-neutral-900">
              Live Portfolio Aanpasser
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
            <strong>Tip:</strong> Wijzigingen die je hieronder invult zijn direct zichtbaar in deze preview! Zo zie je direct hoe je eigen portfolio eruitziet. Alle teksten staan ook in <code className="bg-amber-100 px-1 py-0.5 rounded-sm font-mono">src/data/portfolioData.ts</code>.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Volledige Naam
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Functie / Rol
              </label>
              <input
                type="text"
                value={profile.role}
                onChange={(e) => handleChange('role', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700">
              Korte Slogan / Tagline
            </label>
            <input
              type="text"
              value={profile.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700">
              Korte Introductie (Hero bio)
            </label>
            <textarea
              rows={2}
              value={profile.shortBio}
              onChange={(e) => handleChange('shortBio', e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Contact E-mail
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Locatie
              </label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                GitHub URL
              </label>
              <input
                type="url"
                value={profile.github}
                onChange={(e) => handleChange('github', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={profile.linkedin}
                onChange={(e) => handleChange('linkedin', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Availability Switch */}
          <div className="flex items-center justify-between p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
            <div>
              <span className="font-semibold text-xs text-neutral-900 block">
                Beschikbaar voor nieuwe opdrachten
              </span>
              <span className="text-xs text-neutral-500">
                Toont de groene pulserende statusbadge in de header & hero
              </span>
            </div>
            <input
              type="checkbox"
              checked={profile.availableForWork}
              onChange={(e) => handleChange('availableForWork', e.target.checked)}
              className="w-5 h-5 rounded-md border-neutral-300 text-neutral-900 focus:ring-neutral-900"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-t border-neutral-200 bg-neutral-50 shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onResetToDefault}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Herstel standaard</span>
            </button>
            <button
              type="button"
              onClick={copyConfig}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
              title="Kopieer profiel JSON"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Gekopieerd!' : 'Kopieer JSON'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs transition-colors"
          >
            Klaar
          </button>
        </div>
      </div>
    </div>
  );
};
