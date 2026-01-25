import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_EVENTS } from '../mocks/events';
import EventDetailBanner from '../components/EventDetailPage/EventDetailBanner';
import EventDetailBody from '../components/EventDetailPage/EventDetailBody';

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentIndex = MOCK_EVENTS.findIndex(
    (e) => String(e.event_id) === String(id)
  );
  const event = MOCK_EVENTS[currentIndex];

  const prevEvent = MOCK_EVENTS[currentIndex - 1];

  const goToEvent = (eventId: number | string) => {
    navigate(`/events/${eventId}`);
    window.scrollTo(0, 0);
  };

  const goToList = () => {
    navigate('/events');
  };

  //예외 처리
  if (!event) {
    return (
      <div className="pt-[100px] text-center">이벤트를 찾을 수 없습니다.</div>
    );
  }
  return (
    <main className="min-h-screen w-full bg-white pt-[72px]">
      <EventDetailBanner
        event={event}
        onPrev={prevEvent ? () => goToEvent(prevEvent.event_id) : undefined}
      />

      <EventDetailBody event={event} onGoToList={goToList} />
    </main>
  );
}
