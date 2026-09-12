import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Clock, ArrowUpRight, Github, Linkedin, MessageSquare } from 'lucide-react';
import { ProfileInfo } from '../types';

interface ContactProps {
  profile: ProfileInfo;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Vul alsjeblieft minimaal je naam, e-mailadres en bericht in.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Voer een geldig e-mailadres in.');
      return;
    }

    setIsSubmitting(true);
    // Simulate responsive sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
            Contact & Samenwerking
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Laten we samen iets moois bouwen.
          </h2>
          <p className="text-neutral-400 text-base">
            Heb je een vraag, een freelance projectaanvraag of wil je sparren over een idee? Neem gerust contact op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-neutral-800/80 rounded-2xl p-6 sm:p-7 border border-neutral-700 space-y-6">
              <div className="space-y-1">
                <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider block">
                  E-mailadres
                </span>
                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="font-mono text-sm sm:text-base text-white font-medium break-all select-all">
                    {profile.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-neutral-200 hover:text-white transition-colors shrink-0 flex items-center gap-1.5 text-xs"
                    title="Kopieer e-mail naar klembord"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Gekopieerd!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopieer</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-700 space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>Reactietijd: doorgaans binnen 24 uur</span>
                </div>
              </div>

              {/* Direct Mailto */}
              <div className="pt-2">
                <a
                  href={`mailto:${profile.email}?subject=Projectaanvraag`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-700 hover:bg-neutral-600 text-white font-medium text-sm transition-colors border border-neutral-600"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open direct in je mailprogramma</span>
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                Profielen & Netwerken
              </span>
              <div className="flex flex-wrap gap-3">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 text-xs font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 text-xs font-medium transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white text-neutral-900 rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-neutral-900">
                    Bericht succesvol verzonden!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Bedankt voor je bericht. Ik neem zo snel mogelijk (meestal binnen één werkdag) contact met je op.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition-colors"
                  >
                    Nog een bericht versturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 border-b border-neutral-100 pb-3 mb-1">
                    <MessageSquare className="w-4 h-4 text-neutral-700" />
                    <h3 className="text-base font-bold font-display text-neutral-900">
                      Stuur direct een bericht
                    </h3>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700">
                        Je naam *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="bijv. Sarah de Wit"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700">
                        Je e-mailadres *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jouw@bedrijf.nl"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-neutral-700">
                      Onderwerp
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="bijv. Nieuw project / Website herontwerp"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-700">
                      Bericht *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Vertel kort over je project, doelen, gewenste planning of budget..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-600 text-white font-semibold text-sm transition-colors shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>Bezig met versturen...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Verstuur bericht</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
