import React from 'react';
import { MessageCircle, Sparkles, ShieldCheck, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Omni‑channel Inbox',
    desc: 'Manage email, chat, social, and voice in one elegant workspace.',
  },
  {
    icon: Sparkles,
    title: 'AI Triage & Replies',
    desc: 'Suggested answers, intent detection, and automatic routing.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    desc: 'Role‑based access, SSO, and audit logs to keep data safe.',
  },
  {
    icon: BarChart3,
    title: 'Insights that Matter',
    desc: 'Response times, CSAT, and trends—beautifully visualized.',
  },
];

export default function FeatureCards() {
  return (
    <section id="demo" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Everything your support team needs
          </h2>
          <p className="mt-3 text-white/70">
            Powerful tools wrapped in a delightful, modern interface.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:translate-y-[-2px] hover:bg-white/[0.06]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
