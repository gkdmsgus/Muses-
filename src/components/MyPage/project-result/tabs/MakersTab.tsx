import { FilePlus2, MoveLeft, MoveRight } from 'lucide-react';

{/*interface TabProps {
  projectId?: string;
}*/}
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

const MakersTab = ({/* { projectId }: TabProps */}) => {
  return (
    <div className="w-[768px] p-8 bg-white rounded-2xl shadow-sm border border-white80 flex flex-col items-center gap-6">
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
        <div className="flex gap-11">
          {headers.map((h) => (
            <div
              key={h.label}
              className={`${h.w} text-center text-black text-[10px] font-boldFont leading-4`}
            >
              {h.label}
            </div>
          ))}
        </div>

        {/* body rows */}
        {rows.map((_, i) => (
          <div key={i} className="flex gap-11">
            <div className="w-16 font-mainFont text-center text-black text-[10px]">
              푸른오렌지
            </div>
            <div className="w-16 text-center font-mainFont text-black text-[10px]">
              김*정
            </div>
            <div className="w-24 text-center font-mainFont text-black text-[10px]">
              010-8537-2259
            </div>
            <div className="w-28 text-center font-mainFont text-black text-[10px]">
              sample@sample.com
            </div>
            <div className="w-10 text-center font-mainFont text-black text-[10px]">
              2
            </div>
            <div className="w-24 text-center font-mainFont text-black text-[10px]">
              VIP 스탠딩석
            </div>
            {i === 0 && (
              <div className="w-24 text-center font-mainFont text-black text-[10px]">
                버튼
              </div>
            )}
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
            ? 'bg-[#111827] text-white border-[#111827]'
            : 'border-white60 text-black'
        }
      `}
          >
            {n}
          </div>
        ))}

        {/* right arrow */}
        <div className="w-6 h-6 bg-[#111827] text-white rounded-full flex items-center justify-center">
          <MoveRight size={8} />{' '}
        </div>
      </div>
    </div>
  );
};

export default MakersTab;
