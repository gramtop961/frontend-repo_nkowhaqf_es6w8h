import React from 'react';
import Hero3D from './components/Hero3D';
import FeatureCards from './components/FeatureCards';
import SupportChannels from './components/SupportChannels';
import CTASection from './components/CTASection';

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600" />
          <span className="text-sm font-semibold tracking-tight text-white">DashSupport</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#demo" className="hover:text-white">Features</a>
          <a href="#get-started" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Docs</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white md:block">Sign in</a>
          <a href="#get-started" className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15">Get started</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 md:flex-row">
        <p>© {new Date().getFullYear()} DashSupport Inc. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white/80">Privacy</a>
          <a href="#" className="hover:text-white/80">Terms</a>
          <a href="#" className="hover:text-white/80">Status</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero3D />
        <FeatureCards />
        <SupportChannels />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
