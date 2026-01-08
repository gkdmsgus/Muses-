import React, { useState } from 'react';
import { X, MapPin, Calendar, Users, Heart, Share2, ChevronRight, Gift, Check } from 'lucide-react';
import Toast from '../common/Toast';

// Mock 리워드 데이터
const REWARDS = [
  {
    id: 1,
    name: 'VIP 스탠딩',
    price: 55000,
    description: '1일 입장 + 사은품패키지 + 포토카드',
    benefits: ['1일 입장', '사은품패키지', '포토카드'],
    remaining: 0,
    total: 100,
    soldOut: true,
  },
  {
    id: 2,
    name: '일반석 (Regular)',
    price: 35000,
    description: '일반 입장 + 스티커팩',
    benefits: ['일반 입장', '스티커팩'],
    remaining: 115,
    total: 200,
    soldOut: false,
  },
  {
    id: 3,
    name: '얼리버드',
    price: 25000,
    description: '일반 입장',
    benefits: ['일반 입장'],
    remaining: 50,
    total: 150,
    soldOut: false,
  },
];

const RewardCard = ({ reward, onSelect }) => {
  const progressPercentage = ((reward.total - reward.remaining) / reward.total) * 100;

  return (
    <div
      className={`border-2 rounded-2xl p-5 transition-all ${
        reward.soldOut
          ? 'border-gray-200 bg-gray-50 opacity-60'
          : 'border-gray-200 hover:border-[#A569BD] hover:shadow-lg cursor-pointer active:scale-95'
      }`}
      onClick={() => !reward.soldOut && onSelect(reward)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900 mb-1">{reward.name}</h4>
          <p className="text-sm text-gray-600 mb-3">{reward.description}</p>

          {/* Benefits */}
          <div className="space-y-1 mb-4">
            {reward.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                <Check className="w-3.5 h-3.5 text-[#A569BD]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${
          reward.soldOut
            ? 'bg-gray-200 text-gray-600'
            : 'bg-gradient-to-r from-purple-500 to-purple-700 text-white'
        }`}>
          {reward.soldOut ? '판매완료' : `${progressPercentage.toFixed(0)}% 달성`}
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="text-2xl font-black text-gray-900">
          {reward.price.toLocaleString()}원
        </div>
        <div className="text-sm text-gray-500">
          {reward.soldOut ? (
            <span className="font-bold text-red-600">품절</span>
          ) : (
            <span>
              <span className="font-bold text-[#A569BD]">{reward.remaining}</span>개 남음
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectDetailModal = ({ project, onClose, onOpenPayment }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('rewards'); // 'rewards' or 'story'
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  if (!project) return null;

  const showToastMessage = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  const handleSelectReward = (reward) => {
    if (onOpenPayment) {
      onOpenPayment(project, reward);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    showToastMessage(
      isLiked ? '관심 프로젝트에서 제거되었습니다' : '관심 프로젝트에 추가되었습니다',
      isLiked ? 'info' : 'success'
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: `${project.title} - ${project.organizer}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      showToastMessage('링크가 복사되었습니다', 'success');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-none sm:rounded-3xl w-full sm:max-w-3xl h-full sm:h-auto sm:max-h-[95vh] overflow-y-auto shadow-2xl animate-slideUp">
        {/* Header Image */}
        <div className="relative h-64 sm:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
          >
            <X className="w-5 h-5 text-gray-700" strokeWidth={2} />
          </button>

          {/* Title & Organizer at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold">
                {project.category}
              </span>
              <span className="text-white/90 text-sm font-medium">{project.organizer}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
              {project.title}
            </h2>

            {/* Progress Bar */}
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-[#e98047] to-[#A569BD] bg-clip-text text-transparent">
                  {project.percentage}%
                </span>
                <span className="text-gray-600 text-sm font-semibold">
                  D-{project.daysLeft}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#e98047] to-[#A569BD]"
                  style={{ width: `${Math.min(project.percentage, 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-600">
                  <span className="font-bold text-gray-900">142</span>명이 함께하고 있습니다
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex">
            <button
              onClick={() => setActiveTab('rewards')}
              className={`flex-1 py-4 font-bold text-sm sm:text-base transition-colors relative ${
                activeTab === 'rewards'
                  ? 'text-[#A569BD]'
                  : 'text-gray-500'
              }`}
            >
              리워드 선택
              {activeTab === 'rewards' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e98047] to-[#A569BD]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('story')}
              className={`flex-1 py-4 font-bold text-sm sm:text-base transition-colors relative ${
                activeTab === 'story'
                  ? 'text-[#A569BD]'
                  : 'text-gray-500'
              }`}
            >
              프로젝트 소개
              {activeTab === 'story' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e98047] to-[#A569BD]" />
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 pb-24 sm:pb-6">
          {activeTab === 'rewards' ? (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-black text-gray-900 mb-2">리워드 선택</h3>
                <p className="text-sm text-gray-600">
                  원하시는 리워드를 선택하고 프로젝트를 후원해주세요
                </p>
              </div>

              <div className="space-y-4">
                {REWARDS.map((reward) => (
                  <RewardCard
                    key={reward.id}
                    reward={reward}
                    onSelect={handleSelectReward}
                  />
                ))}
              </div>

              {/* Creator Info */}
              <div className="mt-8 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">
                    B
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Creator</div>
                    <div className="font-bold text-gray-900">{project.organizer}</div>
                  </div>
                  <button className="ml-auto text-sm font-bold text-[#A569BD] hover:text-purple-700 transition-colors">
                    더보기 →
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-black text-gray-900 mb-4">프로젝트 소개</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.title}은(는) 관객과 아티스트가 함께 만들어가는 특별한 경험입니다.
                  크라우드펀딩을 통해 여러분의 참여로 실현되는 이 프로젝트에 함께하세요.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  이번 공연은 떠오르는 신예 아티스트들의 생생한 무대를 가장 가까이서 경험할 수 있는 특별한 기회입니다.
                  여러분의 후원으로 더욱 풍성한 공연이 만들어집니다.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <MapPin className="w-5 h-5 text-[#e98047] mb-2" strokeWidth={2} />
                  <div className="text-xs text-gray-500 mb-1">장소</div>
                  <div className="font-bold text-gray-900">{project.location}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <Calendar className="w-5 h-5 text-[#e98047] mb-2" strokeWidth={2} />
                  <div className="text-xs text-gray-500 mb-1">일정</div>
                  <div className="font-bold text-gray-900">2024-02-15</div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {project.percentage}%
                    </div>
                    <div className="text-xs text-gray-600 mt-1">달성률</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">142</div>
                    <div className="text-xs text-gray-600 mt-1">참여자</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{project.daysLeft}일</div>
                    <div className="text-xs text-gray-600 mt-1">남음</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Fixed Bottom Actions (mobile only) */}
        {/* <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
          <div className="flex gap-2">
            <button
              onClick={handleLike}
              className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95 flex items-center justify-center transition-all"
            >
              <Heart
                className={`w-5 h-5 transition-all ${isLiked ? 'fill-[#e98047] text-[#e98047]' : 'text-gray-700'}`}
                strokeWidth={2}
              />
            </button>
            <button
              onClick={handleShare}
              className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95 flex items-center justify-center transition-all"
            >
              <Share2 className="w-5 h-5 text-gray-700" strokeWidth={2} />
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className="flex-1 h-12 bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all"
            >
              {activeTab === 'rewards' ? '리워드 선택하기' : '리워드 보기'}
            </button>
          </div>
        </div> */}

        {/* Desktop Bottom Actions */}
        <div className="hidden sm:block sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <div className="flex gap-3">
            <button
              onClick={handleLike}
              className="w-14 h-14 rounded-2xl bg-gray-100 hover:bg-gray-200 active:scale-95 flex items-center justify-center transition-all"
            >
              <Heart
                className={`w-6 h-6 transition-all ${isLiked ? 'fill-[#e98047] text-[#e98047]' : 'text-gray-700'}`}
                strokeWidth={2}
              />
            </button>
            <button
              onClick={handleShare}
              className="w-14 h-14 rounded-2xl bg-gray-100 hover:bg-gray-200 active:scale-95 flex items-center justify-center transition-all"
            >
              <Share2 className="w-6 h-6 text-gray-700" strokeWidth={2} />
            </button>
            <button
              onClick={() => activeTab === 'story' ? setActiveTab('rewards') : null}
              className="flex-1 h-14 bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              {activeTab === 'rewards' ? '리워드 선택하기' : '리워드 보기'}
            </button>
          </div>
        </div>

        {/* Toast */}
        {showToast && (
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDetailModal;
