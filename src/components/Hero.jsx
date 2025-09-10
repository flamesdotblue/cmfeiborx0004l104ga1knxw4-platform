import React from 'react';
import Spline from '@splinetool/react-spline';
import { Ticket, Calendar, MapPin, Clock, Rocket } from 'lucide-react';

export default function Hero() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-5xl bg-white text-black border-4 border-black rounded-xl p-6 md:p-10 shadow-[8px_8px_0_0_#22d3ee,12px_12px_0_0_#000]">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 bg-yellow-300 border-2 border-black px-3 py-1 rounded-md uppercase font-black tracking-wide text-sm">
              <Rocket size={16} /> New-age Hiring Module
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
            AU Hiring Tournament
          </h1>
          <p className="text-lg md:text-xl text-zinc-700 mb-6">
            An immersive, in-person hiring experience by AlgoUniversity. Learn, compete, and get matched to top roles. Hyderabad’s most electrifying hiring day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <InfoPill icon={Calendar} label="Date" value="21 Sept, 12:00 PM" />
            <InfoPill icon={MapPin} label="Venue" value="JNTUH, Hyderabad" />
            <InfoPill icon={Clock} label="Format" value="In-person" />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button onClick={scrollToRegister} className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white border-4 border-black rounded-lg px-6 py-3 text-lg font-extrabold shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000]">
              <Ticket size={22} /> Buy Tickets
            </button>
            <div className="flex-1 bg-green-300 border-4 border-black rounded-lg px-4 py-3 font-bold text-black">
              Early Bird active for 48 hours. Limited seats.
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    </section>
  );
}

function InfoPill({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-zinc-100 border-4 border-black rounded-lg p-3">
      <div className="bg-black text-white rounded-md p-2"><Icon size={18} /></div>
      <div>
        <div className="text-xs font-black uppercase text-zinc-600">{label}</div>
        <div className="text-base font-extrabold">{value}</div>
      </div>
    </div>
  );
}
