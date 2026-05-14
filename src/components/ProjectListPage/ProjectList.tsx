import ProjectCard from './ProjectCard';
import type { Project, ProjectListResponse } from '../../types/projects';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import ENDPOINTS from '../../api/endpoints';

interface ProjectListProps {
  keyword: string;
  location: string;
}

export default function ProjectList({ keyword, location }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        // 기본 목록 조회 (검색 API가 별도로 있다면 해당 엔드포인트 사용 가능)
        const response = await axios.get<ProjectListResponse>(
          ENDPOINTS.PROJECT_LIST,
          {
            params: {
              region: location === '전체' ? undefined : location,
              keyword: keyword || undefined,
            },
          }
        );

        if (response.data.success) {
          setProjects(response.data.data as Project[]);
        }
      } catch (error) {
        console.error('프로젝트 로딩 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [keyword, location]);

  // 클라이언트 측 필터링 (API 필터가 불충분할 경우를 대비한 2중 필터링)
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesKeyword =
        !keyword ||
        project.title.toLowerCase().includes(keyword.toLowerCase()) ||
        project.tags?.some((tag) =>
          tag.toLowerCase().includes(keyword.toLowerCase())
        );

      const matchesLocation =
        location === '전체' || project.region === location;

      return matchesKeyword && matchesLocation;
    });
  }, [projects, keyword, location]);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-20">
        <div className="text-black40 font-boldFont">프로젝트 불러오는 중...</div>
      </div>
    );
  }

  if (filteredProjects.length === 0) {
    return (
      <div className="w-full flex flex-col items-center py-20 gap-4">
        <div className="text-black40 text-lg font-boldFont">
          검색 결과가 없습니다.
        </div>
        <div className="text-black20 text-sm font-mainFont">
          다른 검색어나 필터를 선택해 보세요.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1232px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProjects.map((project: Project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
}
