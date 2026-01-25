import type { EventData } from '../../types/event';

interface EventDetailBannerProps {
  event: EventData;
}

export default function EventDetailBanner({ event }: EventDetailBannerProps) {
  return (
    <section className="relative w-full h-[285.2px] bg-[#4F46E5] px-[48px] pb-[48px] flex justify-center items-end self-stretch">
      <button
        className="absolute left-[48px] top-[96px] w-[48px] h-[48px] p-[12px] flex items-start justify-start rounded-full bg-white/20 backdrop-blur-[6px] transition-colors hover:bg-white/30"
        aria-label="뒤로가기"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="w-[896px] max-w-[896px] h-[184px] flex flex-col items-start gap-[16px]">
        <div className="flex px-[16px] py-[6px] items-start rounded-full bg-black/30 backdrop-blur-[6px]">
          <span className="text-white font-boldFont text-[12px] leading-[16px] uppercase">
            {event.category}
          </span>
        </div>

        <h1 className="w-full text-white font-blackFont text-[48px] leading-[48px] self-stretch">
          {event.title}
        </h1>

        <div className="w-full flex items-center gap-[8px] opacity-90 self-stretch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.66699 1.66675V5.00008"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.333 1.66675V5.00008"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 8.33325H17.5"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-white font-mainFont text-[18px] leading-[28px]">
            {event.category === 'COLLAB'
              ? `${event.start_date} - ${event.end_date}`
              : event.posted_at}
          </span>
        </div>
      </div>
    </section>
  );
}
