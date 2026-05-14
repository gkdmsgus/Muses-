import api from './axiosInstance';
import { ENDPOINTS } from './endpoints';
import type { ProjectDashboard } from '../components/MyPage/types/project';

// 프로젝트 생성 관련 타입 정의
export interface ProjectDraftRequest {
  userId: number;
  title: string;
}

export interface ProjectOutlineRequest {
  title: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
  ageLimit: 'ALL' | 'ADULT';
  region: string;
}

export interface ProjectFundingRequest {
  targetAmount: number;
  opening: string; // ISO 8601 형식 추천 (YYYY-MM-DDTHH:mm:ss)
  deadline: string;
}

export interface RewardItem {
  rewardName: string;
  price: number;
  description: string;
  totalQuantity: number;
  type: 'TICKET' | 'NONE';
}

export interface ProjectRewardsRequest {
  rewards: RewardItem[];
}

export interface ProjectStoryRequest {
  storyHtml: string;
  refundPolicy: string;
}

export interface ProjectInfoRequest {
  hostProfileImg?: string;
  hostPhone: string;
  hostBirth: string;
  hostAddress: string;
  hostBio?: string;
  managerName?: string;
  managerPhone?: string;
  managerEmail?: string;
}

// API 함수들
export const projectApi = {
  // 대시보드 조회
  fetchDashboard: async (projectId: string): Promise<ProjectDashboard> => {
    const res = await api.get(`${ENDPOINTS.PROJECT_DASHBOARD}/${projectId}/dashboard`);
    return res.data.data;
  },

  // 0단계: 드래프트 생성
  createDraft: async (data: ProjectDraftRequest) => {
    const res = await api.post(`${ENDPOINTS.PROJECT_LIST}/draft`, data);
    return res.data.data; // { projectId, status, ... }
  },

  // 1단계: 개요 저장
  updateOutline: async (projectId: number, data: ProjectOutlineRequest) => {
    const res = await api.put(`${ENDPOINTS.PROJECT_LIST}/${projectId}/outline`, data);
    return res.data;
  },

  // 2단계: 펀딩 설정 저장
  updateFunding: async (projectId: number, data: ProjectFundingRequest) => {
    const res = await api.put(`${ENDPOINTS.PROJECT_LIST}/${projectId}/funding`, data);
    return res.data;
  },

  // 3단계: 리워드 저장
  updateRewards: async (projectId: number, data: ProjectRewardsRequest) => {
    const res = await api.put(`${ENDPOINTS.PROJECT_LIST}/${projectId}/rewards`, data);
    return res.data;
  },

  // 4단계: 스토리 저장
  updateStory: async (projectId: number, data: ProjectStoryRequest) => {
    const res = await api.put(`${ENDPOINTS.PROJECT_LIST}/${projectId}/story`, data);
    return res.data;
  },

  // 5단계: 정보 저장
  updateInfo: async (projectId: number, data: ProjectInfoRequest) => {
    const res = await api.put(`${ENDPOINTS.PROJECT_LIST}/${projectId}/info`, data);
    return res.data;
  },

  // 최종 제출
  submitProject: async (projectId: number) => {
    const res = await api.post(`${ENDPOINTS.PROJECT_LIST}/${projectId}/submit`);
    return res.data;
  },

  // 이미지 업로드 (썸네일 등)
  uploadImages: async (projectId: number, files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    const res = await api.post(`${ENDPOINTS.PROJECT_LIST}/${projectId}/images`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data.data; // { fileUrls: [...] }
  },
};

// 하위 호환성을 위해 기존 함수 유지
export const fetchProjectDashboard = projectApi.fetchDashboard;
