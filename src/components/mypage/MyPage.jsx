import React, { useState, useEffect } from 'react';
import { User, Heart, Bell, CreditCard, Settings, ChevronRight, LogOut, Edit2, Camera, Plus, BarChart3, MessageSquare } from 'lucide-react';
import Toast from '../common/Toast';
import { useToast } from '../../hooks/useToast';

// Mock 사용자 데이터
const USER_DATA = {
  name: '김뮤즈',
  email: 'muse@example.com',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
  memberSince: '2023-06',
  totalFunded: 450000,
  projectsSupported: 8,
  upcomingTickets: 2,
};

const LIKED_PROJECTS = [
  {
    id: 1,
    title: '2024 Neon City Jazz Festival',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400',
    percentage: 124,
  },
  {
    id: 6,
    title: "뮤지컬 '해밀턴' 한국 초연",
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=400',
    percentage: 156,
  },
  {
    id: 10,
    title: '일렉트로닉 뮤직 페스티벌 2024',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400',
    percentage: 145,
  },
];

const FUNDED_HISTORY = [
  { id: 1, projectTitle: 'BTS 진 팬미팅', amount: 150000, date: '2024-01-15', status: 'completed' },
  { id: 2, projectTitle: '뮤지컬 해밀턴', amount: 120000, date: '2024-01-20', status: 'completed' },
  { id: 3, projectTitle: 'Jazz Festival', amount: 89000, date: '2024-02-01', status: 'upcoming' },
];

