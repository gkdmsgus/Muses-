import React from 'react';
import { CheckCircle, Ticket, CreditCard } from 'lucide-react';

const PaymentSuccessModal = ({ amount, onClose, onGoToTickets }) => {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl animate-slideUp overflow-hidden">
        {/* Success Icon */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">결제 완료!</h2>
          <p className="text-gray-600">결제가 성공적으로 완료되었습니다</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Payment Info */}
          <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 text-sm">결제 금액</span>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gray-500" />
                <span className="text-xs text-gray-500">신용카드</span>
              </div>
            </div>
            <div className="text-3xl font-black bg-gradient-to-r from-[#e98047] to-[#A569BD] bg-clip-text text-transparent">
              {amount.toLocaleString()}원
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <Ticket className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-900 mb-1">
                  티켓이 발급되었습니다
                </p>
                <p className="text-xs text-blue-700">
                  마이티켓 페이지에서 티켓을 확인하실 수 있습니다
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={onGoToTickets}
              className="w-full h-14 bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              티켓 확인하기
            </button>
            <button
              onClick={onClose}
              className="w-full h-14 bg-gray-100 text-gray-700 rounded-2xl font-bold text-base hover:bg-gray-200 active:scale-95 transition-all"
            >
              계속 둘러보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
