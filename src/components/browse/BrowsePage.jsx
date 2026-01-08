import React, { useState } from 'react';
import { Search, SlidersHorizontal, TrendingUp, Clock } from 'lucide-react';
import ProjectCard from '../main/ProjectCard';
import { PROJECTS, CATEGORIES } from '../../constants/mockData';

const BrowsePage = ({ onProjectClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [sortBy, setSortBy] = useState('popular'); // popular, recent, deadline, funded
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndSortedProjects = () => {
    let filtered = PROJECTS;

    // 카테고리 필터
    if (selectedCategory !== '전체') {
      filtered = filtered.filter(p =>
        p.category.includes(selectedCategory) || selectedCategory.includes(p.category)
      );
    }

    // 검색
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.organizer.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query)
      );
    }

    // 정렬
    const sorted = [...filtered];
    switch (sortBy) {
      case 'popular':
        return sorted.sort((a, b) => b.percentage - a.percentage);
      case 'recent':
        return sorted.sort((a, b) => a.id - b.id).reverse();
      case 'deadline':
        return sorted.sort((a, b) => a.daysLeft - b.daysLeft);
      case 'funded':
        return sorted.filter(p => p.percentage >= 100);
      default:
        return sorted;
    }
  };

  const projects = filteredAndSortedProjects();

  return (
    <div className="min-h-screen bg-[#f8f9fc] pb-32 pt-20">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-md border-b border-white/40 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">모든 프로젝트 둘러보기</h1>

          {/* Search Bar */}
          <div className="relative mb-4 sm:mb-6">
            <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="프로젝트, 아티스트 검색..."
              className="w-full h-12 sm:h-14 pl-12 sm:pl-14 pr-4 sm:pr-5 rounded-[1rem] bg-gray-100 border-2 border-gray-200 focus:border-[#e98047] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e98047]/20 transition-all text-sm sm:text-base font-medium"
            />
          </div>

          {/* Category Pills */}
          <div className="overflow-x-auto hide-scrollbar mb-3 sm:mb-4 -mx-1">
            <div className="flex gap-2 sm:gap-3 px-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white shadow-lg'
                      : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto hide-scrollbar -mx-1">
            <div className="flex gap-2 sm:gap-3 px-1">
              <button
                onClick={() => setSortBy('popular')}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 ${
                  sortBy === 'popular'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                인기순
              </button>
              <button
                onClick={() => setSortBy('deadline')}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 ${
                  sortBy === 'deadline'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                마감임박
              </button>
              <button
                onClick={() => setSortBy('recent')}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 ${
                  sortBy === 'recent'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                최신순
              </button>
              <button
                onClick={() => setSortBy('funded')}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 ${
                  sortBy === 'funded'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                달성완료
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            총 <span className="font-black text-gray-900 text-lg sm:text-xl">{projects.length}개</span>의 프로젝트
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="py-32 text-center">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-black text-gray-900 mb-3">프로젝트가 없습니다</h3>
            <p className="text-gray-500 text-lg mb-8">다른 카테고리를 선택해보세요</p>
            <button
              onClick={() => {
                setSelectedCategory('전체');
                setSearchQuery('');
              }}
              className="px-10 py-5 rounded-full bg-gray-900 text-white font-bold text-xl shadow-xl hover:scale-105 transition-transform"
            >
              전체 프로젝트 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="transform transition-all duration-300">
                <ProjectCard project={project} onClick={onProjectClick} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;
