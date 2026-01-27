import ProjectCard from '../ProjectListPage/ProjectCard';
import { MOCK_PROJECTS } from '../../types/projects';

interface TrendingListProps {
  index: number;
}

const STEP = 1243;

export default function TrendingList({ index }: TrendingListProps) {
  return (
    <div className="relative w-[1232px] overflow-hidden">
      <div
        className="flex px-1 transition-transform duration-500 ease-out gap-[30px]"
        style={{
          transform: `translateX(-${index * STEP}px)`,
        }}
      >
        {MOCK_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="w-fit p-5 border border-white80 rounded-[40px] shadow-xs"
          >
            <ProjectCard
              project={project}
              posterClassNameValue="h-[422.5px] w-[338px] rounded-[32px] group-hover:shadow-lg transition-all"
              contentClassNameValue="group-hover:-translate-y-[-8px] transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
