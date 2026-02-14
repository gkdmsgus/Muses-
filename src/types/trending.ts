import type { ApiResponse } from '../api/eventAPI';

export type TrendingItem = {
  projectId: number;
  title: string;
  thumbnailUrl: string;
  achieveRate: number;
  dday: number;
  deadline: string;
  fundingStatus: 'FUNDING' | 'CLOSING' | 'SUCCESS' | 'FAIL';
  region: string;
  tags: string[];
};

export type TrendingListResponse = ApiResponse<TrendingItem[]>;
