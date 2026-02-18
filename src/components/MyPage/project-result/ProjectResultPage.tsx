import { useParams } from 'react-router-dom';
import { useState } from 'react';

import ProjectTabs from './components/ProjectTabs';
import DashboardTab from './tabs/dashboard/DashboardTab';
import SettingTab from './tabs/SettingTab';
import MakersTab from './tabs/MakersTab';
import SettlementTab from './tabs/SettlementTab';

type ProjectTab = 'dashboard' | 'setting' | 'makers' | 'settlement';

const ProjectResultPage = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState<ProjectTab>('dashboard');

  const numericProjectId = Number(projectId);

  if (!projectId || isNaN(Number(projectId))) {
    return <div>잘못된 접근입니다.</div>;
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'setting':
        return <SettingTab projectId={numericProjectId} />;
      case 'makers':
        return <MakersTab projectId={numericProjectId} />;
      case 'settlement':
        return <SettlementTab projectId={numericProjectId} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1425px] w-full min-h-screen mt-30 bg-[#F8F9FC] to-color-grey-96">
      <ProjectTabs activeTab={activeTab} onChange={setActiveTab} />
      <div className="flex justify-center pt-10">{renderTab()}</div>
    </div>
  );
};

export default ProjectResultPage;
