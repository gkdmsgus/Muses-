// 엔드포인트가 추가/변경될 경우 이 파일에서 수정하면 됩니다.

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
  // 회원
  AUTH: {
    LOGIN: `${BASE_URL}/api/auth/login`,
    LOGOUT: `${BASE_URL}/api/auth/logout`,
    SIGNUP: `${BASE_URL}/api/auth/signup`,
    WITHDRAW: `${BASE_URL}/api/auth/withdraw`,
    CHECK_NICKNAME: `${BASE_URL}/api/auth/profile/check-nickname`,
    CHECK_EMAIL: `${BASE_URL}/api/auth/signup/check-email`,
    CREATE_PROFILE: `${BASE_URL}/api/auth/profile/create`,
  },

  //프로젝트
  PROJECT_LIST: `${BASE_URL}/api/projects`,
  PROJECT_DETAIL: `${BASE_URL}/api/projects/{projectId}`,

  EVENTS: {
    LIST: `${BASE_URL}/api/events`,
  },

  //주문
  ORDERS_PREPARE: `${BASE_URL}/api/orders/prepare`,

  //결제
  BILLING_ISSUE: `${BASE_URL}/api/billing-auth/issue`,

  //티켓

  //랜딩페이지
  LANDING_TRENDING: `${BASE_URL}/api/landing`,
  //이벤트

  //마이페이지

  //어드민
} as const;

export default ENDPOINTS;
