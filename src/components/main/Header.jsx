import React, { useState } from 'react';
import { Search, Bell, X } from 'lucide-react';

const Header = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleNotification = () => {
    alert('알림 페이지로 이동합니다!\n(실제 구현 시 알림 목록 표시)');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center border-b border-white/40 transition-all">
      {!isSearchOpen ? (
        <>
          <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#e98047] to-[#A569BD] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
              M
            </div>
            <span className="text-lg sm:text-xl font-black text-gray-800 tracking-tight">muses.</span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-500 hover:text-black active:scale-95 transition-all"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={handleNotification}
              className="p-2 text-gray-500 hover:text-black active:scale-95 transition-all relative"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-br from-[#e98047] to-red-500 rounded-full border-2 border-white"></div>
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSearch} className="flex items-center gap-2 sm:gap-3 w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="프로젝트, 아티스트 검색..."
            className="flex-1 h-10 sm:h-11 px-4 sm:px-5 rounded-[1rem] bg-gray-100 border-2 border-gray-200 focus:border-[#e98047] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e98047]/20 transition-all font-medium text-sm sm:text-base"
            autoFocus
          />
          <button
            type="submit"
            className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gray-900 text-white text-xs sm:text-sm font-bold shadow-lg active:scale-95 transition-transform"
          >
            검색
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
            className="p-2 text-gray-500 hover:text-black active:scale-95 transition-all"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </form>
      )}
    </header>
  );
};

export default Header;
