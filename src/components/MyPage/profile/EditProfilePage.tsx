import { ChevronDown, Mail, Pencil } from 'lucide-react';
import profileimg from '../../../assets/images/profileimg.svg';

export default function EditProfilePage() {
  return (
    <div className="w-full min-h-[713px] px-64 pb-20 relative bg-white80 inline-flex flex-col justify-center items-center overflow-visible">
      <div className=" left-0 top-0 absolute" />
      <div className="w-full max-w-[896px] px-6 pt-24 flex flex-col justify-start items-start gap-8">
        <div className="self-stretch p-8 bg-white rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-white80 inline-flex justify-start items-start gap-6 overflow-hidden">
          <div className="w-32 h-32 relative">
            <div className="flex items-center justify-center w-32 h-32 bg-white rounded-full border border-stone-300">
              <img src={profileimg} alt="logo" className="w-24 h-20" />
            </div>
            <div className="flex absolute top-[75%] right-[3%] w-7 h-7 bg-[#FAFBFD] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] items-center justify-center">
              <Pencil size={12} />
            </div>
          </div>
          <div className="w-[608px] inline-flex flex-col justify-start items-start gap-3">
            <div className="px-3 py-1 bg-[#EEF2FF] rounded-full inline-flex justify-start items-start">
              <div className="justify-center text-[#4F46E5] text-xs font-boldFont leading-4">
                Lv.3 열정적인 서포터
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-44">
                    <div className="justify-center text-[#374151] text-sm font-mediumFont leading-5">
                      닉네임
                    </div>
                    <div className="p-1 bg-[#E7E7E7] rounded-[5px] flex justify-center items-center gap-2.5">
                      <div className="justify-center text-[#374151] text-xs font-boldFont leading-5">
                        중복확인
                      </div>
                    </div>
                  </div>
                  <div className="w-64 flex flex-col justify-start items-start">
                    <div className="w-64 p-3 bg-color-white-solid rounded-xl border border-[#D1D5DB] inline-flex justify-center items-start overflow-hidden">
                      <div className="flex-1 inline-flex flex-col justify-center items-center overflow-hidden">
                        <div className="self-stretch justify-center text-black40 text-base font-mainFont">
                          푸른 오렌지
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  data-variant="5"
                  className="px-5 py-2 bg-black rounded-full inline-flex flex-col justify-center items-center cursor-pointer transition hover:bg-solidBlue"
                >
                  <div className="text-center justify-center text-white text-sm font-boldFont leading-5">
                    프로필 편집
                  </div>
                </button>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-44">
                <div className="justify-center text-[#374151] text-sm font-mediumFont leading-5">
                  이메일
                </div>
                <div className="p-1 bg-[#E7E7E7] rounded-[5px] flex justify-center items-center gap-2.5">
                  <div className="justify-center text-[#374151] text-xs font-boldFont leading-5">
                    중복확인
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch p-3 relative bg-color-white-solid rounded-xl border border-[#D1D5DB] inline-flex justify-center items-start overflow-hidden">
                  <div className="flex-1 inline-flex overflow-hidden">
                    <div className="flex self-stretch items-center gap-2 text-black40 text-base font-mainFont">
                      <Mail size={20} />
                      <span>example@muses.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-center text-[#374151] text-sm font-mediumFont leading-5">
                소개글
              </div>
              <div className="self-stretch p-4 bg-color-white-solid rounded-xl border border-[#D1D5DB] inline-flex justify-start items-center overflow-hidden">
                <div className="w-84 inline-flex flex-col justify-center items-start overflow-hidden">
                  <div className="self-stretch justify-center text-black80 text-sm font-mainFont leading-6">
                    새벽의 차분함과 아침의 희망을 노래하는 밴드 '새벽'입니다.
                    <br />
                    우리의 음악이 당신의 하루에 작은 위로가 되길 바랍니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-start items-start gap-7">
                <div className="flex-1 h-20 inline-flex flex-col justify-center items-center gap-1">
                  <div className="self-stretch justify-center text-[#374151] text-sm font-mediumFont leading-5">
                    생년월일
                  </div>
                  <div className="w-44 flex flex-col justify-start items-start">
                    <div className="self-stretch px-4 py-3.5 bg-white rounded-xl border border-[#D1D5DB] inline-flex justify-center items-start overflow-hidden">
                      <div className="flex-1 inline-flex flex-col justify-center items-center overflow-hidden">
                        <div className="self-stretch justify-center text-black40 text-base font-mainFont">
                          980102
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-center items-center gap-1">
                  <div className="w-32 justify-center text-[#374151] text-sm font-mediumFont leading-5">
                    성별
                  </div>
                  <div className="w-32 h-12 flex flex-col justify-center items-end">
                    <div className="self-stretch h-12 px-4 py-3.5 bg-color-white-solid rounded-xl border border-[#D1D5DB] inline-flex justify-center items-center gap-7 overflow-hidden">
                      <div className="inline-flex flex-col justify-center items-center">
                        <div className="text-center justify-center text-black80 text-base font-boldFont leading-6">
                          여자
                        </div>
                      </div>
                      <button
                        data-variant="6"
                        className="w-4 h-4 relative transition hover:text-black60 cursor-pointer"
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
