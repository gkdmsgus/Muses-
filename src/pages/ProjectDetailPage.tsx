import { useParams } from 'react-router-dom';
import ProjectMain from '../components/ProjectDetailPage/ProjectMain';
import ProjectInfo from '../components/ProjectDetailPage/ProjectInfo';
import { MOCK_PROJECTS } from '../mocks/project';
import type { Project } from '../types/projects';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const projectId = Number.parseInt(id ?? '', 10);
  const project =
    MOCK_PROJECTS.find((item: Project) => item.project_id === projectId) ??
    MOCK_PROJECTS.find(
      (item: Project) => String(item.project_id) === (id ?? '')
    );
  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-[230px] w-full bg-mainWhite flex flex-col items-center">
        <div className="text-black60 font-mainFont">
          프로젝트를 찾을 수 없어요.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-[230px] w-full bg-mainWhite flex flex-col items-center overflow-x-hidden">
      <ProjectMain project={project} />
      <ProjectInfo projectId={project.project_id} />
    </div>
  );
}
