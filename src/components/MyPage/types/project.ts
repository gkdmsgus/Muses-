export type ProjectStatus = 'FUNDING' | 'SUCCESS' | 'SCHEDULED';

export interface Project {
  projectId: number;
  title: string;
  fundingStatus: ProjectStatus;
  achieveRate: number;
  raisedAmount: number;
  tags: string[];
  dday: number;
}
  