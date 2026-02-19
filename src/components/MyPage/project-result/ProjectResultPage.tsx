import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProjectTabs from './components/ProjectTabs';
import DashboardTab from './tabs/dashboard/DashboardTab';
import SettingTab from './tabs/SettingTab';
import MakersTab from './tabs/MakersTab';
import SettlementTab from './tabs/SettlementTab';

import type { Project } from '../types/project';
import { fetchMyCreatorProjects } from '../../../api/user';

type ProjectTab = 'dashboard' | 'setting' | 'makers' | 'settlement';

const ProjectResultPage = () => {
  const { id } = useParams<{ id: string }>();

  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<ProjectTab>('dashboard');

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      const list = await fetchMyCreatorProjects();
      const found = list.find((p: Project) => String(p.projectId) === id);
      setProject(found ?? null);
    };

    load();
  }, [id]);

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
    <div className="w-[1425px] w-full min-h-screen mt-30 bg-[#F8F9FC] to-color-grey-96">
      <ProjectTabs
        activeTab={activeTab}
        onChange={setActiveTab}
        projectTitle={project?.title ?? ''}
        projectStatus={project?.fundingStatus}
      />

      <div className="flex justify-center pt-10">{renderTab()}</div>
    </div>
  );
};

export default ProjectResultPage;
