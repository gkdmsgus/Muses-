import React, { useState } from 'react';
import { Ticket, ChevronRight, Users, Sparkles } from 'lucide-react';

const Onboarding = ({ onStart }) => {
  const [step, setStep] = useState(1); // 1: 시작 화면, 2: 회원 유형 선택
  const [userType, setUserType] = useState(null); // 'supporter' or 'creator'

  const handleStart = () => {
    setStep(2);
  };

  const handleSelectUserType = (type) => {
    setUserType(type);
    // 회원 유형을 로컬 스토리지에 저장
    localStorage.setItem('userType', type);
    onStart();
  };

  if (step === 2) {
    return (
      <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-white">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50 z-0" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#e98047]/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-[#A569BD]/20 to-transparent rounded-full blur-3xl animate-pulse" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4 text-gray-900">
            어떤 방식으로<br className="sm:hidden" /> 참여하시나요?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-12">
            회원 유형에 따라 제공되는 기능이 달라집니다
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl">
            {/* 후원자 카드 */}
            <button
              onClick={() => handleSelectUserType('supporter')}
              className="group relative bg-white rounded-[2rem] p-6 sm:p-8 border-2 border-gray-200 hover:border-[#e98047] transition-all hover:shadow-2xl hover:shadow-orange-100/50 active:scale-95"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3">후원자</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                다양한 프로젝트를 후원하고<br />
                특별한 경험을 즐기세요
              </p>
              <div className="flex flex-col gap-1.5 sm:gap-2 text-left">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e98047]"></div>
                  프로젝트 후원 및 펀딩
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e98047]"></div>
                  이벤트 티켓 관리
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e98047]"></div>
                  관심 프로젝트 저장
                </div>
              </div>
            </button>

            {/* 창작자 카드 */}
            <button
              onClick={() => handleSelectUserType('creator')}
              className="group relative bg-white rounded-[2rem] p-6 sm:p-8 border-2 border-gray-200 hover:border-[#A569BD] transition-all hover:shadow-2xl hover:shadow-purple-100/50 active:scale-95"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3">창작자</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                나만의 프로젝트를 만들고<br />
                후원자들과 함께하세요
              </p>
              <div className="flex flex-col gap-1.5 sm:gap-2 text-left">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A569BD]"></div>
                  프로젝트 생성 및 관리
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A569BD]"></div>
                  후원자 소통 및 관리
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A569BD]"></div>
                  펀딩 통계 및 분석
                </div>
              </div>
            </button>
          </div>

          <button
            onClick={() => setStep(1)}
            className="mt-8 text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors"
          >
            ← 이전으로
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50 z-0" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#e98047]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-[#A569BD]/20 to-transparent rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-md mx-auto">
        <div className="w-24 h-24 bg-gradient-to-br from-[#e98047] to-[#A569BD] rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-purple-200/50 rotate-3 hover:rotate-0 transition-transform duration-500">
          <Ticket className="w-12 h-12 text-white" strokeWidth={2.5} />
        </div>

        <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight bg-gradient-to-r from-[#e98047] via-[#A569BD] to-purple-600 bg-clip-text text-transparent">
          Discover the<br/>
          Live Culture
        </h1>

        <p className="text-gray-600 text-lg font-medium mb-4 leading-relaxed">
          당신만을 위한 특별한 순간,
        </p>
        <p className="text-gray-500 text-base mb-12">
          크라우드펀딩으로 만드는 오프라인 이벤트
        </p>

        <button
          onClick={handleStart}
          className="w-full h-14 bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white rounded-2xl font-bold text-base shadow-xl shadow-purple-300/40 hover:shadow-2xl hover:shadow-purple-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          시작하기
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
        </button>

        <p className="text-gray-400 text-xs mt-6">
          새로운 경험의 시작
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
