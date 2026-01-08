import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20">
      {/* Large gradient background blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-orange-200 to-yellow-100 rounded-full blur-[100px] opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col justify-center min-h-[50vh] sm:min-h-[60vh]">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/60 border border-white/60 backdrop-blur text-xs sm:text-sm font-bold text-[#e98047] mb-6 sm:mb-8 shadow-sm mx-auto animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#e98047] animate-pulse"></span>
          라이브의 순간을 함께
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 tracking-tight text-gray-900 leading-[1.1] animate-fade-in-up px-4" style={{animationDelay: '0.1s'}}>
          이번 주말, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e98047] via-[#f5a572] to-[#A569BD] relative">
            라이브의 열기
          </span>를<br/>
          느껴보세요
        </h1>

        <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
          떠오르는 신예 아티스트들의 생생한 무대를 <br className="hidden sm:block"/>
          가장 가까이서 경험할 수 있는 <strong className="text-gray-900">특별한 기회</strong>
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
