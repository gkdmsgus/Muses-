import { useNavigate } from 'react-router-dom';
import type { Project, ProjectStatus } from '../types/projectType';

const STATUS_MAP: Record<
  ProjectStatus,
  {
    label: string;
    badgeClass: string;
    textClass: string;
  }
> = {
  ONGOING: {
    label: '진행중',
    badgeClass: 'bg-[#E0E7FF]',
    textClass: 'text-[#4F46E5]',
  },
  DONE: {
    label: '완료',
    badgeClass: 'bg-[#CDE6B7]',
    textClass: 'text-[#4E833E]',
  },
  FAILED: {
    label: '완료',
    badgeClass: 'bg-[#E6BDB7]',
    textClass: 'text-[#983A22]',
  },
};
interface MyProjectItemProps {
  project: Project;
}

const MyProjectItem = ({ project }: MyProjectItemProps) => {
  const { status, dday, title, progressPercent, amount, thumbnail } = project;
  const statusInfo = STATUS_MAP[status];
  const clampedPercent = Math.min(progressPercent, 100);
  const navigate = useNavigate();

  return (
    <div
      className="inline-flex items-start gap-5"
      onClick={() => navigate(`projectresult/${project.id}`)}
    >
      <div className="w-[661px] p-4 rounded-2xl border border-white80 flex items-center ">
        {/* 썸네일 */}
        <div className="w-16 h-16 bg-[#C7D2FE] rounded-xl flex items-center justify-center text-white text-lg font-boldFont shrink-0">
          {thumbnail}
        </div>

        {/* 중앙 영역 */}
        <div className="ml-4 flex-1 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div
              className={`px-2 py-0.5 rounded text-[10px] font-boldFont ${statusInfo.badgeClass} ${statusInfo.textClass}`}
            >
              {statusInfo.label}
            </div>

            {dday && (
              <span className="text-xs text-black40 font-mainFont">{dday}</span>
            )}
          </div>

          <div className="text-sm font-boldFont text-mainBlack">{title}</div>

          {/* 진행바: 고정 폭 */}
          <div className="w-[450px] h-1.5 bg-white80 rounded-full overflow-hidden">
            <div
              className="h-1.5 bg-solidBlue"
              style={{ width: `${clampedPercent}%` }}
            />
          </div>
        </div>

        {/* 수치 영역 */}
        <div className="ml-4 w-[72px] flex flex-col items-end shrink-0">
          <div className="text-[#4F46E5] text-base font-boldFont">
            {progressPercent}%
          </div>
          <div className="text-black40 text-xs font-mainFont">{amount}</div>
        </div>
      </div>

      {/* qr */}
      <div className="w-24 h-24 p-6 bg-[#EEF2FF] rounded-2xl border border-[#EEF2FF] flex items-center justify-center text-lg font-boldFont text-black">
        QR
      </div>
    </div>
  );
};

export default MyProjectItem;
