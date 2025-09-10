import React from 'react';
import Hero from './components/Hero';
import Flow from './components/Flow';
import Partners from './components/Partners';
import Community from './components/Community';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Flow />
      <Partners />
      <Community />
    </div>
  );
}
