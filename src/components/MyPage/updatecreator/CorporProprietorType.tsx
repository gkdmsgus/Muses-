import { ChevronLeft } from 'lucide-react';
import SubmitFile from './SubmitFile';

interface PersonTypeProps {
  onBack: () => void;
}

export const CorporProprietorType = ({ onBack }: PersonTypeProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('서류 제출');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="self-stretch inline-flex flex-col justify-start items-start gap-8"
    >
      <div className="self-stretch inline-flex justify-start items-center gap-2">
        <button
          type="button"
          onClick={onBack}
          data-variant="1"
          className="flex justify-start items-center gap-1 text-black60 text-sm font-mainFont hover:text-mainBlack transition cursor-pointer"
        >
          <ChevronLeft className="" size={16} />
          <div className="text-center justify-center  leading-5">
            유형 재선택
          </div>
        </button>
        <div className="inline-flex flex-col justify-start items-start">
          <div className="justify-center text-[#D1D5DB] text-sm font-mainFont leading-5">
            |
          </div>
        </div>
        <div className="inline-flex flex-col justify-start items-start">
          <div className="justify-center text-[#4F46E5] text-sm font-boldFont leading-5">
            법인사업자 서류 제출
          </div>
        </div>
      </div>
      <div className="self-stretch h-72 relative">
        <SubmitFile
          content="사업자등록증 사본"
          condition="법인 사업자"
          className="left-0 top-0"
        />

        <SubmitFile
          content="법인 등기부등본"
          condition="최근 3개월 이내"
          className="left-[312px] top-0"
        />

        <SubmitFile
          content="법인 인감증명서"
          condition="최근 3개월 이내"
          className="left-0 top-[158px]"
        />

        <SubmitFile
          content="통장사본"
          condition="법인 명의"
          className="left-[312px] top-[158px]"
        />
      </div>
      <button
        type="submit"
        data-variant="3"
        className="self-stretch py-4 bg-[#4F46E5] rounded-xl inline-flex justify-center items-center overflow-hidden transition hover:bg-[#433cba] cursor-pointer"
      >
        <div className="text-center justify-center text-white text-lg font-boldFont leading-7">
          제출하기
        </div>
      </button>
    </form>
  );
};
