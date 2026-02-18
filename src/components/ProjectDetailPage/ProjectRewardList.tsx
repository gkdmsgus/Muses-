import { useEffect, useState } from 'react';
import {
  type ProjectDetailData,
  type ProjectReward,
} from '../../types/projectDetails';
import { ProjectRewardCard } from './ProjectRewardCard';
import axios from 'axios';
import { ENDPOINTS } from '../../api/endpoints';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';

interface ProjectRewardListProps {
  detail: ProjectDetailData;
}

export const ProjectRewardList = ({ detail }: ProjectRewardListProps) => {
  const [selectedQuantities, setSelectedQuantities] = useState<
    Record<number, number>
  >({});
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [showSelectNotice, setShowSelectNotice] = useState(false);
  const selectedRewards =
    detail?.rewards?.filter(
      (reward) => (selectedQuantities[reward.rewardId] ?? 0) > 0
    ) ?? [];
  const totalAmount = selectedRewards.reduce(
    (sum, reward) =>
      sum + reward.price * (selectedQuantities[reward.rewardId] ?? 0),
    0
  );

  // 결제 연동 관련 상태
  const [paymentError, setPaymentError] = useState('');

  const handleSelectReward = (reward: ProjectReward) => {
    setSelectedQuantities((prev) => {
      if (prev[reward.rewardId]) return prev;
      return { ...prev, [reward.rewardId]: 1 };
    });
  };

  const handleQuantityChange = (rewardId: number, quantity: number) => {
    setSelectedQuantities((prev) => {
      if (quantity <= 0) {
        const next = { ...prev };
        delete next[rewardId];
        return next;
      }
      const reward = detail?.rewards?.find(
        (item) => item.rewardId === rewardId
      );
      const maxAvailable =
        reward?.remainingQuantity !== undefined
          ? Math.max(0, reward.remainingQuantity)
          : quantity;
      return {
        ...prev,
        [rewardId]: Math.min(quantity, maxAvailable),
      };
    });
  };

  useEffect(() => {
    if (!isPaymentOpen) return;
    setPaymentError('');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isPaymentOpen]);

  useEffect(() => {
    if (selectedRewards.length > 0) {
      setShowSelectNotice(false);
    }
  }, [selectedRewards.length]);

  // Toss 빌링키 발급 (카드 등록)
  const handlePayment = async () => {
    if (selectedRewards.length === 0) return;
    setPaymentError('');
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        alert('로그인 후 이용해주세요.');
        window.location.href = '/login';
        return;
      }

      const clientKey =
        import.meta.env.VITE_TOSS_CLIENT_KEY ??
        'test_ck_Poxy1XQL8RYYmn7EOn9Zr7nO5Wml';

      // 1. 주문 생성 (백엔드에서 orderId, customerKey 발급)
      const response = await axios.post(
        ENDPOINTS.ORDERS_PREPARE,
        {
          projectId: detail.projectId,
          items: selectedRewards.map((reward) => ({
            rewardId: reward.rewardId,
            quantity: selectedQuantities[reward.rewardId] ?? 0,
            unitPrice: reward.price,
          })),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.data?.success) {
        throw new Error(
          response.data?.error?.message ?? '주문 생성에 실패했습니다.'
        );
      }

      const { orderId, customerKey } = response.data.data ?? {};
      if (orderId == null || !customerKey) {
        throw new Error('주문 정보를 받지 못했습니다.');
      }

      const successUrl = `${window.location.origin}/billing/success?orderId=${encodeURIComponent(orderId)}`;
      const failUrl = `${window.location.origin}/billing/fail`;

      const tossPayments = await loadTossPayments(clientKey);
      const payment = tossPayments.payment({ customerKey });
      await payment.requestBillingAuth({
        method: 'CARD',
        successUrl,
        failUrl,
      });

      setIsPaymentOpen(false);
    } catch (error) {
      setPaymentError(
        error instanceof Error
          ? error.message
          : '카드 등록 요청에 실패했습니다.'
      );
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      <p className="text-lg font-boldFont text-mainBlack px-2">리워드 선택</p>
      <div className="flex flex-col gap-4">
        {detail?.rewards?.map((reward) => {
          const selectedQuantity = selectedQuantities[reward.rewardId] ?? 0;
          return (
            <ProjectRewardCard
              key={reward.rewardId}
              reward={reward}
              onClick={handleSelectReward}
              isSelected={selectedQuantity > 0}
              quantity={selectedQuantity > 0 ? selectedQuantity : undefined}
              onQuantityChange={
                selectedQuantity > 0
                  ? (nextQuantity) =>
                      handleQuantityChange(reward.rewardId, nextQuantity)
                  : undefined
              }
            />
          );
        })}
      </div>
      {showSelectNotice && (
        <p className="text-sm font-mediumFont text-[#EF4444] px-2">
          리워드를 선택해주세요!
        </p>
      )}
      <button
        type="button"
        className={`w-full h-14 mb-2 rounded-xl font-boldFont text-base cursor-pointer ${
          selectedRewards.length === 0
            ? 'bg-black40 text-mainWhite'
            : 'bg-mainBlack text-mainWhite'
        }`}
        onClick={() => {
          if (selectedRewards.length === 0) {
            setShowSelectNotice(true);
            return;
          }
          setIsPaymentOpen(true);
        }}
      >
        {selectedRewards.length === 0
          ? '응원하기'
          : `총 ${totalAmount.toLocaleString()}원 응원하기`}
      </button>
      {/* 결제 모달 창 */}
      {isPaymentOpen && selectedRewards.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setIsPaymentOpen(false)}
          />
          <div
            className="relative z-10 w-fit min-w-[620px] rounded-[48px] bg-white p-10 mx-4"
            role="dialog"
            aria-modal="true"
          >
            <h3 className="text-2xl font-boldFont text-mainBlack mb-8">
              응원하기
            </h3>
            <div className="rounded-2xl border border-white40 bg-white80 p-10 mb-10 w-full">
              <p className="text-base text-solidBlue mb-5 font-boldFont">
                선택한 리워드
              </p>
              <div className="flex flex-col gap-5 border-b border-white40 pb-7.5 mb-7.5">
                {selectedRewards.map((reward) => (
                  <div
                    key={reward.rewardId}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex gap-4 items-center mb-2.5">
                        <p className="text-2xl font-boldFont text-mainBlack">
                          {reward.rewardName}
                        </p>
                        <p className="text-base text-black60 font-mediumFont">
                          x {selectedQuantities[reward.rewardId]}
                        </p>
                      </div>
                      <p className="text-base text-black60 font-mediumFont">
                        {reward.description}
                      </p>
                    </div>
                    <p className="text-lg font-boldFont text-solidBlue">
                      {(
                        reward.price *
                        (selectedQuantities[reward.rewardId] ?? 0)
                      ).toLocaleString()}
                      원
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl text-black80 font-boldFont">결제 금액</p>
                <p className="text-2xl font-blackFont text-solidBlue">
                  {totalAmount.toLocaleString()}원
                </p>
              </div>
            </div>
            {paymentError && (
              <p className="mb-8 text-sm font-mediumFont text-[#EF4444]">
                {paymentError}
              </p>
            )}

            <button
              type="button"
              className="w-full h-20 rounded-xl font-boldFont text-2xl bg-mainBlack text-mainWhite cursor-pointer"
              onClick={handlePayment}
            >
              결제하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
