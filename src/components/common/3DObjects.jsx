import React from 'react';

// 3D Floating Objects for background decoration
export const CoilObject = ({ className, style }) => (
  <div className={`absolute ${className}`} style={style}>
    <div className="w-full h-full border-[16px] border-white/60 rounded-full blur-[1px] shadow-lg transform rotate-45 backdrop-blur-md animate-[spin_12s_linear_infinite]">
      <div className="absolute inset-0 rounded-full border-[4px] border-orange-200/50"></div>
    </div>
  </div>
);

export const DonutObject = ({ className, style }) => (
  <div className={`absolute ${className}`} style={style}>
    <div className="w-full h-full bg-gradient-to-tr from-orange-300 via-purple-300 to-pink-300 rounded-full blur-2xl opacity-60 animate-pulse"></div>
  </div>
);

export const CrystalObject = ({ className, style }) => (
  <div className={`absolute ${className}`} style={style}>
    <div className="w-full h-full bg-white/30 backdrop-blur-md border border-white/60 rounded-[2rem] transform rotate-[30deg] shadow-xl flex items-center justify-center animate-float-slow group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-80"></div>
      <div className="w-1/2 h-1/2 bg-orange-200/30 rounded-full blur-md"></div>
    </div>
  </div>
);
