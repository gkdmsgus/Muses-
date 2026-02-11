import { useState, useEffect, useRef, useCallback } from 'react';
import EventCard from './EventCard';
import { fetchEventsAPI, type EventData } from '../../api/eventAPI';

export default function EventList() {
  const ITEMS_PER_PAGE = 3;
  const [events, setEvents] = useState<EventData[]>([]);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const observerTarget = useRef<HTMLDivElement>(null);

  const fetchNextPage = useCallback(async () => {
    if (isFetching || !hasNextPage) return;

    setIsFetching(true);

    try {
      const response = await fetchEventsAPI({
        page: page,
        size: ITEMS_PER_PAGE,
      });

      if (response.success && response.data) {
        const newEvents = response.data;

        setEvents((prev) => [...prev, ...newEvents]);

        const totalFetched = events.length + newEvents.length;
        const totalCount = response.page?.total ?? 0;

        if (newEvents.length < ITEMS_PER_PAGE || totalFetched >= totalCount) {
          setHasNextPage(false);
        } else {
          setPage((prev) => prev + 1);
        }
      }
    } catch (error) {
      console.error('이벤트 로딩 실패:', error);
      setHasNextPage(false);
    } finally {
      setIsFetching(false);
    }
  }, [page, isFetching, hasNextPage, events.length]);

  useEffect(() => {
    fetchNextPage();
  }, []);

  useEffect(() => {
    if (!observerTarget.current || !hasNextPage || isFetching) return;

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
  }, [fetchNextPage, hasNextPage, isFetching]);

  return (
    <div className="flex flex-col gap-[32px] w-full items-center">
      {events.map((event) => (
        <EventCard key={event.eventId} event={event} />
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
