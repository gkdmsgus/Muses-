import { Target, Users } from "lucide-react";

export const RewardStatusCard = () => {
  return (
    <div className="flex-1 p-6 bg-white rounded-2xl shadow border border-white80">
        <div className="w-[554px] inline-flex justify-between items-center">
          <div className="inline-flex flex-col justify-start items-start">
            <div className="justify-center text-[#1F2937] text-lg font-boldFont leading-7">
              리워드 판매 현황
            </div>
          </div>
          <div data-variant="7" className="w-5 h-5 relative">
            <Target size={20} className="text-black40"/>
          </div>
        </div>
        <div className="w-[554px] flex flex-col justify-start items-start gap-4">
          <div className="self-stretch h-14 relative">
            <div className="w-[554px] left-0 top-0 absolute inline-flex justify-between items-center">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-[#374151] text-sm font-mediumFont leading-5">
                  VIP 티켓
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-black80 text-sm font-mainFont leading-5">
                  45/50
                </div>
              </div>
            </div>
            <div className="w-[554px] h-3 left-0 top-[28px] absolute bg-white80 rounded-full overflow-hidden">
              <div className="w-[498.59px] h-3 left-0 top-0 absolute bg-gradient-to-r from-[#4ADE80] to-[#16A34A] rounded-full" />
            </div>
            <div className="w-[554px] left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
              <div className="justify-center text-black60 text-xs font-mainFont leading-4">
                4,500,000원
              </div>
            </div>
          </div>
          <div className="self-stretch h-14 relative">
            <div className="w-[554px] left-0 top-0 absolute inline-flex justify-between items-center">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-[#374151] text-sm font-mediumFont leading-5">
                  일반 티켓
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-black80 text-sm font-mainFont leading-5">
                  123/200
                </div>
              </div>
            </div>
            <div className="w-[554px] h-3 left-0 top-[28px] absolute bg-white80 rounded-full overflow-hidden">
              <div className="w-80 h-3 left-0 top-0 absolute bg-gradient-to-r from-[#4ADE80] to-[#16A34A] rounded-full" />
            </div>
            <div className="w-[554px] left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
              <div className="justify-center text-black60 text-xs font-mainFont leading-4">
                6,150,000원
              </div>
            </div>
          </div>
          <div className="self-stretch h-14 relative">
            <div className="w-[554px] left-0 top-0 absolute inline-flex justify-between items-center">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-[#374151] text-sm font-mediumFont leading-5">
                  굿즈 패키지
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-black80 text-sm font-mainFont leading-5">
                  66/100
                </div>
              </div>
            </div>
            <div className="w-[554px] h-3 left-0 top-[28px] absolute bg-white80 rounded-full overflow-hidden">
              <div className="w-96 h-3 left-0 top-0 absolute bg-gradient-to-r from-[#4ADE80] to-[#16A34A] rounded-full" />
            </div>
            <div className="w-[554px] left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
              <div className="justify-center text-black60 text-xs font-mainFont leading-4">
                1,650,000원
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export const MakerAnalyticsCard = () => {
  return (
    <div className="flex-1 p-6 bg-white rounded-2xl shadow border border-white80">
        <div className="w-[554px] inline-flex justify-between items-center">
          <div className="inline-flex flex-col justify-start items-start">
            <div className="justify-center text-[#1F2937] text-lg font-boldFont leading-7">
              참여 메이커 분석
            </div>
          </div>
          <div data-variant="8" className="w-5 h-5 relative">
           <Users size={20} className="text-black40"/>
           </div>
        </div>
        <div className="w-[554px] flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-[#374151] text-sm font-mediumFont leading-5">
                성별
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-start">
              <div className="w-72 self-stretch p-3 bg-[#DCFCE7] rounded-lg inline-flex flex-col justify-start items-start gap-1">
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-[#2563EB] text-2xl font-boldFont leading-8">
                    45%
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-black80 text-xs font-mainFont leading-4">
                    남성
                  </div>
                </div>
              </div>
              <div className="w-72 self-stretch pl-2 inline-flex flex-col justify-center items-start">
                <div className="self-stretch flex-1 p-3 bg-[#F3E8FF] rounded-lg flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-[#DB2777] text-2xl font-boldFont leading-8">
                      55%
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-black80 text-xs font-mainFont leading-4">
                      여성
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-[#374151] text-sm font-mediumFont leading-5">
                연령대
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-start gap-2">
              <div className="flex-1 self-stretch p-2 bg-[#F8F9FC] rounded-lg inline-flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-[#9333EA] text-lg font-boldFont leading-7">
                    35%
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-black80 text-xs font-boldFont leading-4">
                    20s
                  </div>
                </div>
              </div>
              <div className="flex-1 self-stretch p-2 bg-[#F8F9FC] rounded-lg inline-flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-[#9333EA] text-lg font-boldFont leading-7">
                    40%
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-black80 text-xs font-boldFont leading-4">
                    30s
                  </div>
                </div>
              </div>
              <div className="flex-1 self-stretch p-2 bg-[#F8F9FC] rounded-lg inline-flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-[#9333EA] text-lg font-boldFont leading-7">
                    20%
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-black80 text-xs font-boldFont leading-4">
                    40s
                  </div>
                </div>
              </div>
              <div className="flex-1 self-stretch p-2 bg-[#F8F9FC] rounded-lg inline-flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-[#9333EA] text-lg font-boldFont leading-7">
                    5%
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-black80 text-xs font-boldFont leading-4">
                    50s+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
