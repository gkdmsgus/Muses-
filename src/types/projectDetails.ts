export interface ProjectContents {
  project_id: number;
  story_html: string;
  refund_policy: string;
  location_detail: string | null;
}

export interface ProjectManager {
  host_id: number;
  project_id: number;
  host_profile_img: string | null;
  host_phone: string;
  host_birth: string;
  host_address: string;
  host_intro: string | null;
  manager_name: string | null;
  manager_phone: string | null;
  manager_email: string | null;
}

export interface ProjectTag {
  tag_id: number;
  project_id: number;
  tag_name: string;
}

export type RewardType = 'TICKET' | 'NONE';

export interface ProjectReward {
  reward_id: number;
  project_id: number;
  reward_name: string;
  price: number;
  description: string | null;
  total_quantity: number | null;
  sold_quantity: number;
  entry_at: string | null;
  type: RewardType;
}

export interface CreatorStats {
  member_id: number;
  total_funding: number;
  ongoing_project: number;
  total_project: number;
}

export interface ProjectDetailData {
  projectId: number;
  creatorName: string;
  creatorStats?: CreatorStats;
  contents: ProjectContents;
  manager: ProjectManager;
  tags: ProjectTag[];
  posters?: string[];
  rewards: ProjectReward[];
  likes: number;
}
