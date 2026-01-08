import React, { useState } from 'react';
import { Ticket, Calendar, MapPin, Clock, QrCode, Download, Share2 } from 'lucide-react';
import Toast from '../common/Toast';
import { useToast } from '../../hooks/useToast';

// Mock 사용자 티켓 데이터
const MY_TICKETS = [
  {
    id: 't1',
    projectId: 1,
    title: '2024 Neon City Jazz Festival',
    organizer: 'Blue Note Seoul',
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e3383?auto=format&fit=crop&q=80&w=800',
    date: '2024-02-15',
    time: '19:00',
    location: '성수 에스팩토리',
    ticketType: 'VIP',
    price: 89000,
    status: 'upcoming', // upcoming, used, cancelled
    qrCode: 'MUSES-T1-2024-VIP',
  },
  {
    id: 't2',
    projectId: 6,
    title: "뮤지컬 '해밀턴' 한국 초연",
    organizer: 'Broadway Korea',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800',
    date: '2024-02-20',
    time: '15:00',
    location: '샤롯데씨어터',
    ticketType: '일반석',
    price: 120000,
    status: 'upcoming',
    qrCode: 'MUSES-T2-2024-GEN',
  },
  {
    id: 't3',
    projectId: 7,
    title: 'BTS 진 팬미팅: Welcome Home',
    organizer: 'HYBE Entertainment',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800',
    date: '2024-01-05',
    time: '18:00',
    location: '올림픽공원 KSPO돔',
    ticketType: 'Premium',
    price: 150000,
    status: 'used',
    qrCode: 'MUSES-T3-2024-PRM',
  },
];

