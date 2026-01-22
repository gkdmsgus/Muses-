import ProjectCard from './ProjectCard';
import { MOCK_PROJECTS } from '../../types/projects';

export default function ProjectList() {
  return (
    <div className="w-full max-w-[1232px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
        {MOCK_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
