import React from 'react';
import { Link } from 'react-router-dom';

const ArtistGuide = () => (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center pt-24 px-4">
    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#FEBE5D] mb-12 drop-shadow-lg uppercase letter-spacing-wider animate-fade-in">
      Artist Guide
    </h1>
    <div className="relative max-w-xl w-full bg-black/80 rounded-3xl shadow-2xl border border-[#FEBE5D] px-8 py-16 md:py-20 flex flex-col items-center animate-fade-in-slow">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase letter-spacing-wide">
        404
      </h2>
      <p className="text-2xl md:text-3xl text-[#FEBE5D] font-semibold mb-6 leading-snug italic">
        "This story doesn't exist yet."
      </p>
      <p className="text-lg md:text-xl text-gray-400 mb-8 font-light">
        But we're always writing new ones.
      </p>
      <Link to="/" className="inline-block px-10 py-4 bg-[#FEBE5D] text-black font-extrabold rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 tracking-wider text-lg md:text-xl">
        Back to Stories
      </Link>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#FEBE5D] rounded-full blur-sm opacity-60 animate-pulse" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-10 h-2 bg-[#FEBE5D] rounded-full blur-sm opacity-40 animate-pulse" />
    </div>
  </div>
);

export default ArtistGuide;