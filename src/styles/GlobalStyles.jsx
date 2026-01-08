import React from 'react';

const GlobalStyles = () => (
  <style>{`
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

    body {
      font-family: 'Pretendard', sans-serif;
      overflow-x: hidden;
      background: #f8f9fc;
    }

    @keyframes float-slow {
      0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
      50% { transform: translate3d(0, -20px, 0) rotate(5deg); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
      50% { transform: translate3d(0, -15px, 0) rotate(-5deg); }
    }
    @keyframes spin-12s {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes popIn {
      0% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1); }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translate(-50%, -100%); }
      to { opacity: 1; transform: translate(-50%, 0); }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
    .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
    .animate-spin-slow { animation: spin-12s 12s linear infinite; }
    .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
    .animate-popIn { animation: popIn 0.3s ease-out forwards; }
    .animate-shimmer { animation: shimmer 2s linear infinite; }
    .animate-slideDown { animation: slideDown 0.3s ease-out forwards; }
    .animate-slideUp { animation: slideUp 0.3s ease-out forwards; }
    .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }

    .glass-panel {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.8);
    }
    .glass-modal {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.95);
    }

    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

export default GlobalStyles;
