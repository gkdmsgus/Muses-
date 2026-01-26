export type ProjectStatus = 'ONGOING' | 'DONE' | 'FAILED';

export interface Project {
  id: number;
  status: ProjectStatus;
  title: string;
  progressPercent: number;
  amount: string; // "2,840,000원"
  dday?: string; // "D-3"
}

export interface MyProjectItemProps {
  status: ProjectStatus;
  dday?: string;
  title: string;
  progressPercent: number;
  amount: string;
}
