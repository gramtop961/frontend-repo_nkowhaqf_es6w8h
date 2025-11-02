import React from 'react';

export default function CTASection() {
  return (
    <section id="get-started" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-violet-600/10 p-8 md:p-12">
          <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/3 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 translate-y-1/2 -translate-x-1/3 rounded-full bg-blue-400/30 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Launch a world‑class support experience
              </h3>
              <p className="mt-3 text-white/80">
                Start free. No credit card required. Upgrade anytime.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-3 md:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:opacity-90"
              >
                Start free trial
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
