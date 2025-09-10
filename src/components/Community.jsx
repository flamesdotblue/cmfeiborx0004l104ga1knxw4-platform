import React, { useEffect, useMemo, useState } from 'react';
import { User, Star, Ticket } from 'lucide-react';

export default function Community() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Mentors />
      <Testimonials />
      <FinalCTA />
    </section>
  );
}

function Mentors() {
  const mentors = [
    { name: 'MKV', title: 'Legendary Teacher · AlgoUniversity', tag: 'Masterclass Host' },
    { name: 'Ananya Gupta', title: 'SWE · Google', tag: 'DSA Mentor' },
    { name: 'Rohit Verma', title: 'Staff Engineer · Razorpay', tag: 'System Design' },
    { name: 'Sana Iqbal', title: 'Lead Recruiter · CRED', tag: 'Career Coach' }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-black mb-6">Meet Your Mentors</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((m, i) => (
          <div key={i} className="bg-white text-black border-4 border-black rounded-xl p-5 shadow-[8px_8px_0_0_#000]">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-300 border-4 border-black rounded-lg p-3"><User size={28} /></div>
              <div>
                <div className="text-lg font-black">{m.name}</div>
                <div className="text-xs font-bold text-zinc-600">{m.title}</div>
              </div>
            </div>
            <span className="inline-block bg-cyan-300 border-2 border-black text-xs font-black px-2 py-1 rounded">{m.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const videoTestimonials = [
    { name: 'Aishwarya', note: 'Got paired with my current role via AU match.' },
    { name: 'Kunal', note: 'Loved the pace and the contest format.' },
    { name: 'Ritika', note: 'Mentor feedback was gold.' }
  ];
  const textTestimonials = [
    { name: 'Varun', rating: 5, text: 'Electric energy. Walked out with two interviews lined up.' },
    { name: 'Megha', rating: 5, text: 'MKV’s session unlocked a new perspective on problems.' },
    { name: 'Ashwin', rating: 4, text: 'Well run event, great recruiter access.' }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-black mb-4">Testimonials</h3>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="grid sm:grid-cols-2 gap-4">
          {videoTestimonials.map((v, idx) => (
            <VideoCard key={idx} title={`${v.name} · ${v.note}`} />
          ))}
        </div>
        <div className="grid gap-4">
          {textTestimonials.map((t, idx) => (
            <div key={idx} className="bg-white text-black border-4 border-black rounded-xl p-5 shadow-[6px_6px_0_0_#22c55e]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold">{t.name}</span>
                <Stars count={t.rating} />
              </div>
              <p className="text-black/80 font-medium">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < count ? 'text-yellow-500 fill-yellow-400' : 'text-zinc-400'} />
      ))}
    </div>
  );
}

function VideoCard({ title }) {
  return (
    <div className="relative bg-gradient-to-br from-violet-400 via-emerald-300 to-rose-300 border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0_0_#000]">
      <div className="aspect-video" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black text-white border-4 border-white rounded-full px-3 py-2 text-xs font-black">PLAY</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs font-bold px-3 py-2">{title}</div>
    </div>
  );
}

function FinalCTA() {
  const { timeLeft, expired } = useCountdown48h();

  return (
    <div id="register" className="bg-white text-black border-4 border-black rounded-xl p-6 md:p-8 shadow-[10px_10px_0_0_#000]">
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block bg-black text-white text-xs font-black px-2 py-1 rounded">Limited Seats</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black mb-2">Grab your ticket for AU Hiring Tournament</h3>
          <p className="text-zinc-700 mb-4">In-person at JNTUH, Hyderabad · 21 Sept · 12:00 PM</p>
          <div className="flex items-center gap-4">
            <Pricing expired={expired} />
            <CountdownBadge timeLeft={timeLeft} expired={expired} />
          </div>
        </div>
        <div className="flex-shrink-0">
          <button className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white border-4 border-black rounded-xl px-6 py-4 text-lg font-extrabold shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_0_#000]">
            <Ticket size={22} /> {expired ? 'Buy Ticket' : 'Buy Early Bird Ticket'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Pricing({ expired }) {
  return (
    <div className="flex items-end gap-3">
      {!expired && (
        <div className="bg-green-300 border-4 border-black rounded-lg px-4 py-2 text-black font-extrabold">
          Early Bird
          <div className="text-2xl">₹399</div>
        </div>
      )}
      <div className={`border-4 border-black rounded-lg px-4 py-2 font-extrabold ${expired ? 'bg-yellow-300 text-black' : 'bg-white text-zinc-500 line-through'}`}>
        Regular
        <div className="text-2xl">₹699</div>
      </div>
    </div>
  );
}

function CountdownBadge({ timeLeft, expired }) {
  if (expired) {
    return (
      <div className="bg-red-300 border-4 border-black rounded-lg px-4 py-2 font-black">
        Early Bird ended
      </div>
    );
  }

  return (
    <div className="bg-cyan-300 border-4 border-black rounded-lg px-4 py-2 font-black">
      Ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
}

function useCountdown48h() {
  const [deadline, setDeadline] = useState(() => {
    const saved = localStorage.getItem('earlyBirdDeadline');
    if (saved) return parseInt(saved, 10);
    const d = Date.now() + 48 * 60 * 60 * 1000;
    localStorage.setItem('earlyBirdDeadline', String(d));
    return d;
  });

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, deadline - now);
  const expired = diff <= 0;

  const timeLeft = useMemo(() => {
    const total = diff;
    const days = Math.floor(total / (24 * 60 * 60 * 1000));
    const hours = Math.floor((total % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((total % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((total % (60 * 1000)) / 1000);
    return { days, hours, minutes, seconds };
  }, [diff]);

  useEffect(() => {
    // Safety: if localStorage cleared mid-session, re-init for next render
    if (!localStorage.getItem('earlyBirdDeadline')) {
      localStorage.setItem('earlyBirdDeadline', String(deadline));
    }
  }, [deadline]);

  return { timeLeft, expired, setDeadline };
}
