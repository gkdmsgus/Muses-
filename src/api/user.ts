import { ENDPOINTS } from './endpoints';
import type { Member } from '../components/MyPage/types/apitypes/members';
import api from './axiosInstance';

export const getMyInfo = async () => {
  const res = await api.get(ENDPOINTS.MY_INFO);
  return res.data.data;
};

export const updateMyProfile = async (payload: {
  nickName: string;
  introduction: string;
  birthday: string;
  gender: number;
}) => {
  const res = await api.post(
    ENDPOINTS.MY_PROFILE_UPDATE, // "/api/users/me/profile"
    payload
  );

  return res.data.data as Member;
};
