import { Calendar, ThumbsUp, TrendingUp, Users } from "lucide-react";
import { KpiCard } from "./KpiCard";

const DashboardKpiSection = () => {
  return (
    <div className="flex gap-4">
      <KpiCard
        title="총 모금액"
        value="12.4M"
        subText="+12% vs 지난주"
        subTextColor="text-[#22C55E]"
        icon={<TrendingUp size={20}/>}
      />

      <KpiCard
        title="참여 메이커"
        value="234"
        subText="+8명 오늘"
        subTextColor="text-[#3B82F6]"
        icon={<Users size={20}/>}
      />

      <KpiCard
        title="관심"
        value="567"
        subText="전환율 41%"
        subTextColor="text-[#9333EA]"
        icon={<ThumbsUp size={20}/>}
      />

      <KpiCard
        title="남은 기간"
        value="15일"
        subText="1월 10일 마감"
        subTextColor="text-[#F97316]"
        icon={<Calendar size={20}/>}
      />
    </div>
  );
};
export default DashboardKpiSection