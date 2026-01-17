import { MapPin, Bell, Calendar, Award } from 'lucide-react';

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

interface TrendingCardProps {
  project: Project;
}

function formatOpenDate(dateString: string): string {
  const parts = dateString.split('.');
  if (parts.length >= 3) {
    return `${parts[1]}.${parts[2]} 오픈`;
  }
  return dateString;
}

export default function TrendingCard({ project }: TrendingCardProps) {
  return (
    <div className="h-[700px] min-w-96 inline-flex flex-col group">
      {/* 위치 및 상태, 썸네일 */}
      <div className="h-[600.50px] p-5 bg-white rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-white80 inline-flex flex-col justify-start items-center group-hover:shadow-lg transition-all gap-6">
        <div
          className={`${project.backgroundColor} w-[338px] h-[422.5px] relative rounded-[32px] group-hover:shadow-lg transition-all overflow-hidden`}
        >
          <div className="left-[16px] top-[16px] absolute inline-flex justify-start items-start gap-2">
            <div className="self-stretch px-2.5 py-1 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur-[2px] flex justify-start items-center gap-1">
              <MapPin className="w-3 h-3 relative text-solidBlue" />
              <span className="justify-center text-[10px] font-boldFont text-[#1F2937] leading-4">
                {project.location}
              </span>
            </div>
            <span
              className={`self-stretch px-2 py-0.5 inline-flex flex-col justify-center items-center rounded text-[10px] font-boldFont ${
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

        <div className="w-full min-w-80 px-2 inline-flex flex-col justify-start items-start gap-2 group-hover:-translate-y-[-8px] transition-all">
          {/* 태그 */}
          <div className="self-stretch inline-flex justify-start items-start gap-1 flex-wrap content-start">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="justify-center text-[10px] text-black60 bg-white80 px-2 py-0.5 rounded border border-white60 leading-4"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 제목 */}
          <h3 className="text-xl font-boldFont text-mainBlack leading-6 group-hover:text-solidBlue transition-all duration-500">
            {project.title}
          </h3>

          {/* 달성률, 마감일 */}
          {project.status === '진행중' && (
            <>
              <div className="self-stretch pt-2 inline-flex justify-between items-center">
                <span className="text-[18px] font-blackFont text-[#4F46E5] leading-7">
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
            </>
          )}

          {project.status === '오픈예정' && (
            <div className="self-stretch flex items-center justify-between">
              {project.openDate && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-solidBlue" />
                  <span className="text-[14px] text-[#1F2937] font-boldFont leading-5">
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
            <div className="self-stretch flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-black60" />
                <span className="text-sm text-black60 leading-5">펀딩 마감</span>
              </div>
              {project.progress && (
                <span className="text-sm font-boldFont text-[#374151] leading-5">
                  {project.progress}% 달성
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
