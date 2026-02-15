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
    // 소셜로그인 시작 주소 (로그인 버튼 클릭 시 호출)
    KAKAO_LOGIN: `${BASE_URL}/oauth2/authorization/kakao`,
    GOOGLE_LOGIN: `${BASE_URL}/oauth2/authorization/google`,
    // 소셜 로그인 콜백 주소
    KAKAO_OAUTH_CODE: `${BASE_URL}/api/login/oauth2/code/kakao`,
    GOOGLE_OAUTH_CODE: `${BASE_URL}/api/login/oauth2/code/google`,
  },

  //프로젝트
  PROJECT_LIST: `${BASE_URL}/api/projects`,
  PROJECT_DETAIL: `${BASE_URL}/api/projects/{projectId}`,
  

  //주문
  ORDERS_PREPARE: `${BASE_URL}/api/orders/prepare`,

  //결제
  BILLING_ISSUE: `${BASE_URL}/api/billing-auth/issue`,

  //티켓
  TICKET_INFO: `${BASE_URL}/api/users/me/tickets`,
  TICKET_TOKEN: `${BASE_URL}/api/checkin/tickets`,

  //랜딩페이지
  LANDING_TRENDING: `${BASE_URL}/api/landing`,

  //이벤트
  EVENTS: {
    LIST: `${BASE_URL}/api/events`,
  },

  //마이페이지
  MY_INFO: `${BASE_URL}/api/users/me`,
  MY_PROFILE_UPDATE: `${BASE_URL}/api/users/me/profile`,
  MY_ORDER: `${BASE_URL}/api/users/me/orders`,
  MY_DETAIL_ORDER:`${BASE_URL}/api/users/me/orders/detail`,
  MY_LIKES_PROJECTS:`${BASE_URL}/api/users/me/likes/projects`,
  CREATOR_SUMMARY: `${BASE_URL}/api/creators/me/summary`,
  CREATOR_PROJECT_LIST: `${BASE_URL}/api/creators/me/projects`,

  //어드민

  //알람
  ALARM: {
    LIST: `${BASE_URL}/api/alarms`,
    DELETE: (memberAlarm: number) => `${BASE_URL}/api/alarms/${memberAlarm}`,
    COUNT: `${BASE_URL}/api/alarms/count`,
  },
} as const;

export default ENDPOINTS;
