export interface Project {
  id: number;
  location: string;
  status: string;
  tags: string[];
  title: string;
  progress: number; // 0 ~ 100 보장
  dday: string;
}
