import { useState } from 'react';
import QrCard from './QrCard';
import TicketItemCard from './TicketItemCard';

type TicketItem = {
  id: number;
  bgClassName: string;
  code: string;
  title: string;
  date: string;
  seatLabel: string;
  selectedSeat: string;
  selectedTicketId: string;
};

type SelectedTicket = {
  title: string;
  seat: string;
  ticketId: string;
} | null;

const ticketItems: TicketItem[] = [
  {
    id: 1,
    bgClassName:
      'bg-[linear-gradient(135deg,var(--color-blue-34,#312E81)_0%,var(--color-violet-32,#581C87)_50%,var(--color-black-solid,#000)_100%)]',
    code: '#789012',
    title: "밴드 '새벽' 단독 콘서트 : 밤을 걷는 시간",
    date: '2025.10.24 (금) 19:00',
    seatLabel: 'VIP 스탠딩석',
    selectedSeat: 'VIP ACCESS',
    selectedTicketId: '1234-5678-9012',
  },
  {
    id: 2,
    bgClassName:
      'bg-[linear-gradient(135deg,var(--color-azure-33,#1E3A8A)_0%,var(--color-cyan-31,#0E7490)_50%)]',
    code: '#321098',
    title: '2025 뉴이어 재즈 페스티벌',
    date: '2025.01.15 (토) 14:00',
    seatLabel: '1일권 (토요일)',
    selectedSeat: 'NORMAL ACCESS',
    selectedTicketId: '1234-5678-9012',
  },
];

const TicketCard = () => {
  const [selectedTicket, setSelectedTicket] =
    useState<SelectedTicket>(null);

  return (
    <div className="self-stretch pb-6 inline-flex gap-6 overflow-hidden">
      {ticketItems.map((item) => (
        <TicketItemCard
          key={item.id}
          item={item}
          onSelect={setSelectedTicket}
        />
      ))}

      {selectedTicket && (
        <QrCard
          title={selectedTicket.title}
          seat={selectedTicket.seat}
          ticketId={selectedTicket.ticketId}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
};

export default TicketCard;
