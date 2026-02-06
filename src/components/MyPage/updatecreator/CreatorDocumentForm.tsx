import { ChevronLeft } from 'lucide-react';
import SubmitFile from './SubmitFile';
import {
  type CreatorType,
  creatorDocumentConfig,
} from '../types/creatorDocumentConfig';
import type { FormEvent } from 'react';
interface Props {
  type: CreatorType;
  onBack: () => void;
}

const CreatorDocumentForm = ({ type, onBack }: Props) => {
  const { title, files } = creatorDocumentConfig[type];
  const rowCount = Math.ceil(files.length / 2);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('서류 제출:', type);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-stretch inline-flex flex-col justify-start items-start gap-8"
    >
      {/* 상단 */}
      <div className="self-stretch inline-flex justify-start items-center gap-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-black60 text-sm hover:text-mainBlack transition cursor-pointer"
        >
          <ChevronLeft size={16} />
          <span>유형 재선택</span>
        </button>
        <span className="text-[#D1D5DB] text-sm">|</span>
        <span className="text-[#4F46E5] text-sm font-boldFont">{title}</span>
      </div>

      {/* 파일 영역 */}
      <div className="relative w-[624px]" style={{ height: rowCount * 158 }}>
        {files.map((file, idx) => {
          const col = idx % 2;
          const row = Math.floor(idx / 2);

          return (
            <div
              key={idx}
              className="absolute"
              style={{ left: col * 312, top: row * 158 }}
            >
              <SubmitFile content={file.content} condition={file.condition} />
              
            </div>
          );
        })}
      </div>

      {/* 제출 */}
      <button
        type="submit"
        className="self-stretch py-4 bg-[#4F46E5] rounded-xl inline-flex justify-center items-center hover:bg-[#433cba] transition cursor-pointer"
      >
        <span className="text-white text-lg font-boldFont">제출하기</span>
      </button>
    </form>
  );
};

export default CreatorDocumentForm;
