import axios from 'axios';
import ENDPOINTS from './endpoints';
import type { CreatorApplication, UploadDocResponse } from '../components/MyPage/types/creatorDocumentConfig';

// 1. 신청 생성
export const createCreatorApplication = async (
  creatorType: 'INDIVIDUAL' | 'BUSINESS' | 'CORPORATION'
) => {
  const res = await axios.post<{ success: boolean; data: CreatorApplication }>(
    ENDPOINTS.UPDATE_CREATOR.CREATE_APPLICATION,
    { creatorType }
  );
  return res.data.data;
};

// 2. 서류 업로드
export const uploadCreatorDoc = async (docType: string, file: File) => {
  const formData = new FormData();
  formData.append('docType', docType);
  formData.append('file', file);

  const res = await axios.post<{ success: boolean; data: UploadDocResponse }>(
    ENDPOINTS.UPDATE_CREATOR.MY_DOCS,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return res.data.data;
};

// 3. 신청 제출
export const submitCreatorApplication = async () => {
  const res = await axios.post<{ success: boolean; data: CreatorApplication }>(
    ENDPOINTS.UPDATE_CREATOR.SUBMIT_APPLICATION
  );
  return res.data.data;
};
