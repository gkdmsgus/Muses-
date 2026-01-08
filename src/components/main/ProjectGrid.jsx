import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, onProjectClick }) => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-gray-900 text-4xl font-black mb-2">모든 프로젝트</h2>
          <p className="text-gray-600 text-base font-medium">지금 펀딩 진행 중인 프로젝트들을 확인해보세요 ⏳</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="transform transition-all duration-300"
            >
              <ProjectCard project={project} onClick={onProjectClick} />
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-6">📭</div>
            <h3 className="text-gray-900 text-2xl font-bold mb-2">진행 중인 프로젝트가 없습니다</h3>
            <p className="text-gray-500">새로운 프로젝트가 곧 시작됩니다!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
