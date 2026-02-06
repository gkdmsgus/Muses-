import InterestProjectCard from './InterestProjectCard';
import type { Project } from '../types/project';

const rawData = [
  {
    id: 1,
    location: '서울',
    status: '진행중',
    tags: ['졸업전시', '미디어아트'],
    title: "A대 시각디자인 졸전 'Trace'",
    progress: 120,
    dday: 'D-5',
  },
];

const normalizeProgress = (value: number) =>
  Math.max(0, Math.min(value, 100));

const interestProjectData: Project[] = rawData.map(item => ({
  ...item,
  progress: normalizeProgress(item.progress),
}));

const InterestProjectList = () => {
  return (
    <div className="inline-flex justify-start items-start gap-6">
      {interestProjectData.map(item => (
        <InterestProjectCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default InterestProjectList;
