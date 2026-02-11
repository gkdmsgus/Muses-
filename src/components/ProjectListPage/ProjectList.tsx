import ProjectCard from './ProjectCard';
import { MOCK_PROJECTS } from '../../mocks/project';
import type { Project } from '../../types/projects';

export default function ProjectList() {
  return (
    <div className="w-full max-w-[1232px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
        {MOCK_PROJECTS.map((project: Project) => (
          <ProjectCard key={project.project_id} project={project} />
        ))}
      </div>
    </div>
  );
}
