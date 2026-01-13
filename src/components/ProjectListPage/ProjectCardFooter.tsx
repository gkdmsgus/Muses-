import { Bell, Calendar, Award } from 'lucide-react';
import type { Project } from './ProjectCard';

interface ProjectCardFooterProps {
  project: Project;
}

// 날짜 형식 변환
function formatOpenDate(dateString: string): string {
  const parts = dateString.split('.');
  if (parts.length >= 3) {
    return `${parts[1]}.${parts[2]} 오픈`;
  }
  return dateString;
}

export default function ProjectCardFooter({ project }: ProjectCardFooterProps) {
  return (
    <>
      {/* 달성률, 마감일 */}
      {project.status === '진행중' && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-blackFont text-[#4F46E5]">
              {project.progress || 0}%
            </span>
            {project.deadline && (
              <span className="text-xs font-boldFont text-black60 bg-white80 px-2 py-1 rounded">
                {project.deadline}
              </span>
            )}
          </div>
          {/* 진행 바 */}
          <div className="w-full h-2 bg-white60 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${Math.min(project.progress || 0, 100)}%`,
                background: 'linear-gradient(to right, #A855F7, #6366F1)',
              }}
            />
          </div>
        </div>
      )}

      {project.status === '오픈예정' && (
        <div className="flex items-center justify-between">
          {project.openDate && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-solidBlue" />
              <span className="text-[14px] text-[#1F2937] font-boldFont">
                {formatOpenDate(project.openDate)}
              </span>
            </div>
          )}
          {project.hasNotification && (
            <button className="flex items-center gap-2 bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] px-3 py-1.5 rounded-full text-xs font-boldFont transition-colors">
              <Bell className="w-3 h-3" />
              알림신청
            </button>
          )}
        </div>
      )}

      {project.status === '종료' && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-black60" />
            <span className="text-sm text-black60">펀딩 마감</span>
          </div>
          {project.progress && (
            <span className="text-sm font-boldFont text-[#374151]">
              {project.progress}% 달성
            </span>
          )}
        </div>
      )}
    </>
  );
}
