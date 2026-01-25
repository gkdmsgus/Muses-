import EventHero from '../components/EventListPage/EventHero';
import EventSearchBar from '../components/EventListPage/EventSearchBar';
import EventList from '../components/EventListPage/EventList';
export default function EventListPage() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: 'url("src/assets/images/backgrounds/event_bg.png")',
      }}
    >
      <section className="mx-auto w-[896px] flex flex-col pt-[128px] pb-[80px] px-[24px] gap-[64px]">
        <div className="flex flex-col items-center gap-[24px]">
          <EventHero /> {/* 로고/타이틀 */}
          <EventSearchBar /> {/* 검색창 */}
        </div>

        {/* 3. 이벤트 리스트 컴포넌트 */}
        <EventList />
      </section>
    </div>
  );
}
