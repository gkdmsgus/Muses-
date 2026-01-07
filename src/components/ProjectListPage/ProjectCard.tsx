import { MapPin } from 'lucide-react';
import ProjectCardFooter from './ProjectCardFooter';

export interface Project {
  id: number;
  location: string;
  status: '진행중' | '오픈예정' | '종료';
  tags: string[];
  title: string;
  progress?: number;
  deadline?: string;
  backgroundColor: string;
  hasNotification?: boolean;
  openDate?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col group cursor-pointer font-mainFont h-fit">
      {/* 위치 및 상태, 썸네일 */}
      <div
        className={`${project.backgroundColor} rounded-3xl p-4 shadow-sm cursor-pointer h-[400px] w-[300px] mb-4 group-hover:shadow-lg transition-all relative overflow-hidden`}
      >
        <div className="flex items-center mb-4 relative">
          <div className="flex items-center gap-1 bg-white/90 rounded-lg px-2.5 py-1 shadow-sm mr-2">
            <MapPin className="w-4 h-4 text-solidBlue" />
            <span className="text-[10px] font-boldFont text-[#1F2937]">
              {project.location}
            </span>
          </div>
          <span
            className={`px-2 py-1 rounded text-[10px] font-boldFont ${
              project.status === '진행중'
                ? 'bg-solidBlue text-white'
                : project.status === '오픈예정'
                  ? 'bg-[#FACC15] text-black'
                  : 'bg-black60 text-white'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* 종료 상태 오버레이 */}
        {project.status === '종료' && (
          <>
            {/* 하단 그라데이션 오버레이 */}
            <div
              className="absolute bottom-0 left-0 right-0 h-full rounded-b-3xl"
              style={{
                opacity: 0.6,
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.4) 100%)',
              }}
            />

            {/* CLOSED\ 텍스트 */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div
                className="px-4 py-2 border-2 border-white"
                style={{
                  transform: 'rotate(-15deg)',
                }}
              >
                <span className="text-xl font-blackFont text-white tracking-wider">
                  CLOSED
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="group-hover:-translate-y-[-8px] transition-all">
        {/* 태그 */}
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-black60 bg-white80 px-2 py-0.5 rounded border border-white60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 제목 */}
        <h3 className="text-[20px] font-boldFont text-mainBlack mb-4 group-hover:text-solidBlue transition-all duration-500">
          {project.title}
        </h3>

        {/* 달성률, 마감일 */}
        <ProjectCardFooter project={project} />
      </div>
    </div>
  );
}
