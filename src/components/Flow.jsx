import React from 'react';
import { Shield, Play, Star } from 'lucide-react';

export default function Flow() {
  const steps = [
    {
      title: 'Legendary Live Class',
      desc: 'A secret topic unveiled by the one-and-only MKV. Understand the patterns that top candidates use.',
      accent: 'bg-yellow-300',
      icon: Play,
      badge: 'Step 1'
    },
    {
      title: 'High-stakes Contest',
      desc: 'Compete immediately on the same topic. Real-time leaderboard, no fluff — just skills.',
      accent: 'bg-cyan-300',
      icon: Shield,
      badge: 'Step 2'
    },
    {
      title: 'Job Pairing Engine',
      desc: 'Get mapped to the right roles based on your performance. Recruiters ready to fast-track offers.',
      accent: 'bg-pink-300',
      icon: Star,
      badge: 'Step 3'
    }
  ];

  return (
    <section className="relative container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-8">How the Tournament Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className={`relative border-4 border-black rounded-xl p-6 ${s.accent} shadow-[8px_8px_0_0_#000]`}>
              <span className="absolute -top-3 -left-3 bg-black text-white text-xs font-black uppercase px-3 py-1 rounded">{s.badge}</span>
              <div className="bg-white border-4 border-black rounded-lg p-4 mb-4 inline-flex">
                <s.icon className="text-black" />
              </div>
              <h3 className="text-xl font-extrabold mb-2">{s.title}</h3>
              <p className="text-black/80 font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
