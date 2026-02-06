import { useParams } from 'react-router-dom';
import { useState } from 'react';

import ProjectTabs from './components/ProjectTabs';
import DashboardTab from './tabs/dashboard/DashboardTab';
import SettingTab from './tabs/SettingTab';
import MakersTab from './tabs/MakersTab';
import SettlementTab from './tabs/SettlementTab';

type ProjectTab = 'dashboard' | 'setting' | 'makers' | 'settlement';

const ProjectResultPage = () => {
  const { id } = useParams<{ id: string }>();

  const [activeTab, setActiveTab] = useState<ProjectTab>('dashboard');

  const renderTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab  />;
      case 'setting':
        return <SettingTab />;
      case 'makers':
        return <MakersTab />;
      case 'settlement':
        return <SettlementTab />;
      default:
        return null;
    }
  };

  return (
    <div className="w-[1425px]  w-full min-h-screen mt-30 bg-[#F8F9FC] to-color-grey-96">
      {/* 상단 헤더 영역 */}

      <ProjectTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className="flex justify-center pt-10">
        {renderTab()}
      </div>
    </div>
  );
};

export default ProjectResultPage;
