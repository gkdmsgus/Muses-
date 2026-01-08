import React, { useState, useMemo, useEffect } from 'react';
import Header from './Header';
import HeroBanner from './HeroBanner';
import HotProjectsSection from './HotProjectsSection';
import ProjectGrid from './ProjectGrid';
import { PROJECTS } from '../../constants/mockData';
import { CoilObject, DonutObject, CrystalObject } from '../common/3DObjects';

const MainPage = ({ onProjectClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = PROJECTS;

    // 검색 필터링
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.organizer.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] pb-32 font-sans relative overflow-hidden">
      {/* 3D Background Objects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-[120px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-orange-200 to-yellow-100 rounded-full blur-[100px] opacity-50"></div>
        <CoilObject
          className="top-[15%] left-[5%] w-48 h-48 animate-float-slow opacity-70"
          style={{ transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20 + scrollY * 0.1}px, 0)` }}
        />
        <DonutObject
          className="bottom-[15%] right-[5%] w-64 h-64 animate-float-medium opacity-40"
          style={{ transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * 30 - scrollY * 0.2}px, 0)` }}
        />
        <CrystalObject
          className="top-[45%] left-[15%] w-24 h-24 animate-spin-slow opacity-80"
          style={{ transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * 15 + scrollY * 0.15}px, 0)` }}
        />
      </div>

      <div className="relative z-10">
        <Header onSearch={handleSearch} />
        <HeroBanner />

        {searchQuery && (
          <div className="px-6 py-6 max-w-7xl mx-auto">
            <div className="px-6 py-5 rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/80 shadow-sm">
              <p className="text-base text-gray-700">
                <span className="font-black text-[#e98047]">"{searchQuery}"</span>에 대한 검색 결과 {filteredProjects.length}개
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-4 text-sm text-gray-500 hover:text-gray-900 underline font-bold transition-colors"
                >
                  초기화
                </button>
              </p>
            </div>
          </div>
        )}

        {!searchQuery && <HotProjectsSection projects={filteredProjects} onProjectClick={onProjectClick} />}
        <ProjectGrid projects={filteredProjects} onProjectClick={onProjectClick} />

        {filteredProjects.length === 0 && searchQuery && (
          <div className="px-6 py-32 text-center max-w-7xl mx-auto">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-black text-gray-900 mb-3">검색 결과가 없습니다</h3>
            <p className="text-gray-500 text-lg mb-8">다른 키워드로 다시 검색해보세요</p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-10 py-5 rounded-full bg-gray-900 text-white font-bold text-xl shadow-xl hover:scale-105 transition-transform"
            >
              전체 프로젝트 보기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
