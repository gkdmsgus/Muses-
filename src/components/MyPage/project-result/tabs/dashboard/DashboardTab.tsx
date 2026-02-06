import DashboardContainer from "./DashBoardContainer";
import DashboardKpiSection from "./DashboardKpiSection";
import DashboardMainSection from "./DashboardMainSection";

{/*interface TabProps {
  projectId?: string;
}*/}

const DashboardTab = ({/*{ projectId }: TabProps*/}) => {
  return (
    <div className="w-[1425px] min-h-[713px] pb-8  flex flex-col items-center gap-8">
      <DashboardContainer>
        <DashboardKpiSection />
        <DashboardMainSection />
      </DashboardContainer>
    </div>
  );
};

export default DashboardTab;
