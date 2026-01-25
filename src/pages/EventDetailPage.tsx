import { MOCK_EVENTS } from '../mocks/events';
import EventDetailBanner from '../components/EventDetailPage/EventDetailBanner';
import EventDetailBody from '../components/EventDetailPage/EventDetailBody';

export default function EventDetailPage() {
  //테스트용으로 첫 번째 데이터 사용함
  const event = MOCK_EVENTS[0];

  return (
    <main className="min-h-screen w-full bg-white pt-[72px]">
      <EventDetailBanner event={event} />

      <EventDetailBody event={event} />
    </main>
  );
}
