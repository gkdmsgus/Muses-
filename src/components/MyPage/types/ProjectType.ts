export type ProjectStatus = 'ONGOING' | 'DONE' | 'FAILED';

export interface Project {
  id: number;
  thumbnail: string;
  status: ProjectStatus;
  title: string;
  progressPercent: number;
  amount: string;
  dday?: string;
}
