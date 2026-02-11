import { Lock } from 'lucide-react';
import { PaymentStatusCard } from './PaymentStatusCard';

{/*interface SettlementTabProps {
  projectId?: string;
}*/}

const SettlementTab = ({/*{ projectId }: SettlementTabProps*/}) => {
  const paymentStatus: 'PENDING' | 'PROCESSING' | 'DONE' = 'DONE';

  return (
    <div className="w-[768px] p-8 bg-white rounded-2xl border border-white80 flex flex-col gap-6">
      {/* 제목 */}
      <div className="text-[#1F2937] text-xl font-boldFont leading-7">정산</div>

      <div className="w-[702px] flex flex-col gap-6">
        {/* 총 모금액 */}
        <div className="flex flex-col gap-2">
          <div className="text-[#374151] text-sm font-mediumFont leading-5">
            총 모금액
          </div>
          <div className="h-14 px-4 bg-white rounded-xl border border-white60 flex items-center">
            <div className="text-black80 text-base font-mainFont leading-6">
              지역 문화예술 축제를 통해 커뮤니티를 연결합니다.
            </div>
          </div>
        </div>

        {/* 수수료 */}
        <div className="flex flex-col gap-2">
          <div className="text-[#374151] text-sm font-mediumFont leading-5">
            수수료
          </div>
          <div className="h-14 px-4 bg-white rounded-xl border border-white60 flex items-center">
            <div className="text-black80 text-base font-mainFont leading-6">
              #태그 입력 (Enter)
            </div>
          </div>
        </div>

        {/* 지급 상태 */}
        <div className="self-stretch pt-6 border-t border-white60 flex flex-col gap-4 text-[#854D0E]">
          <div className="self-stretch p-4 bg-[#F3E8FF] rounded-xl flex items-start">
            <div className="w-5 h-5 text-[#CA8A04]">
              <Lock size={20} />
            </div>
            <div className="pl-3 text-base font-semiBoldFont leading-6">
              지급액
            </div>
          </div>

          <PaymentStatusCard status={paymentStatus} />
        </div>
      </div>
    </div>
  );
};

export default SettlementTab;
