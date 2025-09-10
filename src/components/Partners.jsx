import React from 'react';
import { Building2, Play } from 'lucide-react';

export default function Partners() {
  const companies = [
    'Amazon', 'Microsoft', 'Google', 'Uber', 'Salesforce', 'Adobe', 'Flipkart', 'Paytm', 'Swiggy', 'Zomato', 'CRED', 'Razorpay', 'Freshworks', 'PhonePe', 'Atlassian'
  ];

  const recruiters = [
    { name: 'Priya | Engineering @ FinTech Co.', company: 'Razorpay' },
    { name: 'Arun | Talent Lead', company: 'Microsoft' },
    { name: 'Meera | Hiring Partner', company: 'Freshworks' },
    { name: 'Vikram | Tech Recruiter', company: 'CRED' }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Recruiters Speak</h2>
          <p className="text-zinc-300 mb-6">Short messages from recruiters welcoming participants and explaining what they’re looking for. These are mock video frames.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {recruiters.map((r, i) => (
              <VideoMock key={i} title={`${r.company} · ${r.name}`} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-black mb-4 flex items-center gap-2"><Building2 size={22} /> Participating Companies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {companies.map((c, idx) => (
              <div key={idx} className="bg-white text-black border-4 border-black rounded-lg p-4 font-extrabold text-center shadow-[6px_6px_0_0_#22d3ee]">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoMock({ title }) {
  return (
    <div className="relative bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-amber-300 border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0_0_#000]">
      <div className="aspect-video w-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black text-white border-4 border-white rounded-full p-3 shadow-[4px_4px_0_0_#000]"><Play size={22} /></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs font-bold px-3 py-2">{title}</div>
    </div>
  );
}
