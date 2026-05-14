import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../components/CreateProjectPage/Stepper';
import OverviewStep from '../components/CreateProjectPage/steps/OverviewStep';
import FundingStep from '../components/CreateProjectPage/steps/FundingStep';
import RewardStep from '../components/CreateProjectPage/steps/RewardStep';
import StoryStep from '../components/CreateProjectPage/steps/StoryStep';
import InfoStep from '../components/CreateProjectPage/steps/InfoStep';
import NavigationButtons from '../components/CreateProjectPage/NavigationButtons';
import CreateNavbar from '../components/CreateProjectPage/CreateNavbar';

export interface ProjectData {
  title: string;
  thumbnail: File | null;
  thumbnailUrl?: string; // 로컬 미리보기용
  tags: string[];
  age_limit: 'ALL' | 'ADULT';
  summary: string;
  funding: FundingData;
  rewards: RewardData[];
  story: StoryData;
  info: InfoData;
}

export type FundingData = {
  target_amount: number | '';
  startDate: string;
  deadline: string; // YYYY-MM-DD
  opening: string; // HH:mm
};

export type RewardData = {
  reward_id: number;
  reward_name: string;
  price: number | '';
  description: string;
  type: 'TICKET';
  useQr: boolean;
  total_quantity: number | '';
};

export type StoryData = {
  story_html: string;
  refund_policy: string;
};

export type InfoData = {
  host_name: string;
  host_birth: string;
  host_phone: string;
  host_email: string;
  host_address: string;
  manager_name: string | '';
  manager_phone: string | '';
  manager_email: string | '';
};

export default function CreateProjectPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [projectData, setProjectData] = useState<ProjectData>({
    title: '',
    thumbnail: null,
    tags: [],
    age_limit: 'ALL',
    summary: '',
    funding: {
      target_amount: '',
      startDate: '',
      deadline: '',
      opening: '',
    },
    rewards: [
      {
        reward_id: 1,
        reward_name: '',
        price: '',
        description: '',
        type: 'TICKET',
        useQr: false,
        total_quantity: '',
      },
    ],
    story: {
      story_html: '',
      refund_policy: '',
    },
    info: {
      host_name: '',
      host_birth: '',
      host_phone: '',
      host_email: '',
      host_address: '',
      manager_name: '',
      manager_phone: '',
      manager_email: '',
    },
  });

  const updateProjectData = (key: keyof ProjectData, value: unknown) => {
    // 썸네일 파일이 변경될 경우 로컬 URL 생성
    if (key === 'thumbnail' && value instanceof File) {
      const localUrl = URL.createObjectURL(value);
      setProjectData((prev) => ({
        ...prev,
        thumbnail: value,
        thumbnailUrl: localUrl,
      }));
      return;
    }
    setProjectData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveStep = async () => {
    setIsLoading(true);

    // API 통신 시뮬레이션 (0.8초 지연)
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (step === 5) {
      // 최종 제출 시 localStorage에 저장 (목업 데이터와 통합)
      const existingProjects = JSON.parse(
        localStorage.getItem('my_created_projects') || '[]'
      );

      const newProject = {
        projectId: Date.now(), // 임시 ID
        title: projectData.title,
        thumbnailUrl: projectData.thumbnailUrl || '',
        fundingStatus: 'PENDING',
        dDay: 30, // 임시값
        achieveRate: 0,
        raisedAmount: 0,
        tags: projectData.tags,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem(
        'my_created_projects',
        JSON.stringify([newProject, ...existingProjects])
      );

      setIsLoading(false);
      alert('프로젝트가 성공적으로 생성되었습니다! (로컬 저장됨)');
      navigate('/mypage');
      return;
    }

    setIsLoading(false);
    setStep((s) => Math.min(5, s + 1));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <CreateNavbar step={step} onNext={handleSaveStep} />
      <div className="flex flex-col min-h-screen px-6 pt-28 pb-20 max-w-[768px] mx-auto gap-12">
        <Stepper currentStep={step} />

        {isLoading && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
            <div className="bg-white px-6 py-4 rounded-2xl shadow-xl flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-mainBlack border-t-transparent rounded-full animate-spin"></div>
              <div className="font-boldFont text-sm">정보 저장 중...</div>
            </div>
          </div>
        )}

        {step === 1 && (
          <OverviewStep data={projectData} onChange={updateProjectData} />
        )}
        {step === 2 && (
          <FundingStep data={projectData} onChange={updateProjectData} />
        )}
        {step === 3 && (
          <RewardStep data={projectData} onChange={updateProjectData} />
        )}
        {step === 4 && (
          <StoryStep data={projectData} onChange={updateProjectData} />
        )}
        {step === 5 && (
          <InfoStep data={projectData} onChange={updateProjectData} />
        )}

        <NavigationButtons
          step={step}
          onPrev={() => setStep((s) => Math.max(1, s - 1))}
          onNext={handleSaveStep}
        />
      </div>
    </>
  );
}
