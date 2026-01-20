import { useNavigate } from 'react-router-dom';
import type { Project } from '../../types/projects';
import SideProjectCard from './SideProjectCard';
import fallbackPoster from '../../assets/images/fallbackPoster.png';
import {
  formatDeadlineDisplay,
  formatOpenDateTime,
  isFutureOpen,
} from '../../utils/date';

interface ProjectMainProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

export default function ProjectMain({
  project,
  prevProject,
  nextProject,
}: ProjectMainProps) {
  const navigate = useNavigate();
  const posterSrc = project.posterImage ?? fallbackPoster;
  const openDateLabel = project.openDate
    ? formatOpenDateTime(project.openDate)
    : '';
  const isOpenFuture = project.openDate
    ? isFutureOpen(project.openDate)
    : false;

  const deadlineLabel = project.deadline
    ? isOpenFuture
      ? '오픈예정'
      : formatDeadlineDisplay(project.deadline)
    : '';

  return (
    <div className="w-full max-w-[1247px] pt-20 px-4 flex flex-col items-center font-mainFont mb-12">
      {/* 프로젝트 카드 */}
      <div className="relative w-full flex items-center justify-center mb-[30px]">
        {prevProject && (
          <SideProjectCard
            project={prevProject}
            position="prev"
            onClick={() => navigate(`/project/${prevProject.id}`)}
          />
        )}
        <div
          className="relative z-10 w-[416px] h-[564px] rounded-3xl shadow-2xl flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${posterSrc})` }}
        />
        {nextProject && (
          <SideProjectCard
            project={nextProject}
            position="next"
            onClick={() => navigate(`/project/${nextProject.id}`)}
          />
        )}
      </div>
      {/* 프로젝트 태그 */}
      <div className="flex flex-wrap justify-center gap-2 mb-5 z-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-black80 bg-white/40 px-4 py-1 rounded-full border border-white/30 font-boldFont shadow-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 프로젝트 제목 */}
      <h1 className="text-[48px] font-blackFont text-mainBlack text-center mb-4">
        {project.title}
      </h1>
      {project.subtitle && (
        <p className="text-lg text-black80 text-center font-mediumFont">
          {project.subtitle}
        </p>
      )}
      {/* 프로젝트 달성율 박스 */}
      <div className="w-full max-w-[720px] bg-white rounded-[32px] shadow-2xl p-8 mt-10 progress-box">
        <div className="flex items-end justify-between mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] font-blackFont text-mainBlack leading-none">
              {project.progress}%
            </span>
            <span className="text-sm font-boldFont text-black60">달성</span>
          </div>
          {deadlineLabel && (
            <span
              className={
                isOpenFuture
                  ? 'text-xl font-blackFont text-mainBlack'
                  : 'text-2xl font-blackFont text-[#EF4444]'
              }
            >
              {deadlineLabel}
            </span>
          )}
        </div>
        <div className="w-full h-4 bg-white60 rounded-full overflow-hidden mb-6">
          <div
            key={project.id}
            className="h-full rounded-full animate-progress-slide"
            style={{
              width: 'var(--progress-width)',
              background: 'linear-gradient(to right, #6366F1, #A855F7)',
              ['--progress-width' as string]: `${Math.min(
                project.progress,
                100
              )}%`,
            }}
          />
        </div>
        <div className="flex items-center justify-between text-sm text-black60 border-t border-white80 pt-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-solidBlue border-2 border-white" />
              <span className="-ml-1.5 w-8 h-8 rounded-full bg-solidPurple border-2 border-white" />
              <span className="-ml-1.5 w-8 h-8 rounded-full bg-solidPink border-2 border-white" />
            </div>
            <span className="text-mainBlack font-boldFont pt-1">
              <span className="text-solidBlue font-blackFont">
                {project.supporters}명의 메이커
              </span>
              가 함께해요
            </span>
          </div>
          <span className="text-xs text-black40 font-mediumFont pt-1">
            {openDateLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
