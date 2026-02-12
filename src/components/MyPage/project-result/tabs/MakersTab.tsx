import { useState } from 'react';
import { Check, FilePlus2, MoveLeft, MoveRight } from 'lucide-react';

{
  /*interface TabProps {
  projectId?: string;
}*/
}
const headers = [
  { label: '닉네임', w: 'w-16' },
  { label: '이름', w: 'w-16' },
  { label: '전화번호', w: 'w-24' },
  { label: '이메일', w: 'w-28' },
  { label: '수량', w: 'w-10' },
  { label: '리워드', w: 'w-24' },
  { label: 'QR 현황', w: 'w-24' },
];

const rows = Array.from({ length: 10 });
const MakersTab = () => {
  const [qrStatuses, setQrStatuses] = useState([
    '비활성화',
    '활성화',
    '활성화',
    '활성화',
    '활성화',
    '활성화',
    '비활성화',
    '활성화',
    '활성화',
    '활성화',
  ]);
  return (
    <div className="w-fit p-8 bg-white rounded-2xl shadow-sm border border-white80 flex flex-col items-center gap-6">
      {/* header */}
      <div className="w-[702px] flex justify-between items-center">
        <div className="text-xl font-boldFont leading-7">메이커 명단</div>
        <div className="px-2.5 py-[4.8px] bg-black text-white font-mainFont text-[9.6px] rounded-[4.8px] flex items-center gap-1">
          <FilePlus2 size={12} />
          다운받기
        </div>
      </div>

      {/* table */}
      <div className="flex flex-col gap-2">
        {/* header row */}
        <div className="flex gap-11 mb-2">
          {headers.map((h) => (
            <div
              key={h.label}
              className={`${h.w} text-center text-black text-[12px] font-boldFont leading-4`}
            >
              {h.label}
            </div>
          ))}
        </div>

        {/* body rows */}
        {rows.map((_, i) => (
          <div key={i} className="flex gap-11 items-center">
            <div className="w-16 font-mainFont text-center text-black text-[12px]">
              푸른오렌지
            </div>
            <div className="w-16 text-center font-mainFont text-black text-[12px]">
              김*정
            </div>
            <div className="w-24 text-center font-mainFont text-black text-[12px]">
              010-8537-2259
            </div>
            <div className="w-28 text-center font-mainFont text-black text-[12px]">
              sample@sample.com
            </div>
            <div className="w-10 text-center font-mainFont text-black text-[12px]">
              2
            </div>
            <div className="w-24 text-center font-mainFont text-black text-[12px]">
              VIP 스탠딩석
            </div>
            <div className="w-24 flex items-center justify-center">
              {(() => {
                const status = qrStatuses[i] ?? '해당없음';
                const isActive = status === '활성화';
                const isInactive = status === '비활성화';
                const pillClass = isActive
                  ? 'bg-mainBlack text-mainWhite'
                  : isInactive
                    ? 'bg-white80 text-mainBlack'
                    : 'bg-white60 text-black40';
                const circleClass = isActive
                  ? 'bg-mainWhite text-mainBlack'
                  : 'bg-mainBlack text-mainWhite';
                return (
                  <button
                    type="button"
                    className={`cursor-pointer h-6 w-[80px] flex items-center rounded-full gap-2 text-[9px] ${pillClass}`}
                    onClick={() => {
                      setQrStatuses((prev) =>
                        prev.map((value, index) => {
                          if (index !== i) return value;
                          return value === '활성화' ? '비활성화' : '활성화';
                        })
                      );
                    }}
                  >
                    {(isActive || isInactive) && (
                      <span
                        className={`w-3.5 h-3.5 ml-3 rounded-full flex items-center justify-center ${circleClass}`}
                      >
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                    <span>{status}</span>
                  </button>
                );
              })()}
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex items-center gap-2">
        {/* left arrow */}
        <div className="w-6 h-6 rounded-full border border-white60 flex items-center justify-center">
          <MoveLeft size={8} />{' '}
        </div>

        {/* page numbers */}
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-boldFont
        ${
          n === 1
            ? 'bg-mainBlack text-white border-mainBlack'
            : 'border-white60 text-black'
        }
      `}
          >
            {n}
          </div>
        ))}

        {/* right arrow */}
        <div className="w-6 h-6 border border-white60 text-black rounded-full flex items-center justify-center">
          <MoveRight size={8} />{' '}
        </div>
      </div>
    </div>
  );
};

export default MakersTab;
