import { MakerAnalyticsCard, RewardStatusCard } from "./DashboardCard";

const DashboardMainSection = () => {
  return (
    <div className="self-stretch inline-flex gap-6">
      <RewardStatusCard />
      <MakerAnalyticsCard />
    </div>
  );
};
export default DashboardMainSection