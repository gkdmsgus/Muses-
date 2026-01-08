import React, { useState } from 'react';
import { X, CreditCard, Check, ChevronLeft } from 'lucide-react';
import PaymentSuccessModal from '../common/PaymentSuccessModal';
import Toast from '../common/Toast';

const PaymentPage = ({ project, reward, onClose, onComplete }) => {
  const [agreed, setAgreed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'bank'
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  if (!project || !reward) return null;

  const showErrorToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const handlePayment = () => {
    if (!agreed) {
      showErrorToast('결제 약관에 동의해주세요');
      return;
    }

    // 결제 처리 시뮬레이션
    setTimeout(() => {

      const now = Date.now();
      const today = new Date().toISOString().split('T')[0];

      // 로컬 스토리지에 펀딩 내역 저장
      const fundingHistory = JSON.parse(localStorage.getItem('fundingHistory') || '[]');
      const newFunding = {
        id: now,
        projectId: project.id,
        projectTitle: project.title,
        projectImage: project.image,
        rewardName: reward.name,
        amount: reward.price,
        date: today,
        status: 'completed',
      };
      fundingHistory.push(newFunding);
      localStorage.setItem('fundingHistory', JSON.stringify(fundingHistory));

      // 로컬 스토리지에 티켓 저장
      const myTickets = JSON.parse(localStorage.getItem('myTickets') || '[]');
      const newTicket = {
        id: `t-${now}`,
        projectId: project.id,
        title: project.title,
        organizer: project.organizer,
        image: project.image,
        date: '2024-03-15', // 실제로는 프로젝트 날짜를 사용해야 함
        time: '19:00',
        location: project.location || '서울',
        ticketType: reward.name,
        price: reward.price,
        status: 'upcoming',
        qrCode: `MUSES-${now}-${reward.name.toUpperCase()}`,
      };
      myTickets.push(newTicket);
      localStorage.setItem('myTickets', JSON.stringify(myTickets));

      // 결제 완료 모달 표시
      setShowSuccessModal(true);
    }, 1000);
  };

  const handleGoToTickets = () => {
    setShowSuccessModal(false);
    if (onComplete) {
      onComplete();
    }
    onClose();
    // 티켓 페이지로 이동은 App에서 처리
  };

  return (
    <div className="fixed inset-0 z-[70] bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">이전</span>
            </button>
            <h1 className="text-xl font-black text-gray-900">결제하기</h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 pb-32">
        {/* Project Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 mb-6">주문 정보</h2>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 flex gap-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.organizer}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
                {reward.name}
              </div>
            </div>
          </div>
        </div>

        {/* Reward Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 mb-4">리워드 혜택</h2>
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="space-y-2">
              {reward.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-[#A569BD]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 mb-4">결제 수단</h2>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                paymentMethod === 'card'
                  ? 'border-[#A569BD] bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === 'card' ? 'border-[#A569BD]' : 'border-gray-300'
                }`}>
                  {paymentMethod === 'card' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A569BD]" />
                  )}
                </div>
                <CreditCard className="w-5 h-5 text-gray-600" />
                <span className="font-bold text-gray-900">신용/체크카드</span>
              </div>
            </button>

            <button
              onClick={() => setPaymentMethod('bank')}
              className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                paymentMethod === 'bank'
                  ? 'border-[#A569BD] bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === 'bank' ? 'border-[#A569BD]' : 'border-gray-300'
                }`}>
                  {paymentMethod === 'bank' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A569BD]" />
                  )}
                </div>
                <span className="font-bold text-gray-900">계좌이체</span>
              </div>
            </button>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 mb-4">결제 금액</h2>
          <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-6">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>리워드 금액</span>
                <span className="font-semibold">{reward.price.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>수수료</span>
                <span className="font-semibold">0원</span>
              </div>
            </div>
            <div className="pt-4 border-t-2 border-white/50 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">총 결제금액</span>
              <span className="text-2xl font-black bg-gradient-to-r from-[#e98047] to-[#A569BD] bg-clip-text text-transparent">
                {reward.price.toLocaleString()}원
              </span>
            </div>
          </div>
        </div>

        {/* Agreement */}
        <div className="mb-8">
          <button
            onClick={() => setAgreed(!agreed)}
            className="w-full p-5 rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all flex items-center gap-3"
          >
            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
              agreed ? 'bg-[#A569BD] border-[#A569BD]' : 'border-gray-300'
            }`}>
              {agreed && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
            </div>
            <span className="font-bold text-gray-900 flex-1 text-left">
              결제 약관 및 개인정보 처리방침에 동의합니다
            </span>
          </button>
        </div>
      </div>

      {/* Fixed Bottom Payment Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handlePayment}
            disabled={!agreed}
            className={`w-full h-14 rounded-2xl font-bold text-base shadow-lg transition-all ${
              agreed
                ? 'bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white hover:shadow-xl active:scale-95'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {reward.price.toLocaleString()}원 결제하기
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <PaymentSuccessModal
          amount={reward.price}
          onClose={() => {
            setShowSuccessModal(false);
            onClose();
          }}
          onGoToTickets={handleGoToTickets}
        />
      )}

      {/* Toast */}
      {showToast && (
        <Toast
          message={toastMessage}
          type="warning"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default PaymentPage;
