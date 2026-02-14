import axios from 'axios';
import { ENDPOINTS } from './endpoints';
import type { Member } from '../components/MyPage/types/apitypes/members';

export const getMyInfo = async () => {
  const res = await axios.get(ENDPOINTS.MY_INFO, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return res.data.data; // 🔥 이게 핵심
};

export const updateMyProfile = async (payload: {
  nickName: string;
  introduction: string;
  birthday: string;
  gender: number;
}) => {
  const res = await axios.post(
    ENDPOINTS.MY_PROFILE_UPDATE, // "/api/users/me/profile"
    payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );

  return res.data.data as Member;
};
