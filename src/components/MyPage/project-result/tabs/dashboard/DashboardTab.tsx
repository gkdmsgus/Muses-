import { useEffect, useState } from 'react';
import DashboardContainer from './DashBoardContainer';
import DashboardKpiSection from './DashboardKpiSection';
import DashboardMainSection from './DashboardMainSection';
import { useParams } from 'react-router-dom';
import type { ProjectDashboard } from '../../../types/project';
import { fetchProjectDashboard } from '../../../../../api/project';

const DashboardTab = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [dashboard, setDashboard] = useState<ProjectDashboard | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;

    const load = async () => {
      try {
        const data = await fetchProjectDashboard(id);
        if (!cancelled) setDashboard(data);
      } catch (err) {
        if (!cancelled) setError('대시보드 데이터를 불러오지 못했습니다.');
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div className="w-[1425px] min-h-[713px] pb-8 flex flex-col items-center gap-8">
      <DashboardContainer>
        <DashboardKpiSection
          totalFunding={dashboard?.totalFunding ?? 0}
          participantCount={dashboard?.participantCount ?? 0}
          likeCount={dashboard?.likeCount ?? 0}
          dday={dashboard?.dday ?? 0}
        />
        <DashboardMainSection
          rewardSales={dashboard?.rewardSales ?? []}
          genderRatio={dashboard?.genderRatio ?? { male: 0, female: 0 }}
          ageRatio={
            dashboard?.ageRatio ?? { '20s': 0, '30s': 0, '40s': 0, '50s+': 0 }
          }
        />
      </DashboardContainer>
    </div>
  );
};

export default DashboardTab;
