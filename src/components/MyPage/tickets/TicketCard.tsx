// TicketCard.tsx
import { useEffect, useState } from 'react';
import TicketItemCard from './TicketItemCard';
import QrCard from './QrCard';
import { getMyTickets, getCheckinToken } from '../../../api/ticket';
import { mapTicketToItem, type TicketItem } from '../types/ticket';

interface Props {
  onCountChange?: (count: number) => void;
}

const TicketCard = ({onCountChange}: Props) => {
  const [tickets, setTickets] = useState<TicketItem[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<TicketItem | null>(null);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 티켓 리스트 불러오기
  useEffect(() => {
  const fetchTickets = async () => {
    try {
      const data = await getMyTickets();
      const mapped = data.map(mapTicketToItem);

      setTickets(mapped);
      onCountChange?.(mapped.length); // 🔥 추가
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  fetchTickets();
}, []);


  // 카드 선택 시 토큰 발급
  const handleSelect = async (ticketId: string) => {
    try {
      const token = await getCheckinToken(ticketId);
      setSelectedToken(token.ticketToken);

      const found = tickets.find((t) => t.ticketId === ticketId);
      if (found) setSelectedTicket(found);
    } catch {
      console.error('토큰 발급 실패');
    }
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>티켓을 불러오지 못했습니다.</div>;

  return (
  <>
    <div className="flex gap-6 overflow-x-auto pb-6">
      {tickets.map((item) => (
        <TicketItemCard
          key={item.id}
          item={item}
          onSelect={handleSelect}
        />
      ))}
    </div>

    {selectedTicket && selectedToken && (
      <QrCard
        title={selectedTicket.title}
        seat={selectedTicket.selectedSeat}
        ticketToken={selectedToken}
        onClose={() => {
          setSelectedTicket(null);
          setSelectedToken(null);
        }}
      />
    )}
  </>
);

};

export default TicketCard;
