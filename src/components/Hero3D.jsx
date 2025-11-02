import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Live, AI‑assisted customer support
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Modern, dashing support for brands that move fast
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Delight customers with real‑time chat, smart triage, and beautiful self‑service. Built for speed, designed for trust.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:opacity-95"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                See live demo
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/32?img=1" alt="" className="h-7 w-7 rounded-full ring-2 ring-white/10" />
                <img src="https://i.pravatar.cc/32?img=11" alt="" className="h-7 w-7 rounded-full ring-2 ring-white/10" />
                <img src="https://i.pravatar.cc/32?img=22" alt="" className="h-7 w-7 rounded-full ring-2 ring-white/10" />
              </div>
              <span>Trusted by teams worldwide</span>
            </div>
          </div>

          <div className="relative h-[28rem] w-full md:h-[34rem]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0">
        <div className="mx-auto h-40 max-w-7xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
      </div>
    </section>
  );
}
