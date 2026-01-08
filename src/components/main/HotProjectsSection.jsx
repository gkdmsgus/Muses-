import React from 'react';
import ProjectCard from './ProjectCard';
import { ChevronRight } from 'lucide-react';

const HotProjectsSection = ({ projects, onProjectClick }) => {
  const hotProjects = projects.filter(p => p.isHot);

  if (hotProjects.length === 0) return null;

  const handleViewMore = () => {
    alert('더 많은 프로젝트 페이지로 이동합니다!\n(실제 구현 시 프로젝트 목록 페이지로 이동)');
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-gray-900 text-4xl font-black mb-2">주목할 만한 프로젝트</h2>
            <p className="text-gray-600 text-base font-medium">지금 가장 뜨거운 이벤트 🔥</p>
          </div>
          <button
            onClick={handleViewMore}
            className="text-[#e98047] text-base font-bold hover:text-[#d67039] transition-colors flex items-center gap-1 group active:scale-95"
          >
            더보기 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="overflow-x-auto hide-scrollbar -mx-6 px-6">
          <div className="flex gap-6 pb-4">
            {hotProjects.map((project) => (
              <div key={project.id} className="min-w-[340px] w-[340px] flex-shrink-0">
                <ProjectCard project={project} onClick={onProjectClick} />
              </div>
            ))}
            <button
              onClick={handleViewMore}
              className="min-w-[340px] w-[340px] h-[460px] flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 hover:border-gray-300 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 transition-all cursor-pointer group active:scale-95"
            >
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">➕</span>
              <span className="text-base font-bold">더 많은 프로젝트 보기</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProjectsSection;
