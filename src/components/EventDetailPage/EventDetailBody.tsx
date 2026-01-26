import type { EventData } from '../../types/event';

interface EventDetailBodyProps {
  event: EventData;
  onGoToList: () => void;
}

export default function EventDetailBody({
  event,
  onGoToList,
}: EventDetailBodyProps) {
  return (
    <section className="mx-auto w-[768px] max-w-[768px] py-[48px] px-[24px] flex flex-col items-start gap-[64px] bg-white">
      <div className="flex flex-col items-start gap-[48px] self-stretch">
        <p className="self-stretch text-[#111827] font-boldFont text-[20px] leading-[28px]">
          {event.desscription}
        </p>

        <div className="flex p-[32px] flex-col items-start gap-[16px] self-stretch rounded-[24px] border border-[#F3F4F6] bg-[#FAF5FF]">
          <div className="flex w-[654px] h-[192px] justify-center items-center rounded-[16px] bg-[#E5E7EB]">
            {/* <img src={event.thumbnail} className="w-full h-full object-contain" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        </div>

        <div className="self-stretch text-[#374151] font-mainFont text-[16px] leading-[26px] whitespace-pre-wrap">
          {event.content}
        </div>
      </div>

      <div className="flex pt-[32px] justify-center items-start self-stretch border-t border-[#F3F4F6]">
        <button
          className="flex px-[32px] py-[12px] justify-center items-center rounded-full bg-[#F3F4F6] text-[#4B5563] font-boldFont text-[16px] leading-[24px] hover:bg-[#E5E7EB] transition-colors"
          onClick={onGoToList}
        >
          목록으로 돌아가기
        </button>
      </div>
    </section>
  );
}
