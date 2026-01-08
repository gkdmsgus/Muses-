import React from 'react';
import { Home, Search, Ticket, User } from 'lucide-react';

const TabBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: '홈' },
    { id: 'category', icon: Search, label: '둘러보기' },
    { id: 'ticket', icon: Ticket, label: '마이티켓' },
    { id: 'my', icon: User, label: 'MY' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-3 sm:px-6 pb-6 sm:pb-8 pt-2 sm:pt-3 pointer-events-none">
      <nav className="max-w-lg mx-auto h-[70px] sm:h-[80px] rounded-[1.5rem] sm:rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/90 shadow-2xl shadow-gray-300/30 flex items-center justify-around px-2 sm:px-4 pointer-events-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center w-full h-full relative transition-all duration-300 rounded-[1.2rem] sm:rounded-[1.5rem] active:scale-95 ${
                isActive ? 'bg-gradient-to-br from-orange-50/80 to-purple-50/80 scale-105' : 'hover:bg-gray-50/50'
              }`}
            >
              <tab.icon
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                  isActive ? 'text-[#e98047] scale-110' : 'text-gray-400'
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] sm:text-[11px] mt-1.5 sm:mt-2 font-bold transition-all duration-300 ${
                isActive ? 'text-[#e98047]' : 'text-gray-500'
              }`}>
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute top-1.5 sm:top-2 w-1.5 h-1.5 bg-gradient-to-r from-[#e98047] to-[#A569BD] rounded-full animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default TabBar;
