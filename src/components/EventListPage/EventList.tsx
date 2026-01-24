import EventCard from './EventCard';
import { MOCK_EVENTS } from '../../mocks/events';

export default function EventList() {
  return (
    <div className="flex flex-col gap-[32px] w-full items-center">
      {MOCK_EVENTS.map((event) => (
        <EventCard key={event.event_id} event={event} />
      ))}
    </div>
  );
}
