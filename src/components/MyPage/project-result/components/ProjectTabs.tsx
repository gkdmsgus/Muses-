import { MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export type ProjectTab = 'dashboard' | 'setting' | 'makers' | 'settlement';

const TABS: { key: ProjectTab; label: string }[] = [
  { key: 'dashboard', label: '대시보드' },
  { key: 'setting', label: '프로젝트 설정' },
  { key: 'makers', label: '메이커 명단' },
  { key: 'settlement', label: '정산' },
];

interface ProjectTabsProps {
  activeTab: ProjectTab;
  onChange: (tab: ProjectTab) => void;
}

const ProjectTabs = ({ activeTab, onChange }: ProjectTabsProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full mx-auto px-20 bg-white border-b border-white60">
      <div className="w-full mx-auto px-6 py-4 flex flex-col gap-4">
        {/* 헤더 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => navigate('/mypage?tab=creator')}
              className="p-2 rounded-lg"
              aria-label="마이페이지로 돌아가기"
            >
              <MoveLeft size={20} />
            </button>

            <div className="pl-4 text-mainBlack text-2xl font-boldFont leading-8">
              새벽 2집 앨범 발매 기념 공연
            </div>
          </div>

          <div className="px-2 py-0.5 bg-[#E0E7FF] rounded flex items-center">
            <span className="text-[#4F46E5] text-[10px] font-boldFont leading-4">
              진행중
            </span>
          </div>
        </div>

        {/* 탭 */}
        <div className="flex">
          {TABS.map((tab, index) => {
            const isActive = tab.key === activeTab;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onChange(tab.key)}
                className={`px-1 pb-3 ${
                  index !== 0 ? 'ml-6' : ''
                } border-b-2 transition-colors
                ${
                  isActive
                    ? 'border-[#9333EA] text-[#9333EA] font-semiBoldFont'
                    : 'border-black/0 text-black60 font-mainFont'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
