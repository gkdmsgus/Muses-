import type { MyProjectItemProps, ProjectStatus } from './ProjectType';

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

const MyProjectItem = ({
  status,
  dday,
  title,
  progressPercent,
  amount,
}: MyProjectItemProps) => {
  const statusInfo = STATUS_MAP[status];
  const clampedPercent = Math.min(progressPercent, 100);

  return (
    <div className="inline-flex justify-start items-start gap-5">
      <div className="w-[661px] p-4 rounded-2xl border border-white80 flex items-center gap-4">
        <div className="w-16 h-16 bg-[#C7D2FE] rounded-xl flex justify-center items-center">
          <div className="text-white text-lg font-boldFont">새</div>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className={`px-2 py-0.5 rounded ${statusInfo.badgeClass}`}>
              <div
                className={`text-[10px] font-boldFont ${statusInfo.textClass}`}
              >
                {statusInfo.label}
              </div>
            </div>
            {dday && (
              <div className="text-xs text-black40 font-mainFont">{dday}</div>
            )}
          </div>
          <div className="text-sm font-boldFont text-mainBlack">{title}</div>
          <div className="h-1.5 bg-white80 rounded-full overflow-hidden">
            <div
              className="h-1.5 bg-solidBlue"
              style={{ width: `${clampedPercent}%` }}
            />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-[#4F46E5] text-base font-boldFont">
            {progressPercent}%
          </div>
          <div className="text-black40 text-xs font-mainFont">{amount}</div>
        </div>
      </div>
      <div className="w-24 h-24 p-6 bg-[#EEF2FF] rounded-2xl border border-[#EEF2FF] flex justify-center items-center">
        <div className="text-lg font-boldFont text-[#000]">QR</div>
      </div>
    </div>
  );
};

export default MyProjectItem;
