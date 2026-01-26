import { FileText, Plus } from 'lucide-react';

interface SubmitFileProps {
  content: string;
  condition: string;
  className?: string; // 위치 조절용
}

const SubmitFile = ({ content, condition, className }: SubmitFileProps) => {
  return (
    <button
      type="button"
      data-variant="2"
      className={`w-72 h-36 absolute rounded-xl border border-[#D1D5DB] border-dashed transition hover:bg-white80 ${className}`}
    >
      {/* 아이콘 */}
      <div className="w-10 h-10 left-[128px] top-[25px] absolute bg-[#EEF2FF] rounded-full inline-flex justify-center items-center">
        <FileText className="text-[#4F46E5]" size={20} />
      </div>

      {/* content */}
      <div className="w-60 left-[25px] top-[77px] absolute text-center text-[#1F2937] text-sm font-boldFont leading-5">
        {content}
      </div>

      {/* condition */}
      <div className="w-60 left-[25px] top-[101px] absolute text-center text-black40 text-xs font-mainFont leading-4">
        {condition}
      </div>

      {/* plus */}
      <div className="left-[262px] top-[9px] absolute">
        <Plus className="text-[#D1D5DB]" size={16} />
      </div>
    </button>
  );
};

export default SubmitFile;
