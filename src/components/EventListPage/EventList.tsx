import { useState, useEffect, useRef, useCallback } from 'react';
import EventCard from './EventCard';
import { MOCK_EVENTS } from '../../mocks/events';
import type { EventData } from '../../types/event';

export default function EventList() {
  const ITEMS_PER_PAGE = 2; // 한 번에 보여줄 개수(테스트용)
  const [events, setEvents] = useState<EventData[]>(
    MOCK_EVENTS.slice(0, ITEMS_PER_PAGE)
  );
  const [isFetching, setIsFetching] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(
    MOCK_EVENTS.length > ITEMS_PER_PAGE
  );

  const observerTarget = useRef<HTMLDivElement>(null);

  const fetchNextPage = useCallback(() => {
    if (isFetching || !hasNextPage) return;

    setIsFetching(true);

    //api 대신 넣어둠(임시)
    setTimeout(() => {
      const currentLength = events.length;
      const nextBatch = MOCK_EVENTS.slice(
        currentLength,
        currentLength + ITEMS_PER_PAGE
      );

      if (nextBatch.length > 0) {
        setEvents((prev) => [...prev, ...nextBatch]);
      }

      // 더 이상 가져올 데이터가 없으면 종료 신호
      if (currentLength + nextBatch.length >= MOCK_EVENTS.length) {
        setHasNextPage(false);
      }

      setIsFetching(false);
    }, 500); // 로딩 느낌을 위해 아주 짧은 딜레이
  }, [events.length, isFetching, hasNextPage]);

  useEffect(() => {
    // 더 이상 데이터가 없으면 감시를 중단함
    if (!observerTarget.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(observerTarget.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return (
    <div className="flex flex-col gap-[32px] w-full items-center">
      {events.map((event) => (
        <EventCard key={event.event_id} event={event} />
      ))}

      {hasNextPage && (
        <div
          ref={observerTarget}
          className="w-full h-[20px] flex items-center justify-center"
        >
          {isFetching && (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-solidPink"></div>
          )}
        </div>
      )}
    </div>
  );
}