const TicketCard = ({ ticket, onClick }) => {
  const getStatusBadge = () => {
    switch (ticket.status) {
      case 'upcoming':
        return <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">예정</span>;
      case 'used':
        return <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">사용완료</span>;
      case 'cancelled':
        return <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">취소됨</span>;
      default:
        return null;
    }
  };

  return (
    <div
      onClick={() => onClick(ticket)}
      className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer active:scale-95 border ${
        ticket.status === 'used' ? 'border-gray-200 opacity-75' : 'border-gray-100'
      }`}
    >
      {/* Image */}
      <div className="relative h-32 sm:h-40 overflow-hidden">
        <img src={ticket.image} alt={ticket.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
          {getStatusBadge()}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-1">{ticket.title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{ticket.organizer}</p>

        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e98047]" />
            <span>{ticket.date} {ticket.time}</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e98047]" />
            <span className="truncate">{ticket.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
          <div>
            <div className="text-[10px] sm:text-xs text-gray-500">티켓 타입</div>
            <div className="text-xs sm:text-sm font-bold text-gray-900">{ticket.ticketType}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] sm:text-xs text-gray-500">가격</div>
            <div className="text-xs sm:text-sm font-bold text-[#e98047]">{ticket.price.toLocaleString()}원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TicketDetailModal = ({ ticket, onClose, showToastMessage }) => {
  if (!ticket) return null;

  const handleDownload = () => {
    showToastMessage(`${ticket.title} 티켓을 다운로드합니다`, 'success');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: ticket.title,
        text: `${ticket.title} 티켓\n일시: ${ticket.date} ${ticket.time}\n장소: ${ticket.location}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      showToastMessage('티켓 정보가 복사되었습니다', 'success');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
        {/* Header Image */}
        <div className="relative h-48">
          <img src={ticket.image} alt={ticket.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">{ticket.title}</h2>
          <p className="text-gray-600 mb-6">{ticket.organizer}</p>

          {/* QR Code Section */}
          <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-6 mb-6 text-center">
            <div className="w-48 h-48 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <QrCode className="w-32 h-32 text-gray-300" />
            </div>
            <p className="text-sm font-mono text-gray-600 mb-2">{ticket.qrCode}</p>
            <p className="text-xs text-gray-500">입장 시 QR코드를 제시해주세요</p>
          </div>

          {/* Details */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#e98047] mt-0.5" />
              <div>
                <div className="text-xs text-gray-500">일시</div>
                <div className="font-semibold text-gray-900">{ticket.date} {ticket.time}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#e98047] mt-0.5" />
              <div>
                <div className="text-xs text-gray-500">장소</div>
                <div className="font-semibold text-gray-900">{ticket.location}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Ticket className="w-5 h-5 text-[#e98047] mt-0.5" />
              <div>
                <div className="text-xs text-gray-500">티켓 타입</div>
                <div className="font-semibold text-gray-900">{ticket.ticketType}</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          {ticket.status === 'upcoming' && (
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={handleDownload}
                className="flex-1 h-11 sm:h-12 bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white rounded-xl font-bold hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                다운로드
              </button>
              <button
                onClick={handleShare}
                className="h-11 sm:h-12 px-3 sm:px-4 bg-gray-100 rounded-xl hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
            </div>
          )}

          {ticket.status === 'used' && (
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <p className="text-sm font-semibold text-gray-600">사용 완료된 티켓입니다</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MyTicketPage = ({ onTicketModalChange }) => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedTab, setSelectedTab] = useState('upcoming'); // upcoming, past
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [allTickets, setAllTickets] = useState(MY_TICKETS);
  const { showToast, toastMessage, toastType, showToastMessage, hideToast } = useToast();

  // localStorage에서 티켓 불러오기
  React.useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('myTickets') || '[]');
    if (storedTickets.length > 0) {
      // 기존 목 데이터와 합치기
      const combined = [...storedTickets, ...MY_TICKETS];
      // 날짜순으로 정렬 (최신순)
      combined.sort((a, b) => new Date(b.date) - new Date(a.date));
      setAllTickets(combined);
    }
  }, []);

  // 티켓 업데이트를 위한 이벤트 리스너
  React.useEffect(() => {
    const handleStorageChange = () => {
      const storedTickets = JSON.parse(localStorage.getItem('myTickets') || '[]');
      if (storedTickets.length > 0) {
        const combined = [...storedTickets, ...MY_TICKETS];
        combined.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAllTickets(combined);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    if (onTicketModalChange) {
      onTicketModalChange(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
    if (onTicketModalChange) {
      onTicketModalChange(false);
    }
  };

  const filteredTickets = allTickets.filter((ticket) =>
    selectedTab === 'upcoming' ? ticket.status === 'upcoming' : ticket.status === 'used'
  );

  return (
    <div className="min-h-screen bg-[#f8f9fc] pb-32 pt-20">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-md border-b border-white/40 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">마이 티켓</h1>

          {/* Tabs */}
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`flex-1 py-3 sm:py-4 rounded-[1rem] font-black text-sm sm:text-base transition-all active:scale-95 ${
                selectedTab === 'upcoming'
                  ? 'bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white shadow-xl'
                  : 'bg-white text-gray-600 border-2 border-gray-200'
              }`}
            >
              <span className="hidden sm:inline">예정된 티켓 ({allTickets.filter(t => t.status === 'upcoming').length})</span>
              <span className="sm:hidden">예정 ({allTickets.filter(t => t.status === 'upcoming').length})</span>
            </button>
            <button
              onClick={() => setSelectedTab('past')}
              className={`flex-1 py-3 sm:py-4 rounded-[1rem] font-black text-sm sm:text-base transition-all active:scale-95 ${
                selectedTab === 'past'
                  ? 'bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white shadow-xl'
                  : 'bg-white text-gray-600 border-2 border-gray-200'
              }`}
            >
              <span className="hidden sm:inline">지난 티켓 ({allTickets.filter(t => t.status === 'used').length})</span>
              <span className="sm:hidden">지난 ({allTickets.filter(t => t.status === 'used').length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tickets List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {filteredTickets.length === 0 ? (
          <div className="py-20 sm:py-32 text-center px-4">
            <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">🎫</div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2 sm:mb-3">
              {selectedTab === 'upcoming' ? '예정된 티켓이 없습니다' : '지난 티켓이 없습니다'}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">프로젝트에 펀딩하고 티켓을 받아보세요!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredTickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} onClick={handleTicketClick} />
            ))}
          </div>
        )}
      </div>

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <TicketDetailModal
          ticket={selectedTicket}
          onClose={handleCloseModal}
          showToastMessage={showToastMessage}
        />
      )}

      {/* Toast */}
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export default MyTicketPage;
