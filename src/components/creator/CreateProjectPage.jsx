import React, { useState } from 'react';
import { ChevronLeft, Upload, X, Calendar, MapPin, DollarSign, Users } from 'lucide-react';

const CreateProjectPage = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: 기본 정보
    title: '',
    category: '',
    description: '',

    // Step 2: 이미지 및 미디어
    mainImage: null,
    additionalImages: [],

    // Step 3: 펀딩 정보
    goalAmount: '',
    startDate: '',
    endDate: '',
    location: '',

    // Step 4: 리워드 설정
    rewards: [{ name: '', price: '', description: '', quantity: '' }],

    // Step 5: 상세 정보
    detailedDescription: '',
    organizer: '',
  });

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    alert('프로젝트가 생성되었습니다!\n(실제 구현 시 서버로 데이터 전송)');
    onClose();
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addReward = () => {
    setFormData(prev => ({
      ...prev,
      rewards: [...prev.rewards, { name: '', price: '', description: '', quantity: '' }]
    }));
  };

  const removeReward = (index) => {
    setFormData(prev => ({
      ...prev,
      rewards: prev.rewards.filter((_, i) => i !== index)
    }));
  };

  const updateReward = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      rewards: prev.rewards.map((reward, i) =>
        i === index ? { ...reward, [field]: value } : reward
      )
    }));
  };

  return (
    <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={step === 1 ? onClose : handlePrev}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">{step === 1 ? '취소' : '이전'}</span>
            </button>
            <h1 className="text-xl font-black text-gray-900">프로젝트 만들기</h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      index + 1 <= step
                        ? 'bg-gradient-to-r from-purple-500 to-purple-700'
                        : 'bg-gray-200'
                    }`}
                    style={{ width: index + 1 === step ? '100%' : index + 1 < step ? '100%' : '0%' }}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-2 text-center">
            <span className="text-sm font-medium text-gray-600">
              Step {step} / {totalSteps}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Step 1: 기본 정보 */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">기본 정보</h2>
              <p className="text-gray-600">프로젝트의 기본 정보를 입력해주세요</p>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                프로젝트 제목 *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => updateFormData('title', e.target.value)}
                placeholder="예: 2024 Indie Music Festival"
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                카테고리 *
              </label>
              <select
                value={formData.category}
                onChange={(e) => updateFormData('category', e.target.value)}
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">카테고리 선택</option>
                <option value="concert">콘서트</option>
                <option value="festival">페스티벌</option>
                <option value="musical">뮤지컬</option>
                <option value="fanmeeting">팬미팅</option>
                <option value="exhibition">전시회</option>
                <option value="other">기타</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                간단한 소개 *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => updateFormData('description', e.target.value)}
                placeholder="프로젝트를 간단히 소개해주세요 (최대 200자)"
                rows={4}
                maxLength={200}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
              />
              <div className="mt-1 text-right text-xs text-gray-500">
                {formData.description.length} / 200
              </div>
            </div>
          </div>
        )}

        {/* Step 2: 이미지 업로드 */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">이미지 및 미디어</h2>
              <p className="text-gray-600">프로젝트를 대표할 이미지를 업로드해주세요</p>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                메인 이미지 *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 font-medium mb-1">이미지를 업로드하세요</p>
                <p className="text-sm text-gray-500">권장 크기: 1200 x 800px (JPG, PNG)</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                추가 이미지 (최대 5장)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-video border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:border-purple-500 transition-colors cursor-pointer"
                  >
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-xs text-gray-500">이미지 {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: 펀딩 정보 */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">펀딩 정보</h2>
              <p className="text-gray-600">목표 금액과 기간을 설정해주세요</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  목표 금액 *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={formData.goalAmount}
                    onChange={(e) => updateFormData('goalAmount', e.target.value)}
                    placeholder="1000000"
                    className="w-full h-12 pl-10 pr-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  장소 *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    placeholder="서울 강남구"
                    className="w-full h-12 pl-10 pr-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  시작일 *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => updateFormData('startDate', e.target.value)}
                    className="w-full h-12 pl-10 pr-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  종료일 *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => updateFormData('endDate', e.target.value)}
                    className="w-full h-12 pl-10 pr-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: 리워드 설정 */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">리워드 설정</h2>
              <p className="text-gray-600">후원자들에게 제공할 리워드를 설정해주세요</p>
            </div>

            {formData.rewards.map((reward, index) => (
              <div key={index} className="p-6 border-2 border-gray-200 rounded-xl relative">
                {formData.rewards.length > 1 && (
                  <button
                    onClick={() => removeReward(index)}
                    className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                )}

                <h3 className="text-lg font-bold text-gray-900 mb-4">리워드 {index + 1}</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      리워드 이름 *
                    </label>
                    <input
                      type="text"
                      value={reward.name}
                      onChange={(e) => updateReward(index, 'name', e.target.value)}
                      placeholder="예: 얼리버드 티켓"
                      className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        가격 *
                      </label>
                      <input
                        type="number"
                        value={reward.price}
                        onChange={(e) => updateReward(index, 'price', e.target.value)}
                        placeholder="50000"
                        className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        수량 *
                      </label>
                      <input
                        type="number"
                        value={reward.quantity}
                        onChange={(e) => updateReward(index, 'quantity', e.target.value)}
                        placeholder="100"
                        className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      설명
                    </label>
                    <textarea
                      value={reward.description}
                      onChange={(e) => updateReward(index, 'description', e.target.value)}
                      placeholder="리워드에 대한 설명을 입력해주세요"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={addReward}
              className="w-full h-12 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 font-bold hover:border-purple-500 hover:text-purple-500 transition-colors"
            >
              + 리워드 추가
            </button>
          </div>
        )}

        {/* Step 5: 상세 정보 */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">상세 정보</h2>
              <p className="text-gray-600">프로젝트의 상세 내용을 작성해주세요</p>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                주최자 정보 *
              </label>
              <input
                type="text"
                value={formData.organizer}
                onChange={(e) => updateFormData('organizer', e.target.value)}
                placeholder="주최 단체명 또는 이름"
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                상세 설명 *
              </label>
              <textarea
                value={formData.detailedDescription}
                onChange={(e) => updateFormData('detailedDescription', e.target.value)}
                placeholder="프로젝트에 대해 자세히 설명해주세요.
- 프로젝트의 목적과 배경
- 행사 일정 및 프로그램
- 참여 아티스트 정보
- 기대 효과 등"
                rows={12}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-2">📝 검토 전 확인사항</h3>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>모든 필수 항목을 정확히 입력했나요?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>이미지와 설명이 프로젝트를 잘 설명하고 있나요?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>목표 금액과 리워드가 합리적인가요?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>펀딩 기간이 적절하게 설정되었나요?</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex gap-3">
          {step < totalSteps ? (
            <>
              <button
                onClick={handlePrev}
                className="flex-1 h-12 sm:h-14 rounded-xl border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors"
              >
                이전
              </button>
              <button
                onClick={handleNext}
                className="flex-1 h-12 sm:h-14 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold hover:shadow-xl transition-all active:scale-95"
              >
                다음
              </button>
            </>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex-1 h-12 sm:h-14 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold hover:shadow-xl transition-all active:scale-95"
            >
              프로젝트 생성하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
