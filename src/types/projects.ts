export interface Project {
  project_id: number;
  user_id: number;
  status: 'DRAFT' | 'PENDING' | 'REVISION_REQUESTED' | 'APPROVED' | 'REJECTED';
  last_saved_step: number;
  title: string;
  description: string;
  age_limit: 'ALL' | 'ADULT';
  region: string;
  target_amount: number;
  deadline: string;
  opening: string;
  achieve_rate: number;
  supporter_count: number;
  created_at: string;
  updated_at: string;
  funding_status:
    | 'PREPARING' // 준비중
    | 'SCHEDULED' // 오픈예정
    | 'FUNDING' // 진행중
    | 'CLOSING' // 마감임박
    | 'SUCCESS' // 성공
    | 'FAIL'; // 실패
}
