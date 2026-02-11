import { useEffect, useState } from 'react';
import type { Project } from '../../types/projects';
import type { ProjectDetailData, ProjectTag } from '../../types/projectDetails';
import fallbackPoster from '../../assets/images/fallbackPoster.png';
import { MOCK_PROJECT_DETAILS } from '../../mocks/projectDetail';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  formatDeadlineDisplay,
  formatOpenDateTime,
  isFutureOpen,
} from '../../utils/date';
import { MOCK_PROJECTS } from '../../mocks/project';

interface ProjectMainProps {
  project: Project;
}

export default function ProjectMain({ project }: ProjectMainProps) {
  const posterFallback =
    MOCK_PROJECT_DETAILS.find(
      (item: ProjectDetailData) => item.projectId === project.project_id
    )?.posters?.[0] ?? fallbackPoster;
  const detail = MOCK_PROJECT_DETAILS.find(
    (item) => item.projectId === project.project_id
  );
  const posters =
    detail?.posters && detail.posters.length > 0
      ? detail.posters
      : [posterFallback];
  const [posterIndex, setPosterIndex] = useState(0);

  useEffect(() => {
    setPosterIndex(0);
  }, [project.project_id]);

  const openDateLabel = project.opening
    ? formatOpenDateTime(project.opening)
    : '';
  const isOpenFuture = project.opening ? isFutureOpen(project.opening) : false;

  const deadlineLabel = project.deadline
    ? isOpenFuture
      ? '오픈예정'
      : formatDeadlineDisplay(project.deadline)
    : '';

  const hasPrev = posterIndex > 0;
  const hasNext = posterIndex < posters.length - 1;
  const prevIndex = hasPrev ? posterIndex - 1 : 0;
  const nextIndex = hasNext ? posterIndex + 1 : posters.length - 1;
  const currentPoster = posters[posterIndex];

  return (
    <div className="w-full max-w-[1247px] pt-20 px-4 flex flex-col items-center font-mainFont mb-12">
      {/* 프로젝트 카드 */}
      <div className="relative w-full flex items-center justify-center mb-[30px]">
        {posters.length > 1 && (
          <button
            type="button"
            aria-label="이전 포스터"
            className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[290px] z-20 w-14 h-14 rounded-full bg-white80/50 text-black80 flex items-center justify-center shadow ${hasPrev ? 'cursor-pointer' : 'opacity-40 cursor-default'}`}
            disabled={!hasPrev}
            onClick={() => {
              if (!hasPrev) return;
              setPosterIndex((prev) => Math.max(0, prev - 1));
            }}
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
        )}
        {posters.length > 1 && (
          <>
            {hasPrev && (
              <div
                className="absolute z-0 left-1/2 -translate-x-[340px] w-[290px] h-[460px] rounded-3xl shadow-md overflow-hidden bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${posters[prevIndex]})` }}
              >
                <div className="absolute inset-0 backdrop-blur-sm" />
              </div>
            )}
            {hasNext && (
              <div
                className="absolute z-0 left-1/2 translate-x-[50px] w-[290px] h-[460px] rounded-3xl shadow-md overflow-hidden bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${posters[nextIndex]})` }}
              >
                <div className="absolute inset-0 backdrop-blur-sm" />
              </div>
            )}
          </>
        )}
        <div className="relative z-10 w-[416px] h-[564px]">
          <div
            className="absolute inset-0 rounded-3xl shadow-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${currentPoster})` }}
          />
        </div>
        {posters.length > 1 && (
          <button
            type="button"
            aria-label="다음 포스터"
            className={`absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[230px] z-20 w-14 h-14 rounded-full bg-white80/50 text-black80 flex items-center justify-center shadow ${hasNext ? 'cursor-pointer' : 'opacity-40 cursor-default'}`}
            disabled={!hasNext}
            onClick={() => {
              if (!hasNext) return;
              setPosterIndex((prev) => Math.min(posters.length - 1, prev + 1));
            }}
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        )}
      </div>
      {/* 프로젝트 태그 */}
      <div className="flex flex-wrap justify-center gap-2 mb-5 z-10">
        {MOCK_PROJECT_DETAILS.find(
          (item: ProjectDetailData) => item.projectId === project.project_id
        )?.tags?.map((tag: ProjectTag) => (
          <span
            key={tag.tag_id}
            className="text-xs text-black80 bg-white/40 px-4 py-1 rounded-full border border-white/30 font-boldFont shadow-xs"
          >
            {tag.tag_name}
          </span>
        ))}
      </div>

      {/* 프로젝트 제목 */}
      <h1 className="text-[48px] font-blackFont text-mainBlack text-center mb-4">
        {project.title}
      </h1>
      {MOCK_PROJECTS.find(
        (item: Project) => item.project_id === project.project_id
      )?.description && (
        <p className="text-lg text-black80 text-center font-mediumFont">
          {
            MOCK_PROJECTS.find(
              (item: Project) => item.project_id === project.project_id
            )?.description
          }
        </p>
      )}
      {/* 프로젝트 달성율 박스 */}
      <div className="w-full max-w-[720px] bg-white rounded-[32px] shadow-2xl p-8 mt-10 progress-box">
        <div className="flex items-end justify-between mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] font-blackFont text-mainBlack leading-none">
              {project.achieve_rate}%
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
            key={project.project_id}
            className="h-full rounded-full animate-progress-slide"
            style={{
              width: 'var(--progress-width)',
              background: 'linear-gradient(to right, #6366F1, #A855F7)',
              ['--progress-width' as string]: `${Math.min(
                project.achieve_rate,
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
                {project.supporter_count}명의 메이커
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