const MyPage = ({ onOpenCreateProject }) => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [userType, setUserType] = useState('supporter'); // 'supporter' or 'creator'
  const [fundedHistory, setFundedHistory] = useState(FUNDED_HISTORY);
  const { showToast, toastMessage, toastType, showToastMessage, hideToast } = useToast();

  useEffect(() => {
    // 로컬 스토리지에서 회원 유형 가져오기
    const storedUserType = localStorage.getItem('userType') || 'supporter';
    setUserType(storedUserType);

    // 로컬 스토리지에서 펀딩 내역 가져오기
    const storedFunding = JSON.parse(localStorage.getItem('fundingHistory') || '[]');
    if (storedFunding.length > 0) {
      // 기존 목 데이터와 합치기
      const combined = [...storedFunding, ...FUNDED_HISTORY];
      // 날짜순으로 정렬 (최신순)
      combined.sort((a, b) => new Date(b.date) - new Date(a.date));
      setFundedHistory(combined.slice(0, 5)); // 최근 5개만 표시
    }
  }, []);

  // 펀딩 내역 업데이트를 위한 이벤트 리스너
  useEffect(() => {
    const handleStorageChange = () => {
      const storedFunding = JSON.parse(localStorage.getItem('fundingHistory') || '[]');
      if (storedFunding.length > 0) {
        const combined = [...storedFunding, ...FUNDED_HISTORY];
        combined.sort((a, b) => new Date(b.date) - new Date(a.date));
        setFundedHistory(combined.slice(0, 5));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleMenuClick = (menuName) => {
    showToastMessage(`${menuName} 페이지로 이동합니다`, 'info');
  };

  const handleProjectClick = (projectTitle) => {
    showToastMessage(`${projectTitle} 상세 페이지로 이동합니다`, 'info');
  };

  const handleLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      showToastMessage('로그아웃 되었습니다', 'success');
    }
  };

  const handleEditProfile = () => {
    showToastMessage('프로필 편집 페이지로 이동합니다', 'info');
  };

  const handleChangeAvatar = () => {
    showToastMessage('프로필 사진을 변경합니다', 'info');
  };

  const handleCreateProject = () => {
    if (onOpenCreateProject) {
      onOpenCreateProject();
    }
  };

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white rounded-[1.2rem] sm:rounded-[1.5rem] p-4 sm:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
      <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-[1rem] sm:rounded-[1.2rem] bg-gradient-to-br ${color} flex items-center justify-center mb-3 sm:mb-4 shadow-md`}>
        <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
      </div>
      <div className="text-lg sm:text-2xl font-black text-gray-900 mb-1">{value}</div>
      <div className="text-[10px] sm:text-xs text-gray-500 font-semibold">{label}</div>
    </div>
  );

  const MenuItem = ({ icon: Icon, label, onClick, badge }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 sm:p-5 bg-white rounded-[1.2rem] sm:rounded-[1.5rem] border border-gray-100 hover:bg-gray-50 transition-all hover:shadow-md active:scale-95 group"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[0.875rem] sm:rounded-[1rem] bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </div>
        <span className="font-bold text-sm sm:text-base text-gray-900">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <span className="bg-red-100 text-red-600 text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full">
            {badge}
          </span>
        )}
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#f8f9fc] pb-32 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#e98047] via-[#f09160] to-[#A569BD] px-4 sm:px-6 pt-8 sm:pt-12 pb-20 sm:pb-24 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-10 -bottom-10 w-56 h-56 sm:w-80 sm:h-80 bg-black/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h1 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8">마이페이지</h1>

          {/* Profile Card */}
          <div className="bg-white/15 backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-7 border border-white/30 shadow-xl">
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="relative flex-shrink-0">
                <img
                  src={USER_DATA.avatar}
                  alt={USER_DATA.name}
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-3 sm:border-4 border-white/60 object-cover shadow-lg"
                />
                <button
                  onClick={handleChangeAvatar}
                  className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                >
                  <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                </button>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg sm:text-2xl font-black text-white truncate">{USER_DATA.name}</h2>
                  {userType === 'creator' && (
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-purple-500/30 backdrop-blur-sm border border-purple-300/50 text-white text-[10px] sm:text-xs font-bold flex-shrink-0">
                      창작자
                    </span>
                  )}
                </div>
                <p className="text-white/90 text-xs sm:text-sm font-medium truncate">{USER_DATA.email}</p>
                <p className="text-white/70 text-[10px] sm:text-xs mt-1 sm:mt-1.5">
                  {USER_DATA.memberSince} 가입
                </p>
              </div>
              <button
                onClick={handleEditProfile}
                className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center hover:bg-white/35 transition-all active:scale-95"
              >
                <Edit2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 sm:px-6 -mt-14 sm:-mt-16 mb-6 sm:mb-8 relative z-20">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <StatCard
            icon={CreditCard}
            label="총 펀딩액"
            value={`${(USER_DATA.totalFunded / 10000).toFixed(0)}만원`}
            color="from-orange-400 to-orange-600"
          />
          <StatCard
            icon={Heart}
            label="참여 프로젝트"
            value={USER_DATA.projectsSupported}
            color="from-purple-400 to-purple-600"
          />
          <StatCard
            icon={Bell}
            label="예정 티켓"
            value={USER_DATA.upcomingTickets}
            color="from-blue-400 to-blue-600"
          />
        </div>
      </div>

      {/* 창작자 전용: 프로젝트 생성 버튼 */}
      {userType === 'creator' && (
        <div className="px-4 sm:px-6 mb-6">
          <button
            onClick={handleCreateProject}
            className="w-full h-14 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white rounded-[1.5rem] font-black text-base sm:text-lg shadow-xl hover:shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <Plus className="w-6 h-6" strokeWidth={3} />
            새 프로젝트 만들기
          </button>
        </div>
      )}

      {/* Menu Sections */}
      <div className="px-4 sm:px-6 space-y-5 sm:space-y-6">
        {/* 창작자 전용 메뉴 */}
        {userType === 'creator' && (
          <section>
            <h3 className="text-base sm:text-lg font-black text-gray-900 mb-3 sm:mb-4">창작자 도구</h3>
            <div className="space-y-2 sm:space-y-3">
              <MenuItem icon={BarChart3} label="내 프로젝트 관리" onClick={() => handleMenuClick('내 프로젝트 관리')} />
              <MenuItem icon={MessageSquare} label="후원자 소통" badge="5" onClick={() => handleMenuClick('후원자 소통')} />
              <MenuItem icon={CreditCard} label="정산 관리" onClick={() => handleMenuClick('정산 관리')} />
            </div>
          </section>
        )}

        {/* 내 활동 */}
        <section>
          <h3 className="text-base sm:text-lg font-black text-gray-900 mb-3 sm:mb-4">내 활동</h3>
          <div className="space-y-2 sm:space-y-3">
            <MenuItem icon={Heart} label="관심 프로젝트" badge={LIKED_PROJECTS.length} onClick={() => handleMenuClick('관심 프로젝트')} />
            <MenuItem icon={CreditCard} label="펀딩 내역" onClick={() => handleMenuClick('펀딩 내역')} />
            <MenuItem icon={Bell} label="알림 설정" badge="3" onClick={() => handleMenuClick('알림 설정')} />
          </div>
        </section>

        {/* 찜한 프로젝트 */}
        <section>
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-black text-gray-900">찜한 프로젝트</h3>
            <button
              onClick={() => handleMenuClick('찜한 프로젝트 전체보기')}
              className="text-xs sm:text-sm text-[#e98047] font-bold hover:text-[#d67039] transition-colors active:scale-95"
            >
              전체보기
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {LIKED_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.title)}
                className="relative aspect-square rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow active:scale-95"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5">
                  <div className="text-white text-[10px] sm:text-xs font-bold line-clamp-2 mb-1 sm:mb-1.5">
                    {project.title}
                  </div>
                  <div className="text-yellow-300 text-[10px] sm:text-xs font-black">{project.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 최근 펀딩 내역 */}
        <section>
          <h3 className="text-base sm:text-lg font-black text-gray-900 mb-3 sm:mb-4">최근 펀딩 내역</h3>
          <div className="space-y-2 sm:space-y-3">
            {fundedHistory.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[1.2rem] sm:rounded-[1.5rem] p-4 sm:p-5 border border-gray-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="min-w-0 flex-1 pr-3">
                  <div className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-1.5 truncate">{item.projectTitle}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 font-medium">{item.date}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-black text-sm sm:text-base text-[#e98047]">{item.amount.toLocaleString()}원</div>
                  <div
                    className={`text-[10px] sm:text-xs font-bold ${
                      item.status === 'completed' ? 'text-green-600' : 'text-blue-600'
                    }`}
                  >
                    {item.status === 'completed' ? '완료' : '예정'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 설정 */}
        <section>
          <h3 className="text-base sm:text-lg font-black text-gray-900 mb-3 sm:mb-4">설정</h3>
          <div className="space-y-2 sm:space-y-3">
            <MenuItem icon={Settings} label="계정 설정" onClick={() => handleMenuClick('계정 설정')} />
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-between p-4 sm:p-5 bg-white rounded-[1.2rem] sm:rounded-[1.5rem] border border-red-200 hover:bg-red-50 transition-all hover:shadow-md active:scale-95 group"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[0.875rem] sm:rounded-[1rem] bg-red-100 flex items-center justify-center">
                  <LogOut className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                </div>
                <span className="font-bold text-sm sm:text-base text-red-600">로그아웃</span>
              </div>
            </button>
          </div>
        </section>
      </div>

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

export default MyPage;
