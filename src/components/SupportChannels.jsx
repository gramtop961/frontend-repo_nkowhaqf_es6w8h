import React from 'react';
import { Headphones, CheckCircle, ArrowRight } from 'lucide-react';

export default function SupportChannels() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30">
                  <Headphones className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">Channels that feel native</h3>
              </div>
              <p className="mt-3 text-white/70">
                Smooth, branded experiences across chat widgets, email, WhatsApp, and more—without context switching.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-cyan-400" /> Real‑time typing and presence</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-cyan-400" /> Rich media & file attachments</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-cyan-400" /> Priority routing & SLAs</li>
              </ul>
              <a href="#get-started" className="mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                Explore integrations <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6">
            <div className="grid grid-cols-2 gap-4">
              {['Chat', 'Email', 'WhatsApp', 'Voice', 'Twitter/X', 'Messenger'].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-6 text-center text-sm font-medium text-white/80 backdrop-blur-sm"
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -inset-10 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
