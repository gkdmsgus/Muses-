// 엔드포인트가 추가/변경될 경우 이 파일에서 수정하면 됩니다.

const BASE_URL = 'https://mymuses.site';

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

  EVENTS: {
    LIST: `${BASE_URL}/api/events`,
  },

  //주문
  ORDERS_PREPARE: `${BASE_URL}/orders/prepare`,

  //결제
  BILLING_ISSUE: `${BASE_URL}/billing-auth/issue`,

  //티켓

  //랜딩페이지

  //이벤트

  //마이페이지

  //어드민
} as const;

export default ENDPOINTS;
