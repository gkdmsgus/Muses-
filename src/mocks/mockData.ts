// ============================================================
// Muses Backend Mock Data
// 출처: umcMuses/Backend 레포 분석 기반
// ============================================================

// ===========================
// Enum Types
// ===========================

export type Role = 'GUEST' | 'MAKER' | 'CREATOR' | 'ADMIN';
export type Provider = 'LOCAL' | 'KAKAO' | 'GOOGLE';

export type FundingStatus =
  | 'PREPARING'
  | 'SCHEDULED'
  | 'FUNDING'
  | 'CLOSING'
  | 'SUCCESS'
  | 'FAIL';

export type Region =
  | 'SEOUL'
  | 'GYEONGGI'
  | 'INCHEON'
  | 'BUSAN'
  | 'DAEGU'
  | 'DAEJEON'
  | 'GWANGJU'
  | 'ULSAN'
  | 'SEJONG'
  | 'GANGWON'
  | 'CHUNGBUK'
  | 'CHUNGNAM'
  | 'JEONBUK'
  | 'JEONNAM'
  | 'GYEONGBUK'
  | 'GYEONGNAM'
  | 'JEJU';

export type AgeLimit = 'ALL' | 'ADULT';
export type RewardType = 'TICKET' | 'NONE';

export type OrderStatus =
  | 'RESERVED'
  | 'CANCELED'
  | 'PAYING'
  | 'PAID'
  | 'PAY_FAILED'
  | 'VOID';

export type PaymentStatus = 'READY' | 'SUCCESS' | 'CANCEL' | 'FAIL';
export type TicketStatus = 'UNUSED' | 'USED' | 'CANCELED';
export type SettlementStatus = 'WAITING' | 'IN_PROGRESS' | 'COMPLETED';

export type ApplicationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export type CreatorType = 'INDIVIDUAL' | 'SOLE_BIZ' | 'CORP_BIZ';
export type DocType = 'ID_CARD' | 'BANKBOOK' | 'BRC' | 'COMP_SEAL' | 'COMP_REGISTRY';
export type QrStatus = 'NONE' | 'ACTIVE' | 'INACTIVE';
export type EventCategory = 'NOTICE' | 'COLLABORATIVE';
export type BillingAuthStatus = 'ACTIVE' | 'REVOKED';
export type ProjectAuditStatus = 'DRAFT' | 'PENDING' | 'APPROVED' | 'REJECTED';

// ===========================
// Base Response Types
// ===========================

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  pageInfo?: PageInfo;
}

export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
}

// ===========================
// Auth (인증)
// ===========================

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  role: Role;
  name: string;
}

export interface LocalSignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface LocalLoginRequest {
  email: string;
  password: string;
}

// ===========================
// Landing (랜딩)
// ===========================

export interface LandingResDTO {
  projectId: number;
  thumbnailUrl: string;
  title: string;
  achieveRate: number;
  deadline: string;
  dDay: number;
  fundingStatus: FundingStatus;
  region: Region;
  tags: string[];
}

// ===========================
// Project (프로젝트)
// ===========================

export interface AttachmentResponseDT {
  id: number;
  fileUrl: string;
  originalFilename: string;
  extension: string;
}

export interface RewardResponseDT {
  rewardId: number;
  rewardName: string;
  price: number;
  description: string;
  totalQuantity: number | null;
  soldQuantity: number;
  remainingQuantity: number | null;
  type: RewardType;
}

export interface ProjectDetailResponseDT {
  projectId: number;
  status: string;
  lastSavedStep: number;
  // 1단계: 개요
  title: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
  ageLimit: AgeLimit;
  region: Region;
  // 2단계: 펀딩
  targetAmount: number;
  opening: string;
  deadline: string;
  fundingStatus: FundingStatus;
  // 3단계: 리워드
  rewards: RewardResponseDT[];
  // 4단계: 스토리
  storyHtml: string;
  refundPolicy: string;
  attachments: AttachmentResponseDT[];
  // 5단계: 정보
  creatorName: string;
  creatorNickName: string;
  hostProfileImg: string;
  hostPhone: string;
  hostBio: string;
  managerName: string;
  managerPhone: string;
  documents: AttachmentResponseDT[];
  makerDocuments: AttachmentResponseDT[];
  // 통계
  achieveRate: number;
  supporterCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectCardResponseDT {
  projectId: number;
  thumbnailUrl: string;
  title: string;
  achieveRate: number;
  deadline: string;
  dDay: number;
  fundingStatus: FundingStatus;
  isScheduled: boolean;
  opening: string;
  attachmentImageUrl: string | null;
  region: string;
  tags: string[];
}

export interface ProjectListResponseDT {
  projects: ProjectCardResponseDT[];
  totalCount: number;
  page: number;
  size: number;
  totalPages: number;
  hasNext: boolean;
}

export interface ProjectLikeResponseDT {
  projectId: number;
  liked: boolean;
  likeCount: number;
}

// ===========================
// Order (주문)
// ===========================

export interface OrderItemReqDT {
  rewardId: number;
  quantity: number;
  unitPrice: number;
}

export interface OrderCreateReqDT {
  projectId: number;
  items: OrderItemReqDT[];
}

export interface OrderCreateResDT {
  orderId: number;
  customerKey: string;
  successUrl: string;
  failUrl: string;
}

// ===========================
// BillingAuth (빌링키)
// ===========================

export interface BillingAuthIssueReqDTO {
  authKey: string;
  customerKey: string;
}

// ===========================
// Checkin (체크인)
// ===========================

export interface CheckinConfirmResDTO {
  result: 'USED_NOW' | 'ALREADY_USED';
  buyerName: string | null;
  buyerNickname: string | null;
  rewardTitle: string | null;
  quantity: number | null;
  usedAt: string;
}

export interface CheckinViewDTO {
  projectId: number;
  buyerName: string;
  buyerNickname: string;
  rewardTitle: string;
  quantity: number;
}

// ===========================
// Event (이벤트/공지)
// ===========================

export interface EventResDTO {
  eventId: number;
  title: string;
  description: string;
  content: string;
  category: EventCategory;
  date: string;
}

export interface EventDetailResDTO {
  event: EventResDTO;
  prevId: number | null;
  nextId: number | null;
}

export interface EventListItem {
  eventId: number;
  category: EventCategory;
  title: string;
  uploadDateTime: string;
  createdAt: string;
  updatedAt: string;
  status: string;
}

// ===========================
// Alarm (알람)
// ===========================

export interface AlarmResDT {
  memberAlarmId: number;
  content: string;
  alarmTime: string;
}

// ===========================
// MyPage - 프로필
// ===========================

export interface MyProfileResDT {
  memberId: number;
  name: string;
  email: string;
  nickName: string;
  introduction: string;
  birthday: string;
  gender: 0 | 1;
  profileImgUrl: string;
  ticketCount: number;
  supportCount: number;
  supportLevel: number;
}

export interface UpdateProfileImageResDT {
  profileImgUrl: string;
}

// ===========================
// MyPage - 주문 내역
// ===========================

export interface OrderHistoryItem {
  orderId: number;
  projectTitle: string;
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
  amount: number;
  displayDate: string;
}

export interface OrderHistoryListResponse {
  items: OrderHistoryItem[];
}

export interface OrderHistoryDetailResponse {
  orderId: number;
  projectTitle: string;
  opening: string;
  locationDetail: string;
  optionTitle: string;
  optionDescription: string;
  quantity: number;
  paidAt: string;
  paymentProvider: string;
  amount: number;
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
}

// ===========================
// MyPage - 티켓
// ===========================

export interface MyTicketResDT {
  ticketId: number;
  projectTitle: string;
  opening: string;
  optionLabel: string;
  ticketToken: string;
  status: TicketStatus;
}

// ===========================
// MyPage - 크리에이터 전환 신청
// ===========================

export interface CreatorApplyReqDT {
  creatorType: CreatorType;
}

export interface CreatorApplyResDT {
  applicationId: number;
  creatorType: string;
  status: ApplicationStatus;
}

export interface CreatorApplicationDocResDT {
  docId: number;
  docType: DocType;
  attachmentId: number;
  fileUrl: string;
  originalFilename: string;
  extension: string;
}

export interface CreatorApplicationSubmitResDT {
  applicationId: number;
  status: ApplicationStatus;
  submitted: boolean;
  required: DocType[];
  uploaded: DocType[];
  missing: DocType[];
}

// ===========================
// Creator Center - 프로젝트
// ===========================

export interface MyProjectItem {
  projectId: number;
  title: string;
  fundingStatus: FundingStatus;
  dDay: number;
  achieveRate: number;
  raisedAmount: number;
  tags: string[];
}

export interface MyProjectListResponse {
  items: MyProjectItem[];
}

export interface ProjectSettingsResponse {
  projectId: number;
  description: string;
  tags: string[];
  targetAmount: number;
  deadline: string;
}

export interface MakerRow {
  memberId: number;
  nickname: string;
  name: string;
  phone: string;
  email: string;
  quantity: number;
  rewardName: string;
  qrStatus: QrStatus;
  orderId: number;
}

export interface MakerListResponse {
  projectId: number;
  items: MakerRow[];
}

export interface CreatorSummaryResDT {
  totalFunding: number;
  ongoingProjectCount: number;
}

export interface RewardSales {
  rewardId: number;
  rewardName: string;
  soldQuantity: number;
  revenue: number;
}

export interface CreatorDashboardResDT {
  totalFunding: number;
  participantCount: number;
  likeCount: number;
  dDay: number | null;
  rewardSales: RewardSales[];
  genderRatio: Record<string, number>;
  ageRatio: Record<string, number>;
}

export interface CreatorSettlementResDT {
  totalAmount: number;
  feeAmount: number;
  payoutAmount: number;
}

// ===========================
// Settlement - 관리자 정산
// ===========================

export interface SettlementListResDTO {
  id: number;
  totalAmount: number;
  feeAmount: number;
  payoutAmount: number;
  settlementStatus: SettlementStatus;
  title: string;
  documents: AttachmentResponseDT[];
}

// ===========================
// Admin - 크리에이터 심사
// ===========================

export interface ApplicationListItem {
  applicationId: number;
  memberId: number;
  name: string;
  creatorType: string;
  creatorTypeDescription: string;
  status: ApplicationStatus;
  statusDescription: string;
  createdAt: string;
}

export interface ApplicationListResponse {
  items: ApplicationListItem[];
  totalCount: number;
  page: number;
  size: number;
}

export interface DocumentItem {
  docId: number;
  docTypeDescription: string;
  attachmentId: number;
  fileUrl: string;
  originalFilename: string;
  extension: string;
}

export interface DocumentListResponse {
  applicationId: number;
  memberName: string;
  creatorType: string;
  documents: DocumentItem[];
  requiredDocs: string[];
}

export interface SingleDocumentResponse {
  applicationId: number;
  docType: string;
  docTypeDescription: string;
  fileUrl: string;
  originalFilename: string;
  extension: string;
}

export interface ReviewResponse {
  applicationId: number;
  memberId: number;
  status: ApplicationStatus;
  statusDescription: string;
  processedAt: string;
  adminId: number;
}

// ===========================
// Admin - 프로젝트 심사
// ===========================

export interface ProjectAuditListResponse {
  projectId: number;
  title: string;
  creatorName: string;
  targetAmount: number;
  status: string;
  createdAt: string;
}

// ===========================
// Admin - 이벤트 관리
// ===========================

export interface EventRequest {
  category: EventCategory;
  title: string;
  description: string;
  content: string;
  uploadDateTime?: string;
}

export interface EventDetailResponse {
  eventId: number;
  category: EventCategory;
  title: string;
  description: string;
  content: string;
  uploadDateTime: string | null;
  createdAt: string;
  updatedAt: string;
  status: string;
}

// ===================================================================
// ===========================
// MOCK DATA
// ===========================
// ===================================================================

// ===========================
// Mock: Members (data.sql 기반)
// ===========================
export const mockMembers = [
  {
    memberId: 1,
    email: 'admin@muses.com',
    name: '뮤즈관리자',
    nickName: 'AdminMuse',
    role: 'ADMIN' as Role,
    provider: 'LOCAL' as Provider,
    introduction: '안녕하세요.',
    birthday: '2003-08-13',
    gender: 0,
    profileImgUrl: 'https://via.placeholder.com/100',
    ticketCount: 0,
    supportCount: 0,
    supportLevel: 0,
  },
  {
    memberId: 2,
    email: 'maker@muses.com',
    name: '김철수',
    nickName: 'RapperLee',
    role: 'MAKER' as Role,
    provider: 'LOCAL' as Provider,
    introduction: '반가워요 메이커입니다.',
    birthday: '2000-12-23',
    gender: 0,
    profileImgUrl: 'https://via.placeholder.com/100',
    ticketCount: 3,
    supportCount: 5,
    supportLevel: 2,
  },
  {
    memberId: 3,
    email: 'creator@muses.com',
    name: '이유리',
    nickName: 'MusicLover',
    role: 'CREATOR' as Role,
    provider: 'LOCAL' as Provider,
    introduction: '저는 뮤지션이에요',
    birthday: '1997-02-01',
    gender: 1,
    profileImgUrl: 'https://via.placeholder.com/100',
    ticketCount: 1,
    supportCount: 2,
    supportLevel: 1,
  },
];

export const mockMyProfile: MyProfileResDT = {
  memberId: 2,
  name: '김철수',
  email: 'maker@muses.com',
  nickName: 'RapperLee',
  introduction: '반가워요 메이커입니다.',
  birthday: '2000-12-23',
  gender: 0,
  profileImgUrl: 'https://via.placeholder.com/100',
  ticketCount: 3,
  supportCount: 5,
  supportLevel: 2,
};

// ===========================
// Mock: Projects (프로젝트)
// ===========================

export const mockRewards: RewardResponseDT[] = [
  {
    rewardId: 1,
    rewardName: 'VIP 티켓',
    price: 80000,
    description: '앞좌석 VIP 구역 + 포토카드 + 굿즈 파우치 제공',
    totalQuantity: 50,
    soldQuantity: 30,
    remainingQuantity: 20,
    type: 'TICKET',
  },
  {
    rewardId: 2,
    rewardName: '일반 티켓',
    price: 35000,
    description: '공연 일반 좌석 입장권',
    totalQuantity: 200,
    soldQuantity: 120,
    remainingQuantity: 80,
    type: 'TICKET',
  },
  {
    rewardId: 3,
    rewardName: '굿즈 패키지',
    price: 25000,
    description: '포토카드 5종 + 스티커 세트 + 아크릴 키링',
    totalQuantity: null,
    soldQuantity: 45,
    remainingQuantity: null,
    type: 'NONE',
  },
];

export const mockProjectDetail: ProjectDetailResponseDT = {
  projectId: 1,
  status: 'FUNDING',
  lastSavedStep: 5,
  title: '인디밴드 별빛 단독 콘서트',
  description: '인디밴드 별빛의 첫 번째 단독 콘서트를 함께해 주세요!',
  thumbnailUrl: 'https://via.placeholder.com/800x450',
  tags: ['인디', '콘서트', '라이브', '홍대'],
  ageLimit: 'ALL',
  region: 'SEOUL',
  targetAmount: 5000000,
  opening: '2026-02-01T18:00:00',
  deadline: '2026-03-01T23:59:59',
  fundingStatus: 'FUNDING',
  rewards: mockRewards,
  storyHtml:
    '<h1>프로젝트 소개</h1><p>2026년 2월, 인디밴드 별빛의 첫 번째 단독 콘서트를 개최합니다.</p><h2>공연 정보</h2><ul><li>일시: 2026년 2월 28일 오후 6시</li><li>장소: 홍대 클럽 V-Hall</li></ul>',
  refundPolicy: '공연 7일 전까지 전액 환불 가능, 이후 환불 불가합니다.',
  attachments: [
    {
      id: 1,
      fileUrl: 'https://via.placeholder.com/800x450',
      originalFilename: 'concert_poster.jpg',
      extension: 'jpg',
    },
  ],
  creatorName: '이유리',
  creatorNickName: 'MusicLover',
  hostProfileImg: 'https://via.placeholder.com/100',
  hostPhone: '010-1234-5678',
  hostBio: '인디밴드 별빛의 리더이자 보컬을 맡고 있습니다. 음악으로 여러분과 소통하고 싶습니다.',
  managerName: '김매니저',
  managerPhone: '010-9876-5432',
  documents: [],
  makerDocuments: [],
  achieveRate: 127,
  supporterCount: 89,
  createdAt: '2026-01-15T10:30:00',
  updatedAt: '2026-01-20T14:20:00',
};

export const mockProjectCards: ProjectCardResponseDT[] = [
  {
    projectId: 1,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: '인디밴드 별빛 단독 콘서트',
    achieveRate: 127,
    deadline: '2026-03-01T23:59:59',
    dDay: 16,
    fundingStatus: 'FUNDING',
    isScheduled: false,
    opening: '2026-02-01T18:00:00',
    attachmentImageUrl: 'https://via.placeholder.com/400x225',
    region: 'SEOUL',
    tags: ['인디', '콘서트', '라이브'],
  },
  {
    projectId: 2,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: '푸른 오렌지 재즈 콘서트',
    achieveRate: 83,
    deadline: '2026-03-15T23:59:59',
    dDay: 30,
    fundingStatus: 'FUNDING',
    isScheduled: false,
    opening: '2026-02-10T18:00:00',
    attachmentImageUrl: null,
    region: 'BUSAN',
    tags: ['재즈', '공연', '부산'],
  },
  {
    projectId: 3,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: '클래식 피아노 독주회 - 쇼팽 야상곡',
    achieveRate: 45,
    deadline: '2026-04-01T23:59:59',
    dDay: 47,
    fundingStatus: 'SCHEDULED',
    isScheduled: true,
    opening: '2026-03-01T00:00:00',
    attachmentImageUrl: null,
    region: 'DAEGU',
    tags: ['클래식', '피아노', '독주회'],
  },
  {
    projectId: 4,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: 'K-POP 커버댄스 페스티벌',
    achieveRate: 200,
    deadline: '2026-01-15T23:59:59',
    dDay: -15,
    fundingStatus: 'SUCCESS',
    isScheduled: false,
    opening: '2025-12-01T00:00:00',
    attachmentImageUrl: null,
    region: 'SEOUL',
    tags: ['K-POP', '댄스', '페스티벌'],
  },
  {
    projectId: 5,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: '어쿠스틱 포크 콘서트 in 제주',
    achieveRate: 60,
    deadline: '2026-05-01T23:59:59',
    dDay: 77,
    fundingStatus: 'FUNDING',
    isScheduled: false,
    opening: '2026-03-15T00:00:00',
    attachmentImageUrl: null,
    region: 'JEJU',
    tags: ['어쿠스틱', '포크', '제주'],
  },
  {
    projectId: 6,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: '힙합 & R&B 쇼케이스',
    achieveRate: 156,
    deadline: '2026-02-20T23:59:59',
    dDay: 7,
    fundingStatus: 'CLOSING',
    isScheduled: false,
    opening: '2026-01-20T00:00:00',
    attachmentImageUrl: null,
    region: 'INCHEON',
    tags: ['힙합', 'R&B', '쇼케이스'],
  },
];

export const mockProjectList: ProjectListResponseDT = {
  projects: mockProjectCards,
  totalCount: 6,
  page: 0,
  size: 10,
  totalPages: 1,
  hasNext: false,
};

export const mockLandingProjects: LandingResDTO[] = [
  {
    projectId: 1,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: '인디밴드 별빛 단독 콘서트',
    achieveRate: 127,
    deadline: '2026-03-01T23:59:59',
    dDay: 16,
    fundingStatus: 'FUNDING',
    region: 'SEOUL',
    tags: ['인디', '콘서트', '라이브'],
  },
  {
    projectId: 2,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: '푸른 오렌지 재즈 콘서트',
    achieveRate: 83,
    deadline: '2026-03-15T23:59:59',
    dDay: 30,
    fundingStatus: 'FUNDING',
    region: 'BUSAN',
    tags: ['재즈', '공연', '부산'],
  },
  {
    projectId: 5,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: '어쿠스틱 포크 콘서트 in 제주',
    achieveRate: 60,
    deadline: '2026-05-01T23:59:59',
    dDay: 77,
    fundingStatus: 'FUNDING',
    region: 'JEJU',
    tags: ['어쿠스틱', '포크', '제주'],
  },
  {
    projectId: 6,
    thumbnailUrl: 'https://via.placeholder.com/400x225',
    title: '힙합 & R&B 쇼케이스',
    achieveRate: 156,
    deadline: '2026-02-20T23:59:59',
    dDay: 7,
    fundingStatus: 'FUNDING',
    region: 'INCHEON',
    tags: ['힙합', 'R&B', '쇼케이스'],
  },
];

export const mockProjectLike: ProjectLikeResponseDT = {
  projectId: 1,
  liked: false,
  likeCount: 42,
};

// ===========================
// Mock: Events (이벤트/공지)
// ===========================

export const mockEvents: EventResDTO[] = [
  {
    eventId: 1,
    title: 'Muses 서비스 오픈 안내',
    description: 'Muses 공연 펀딩 플랫폼이 정식 오픈하였습니다.',
    content:
      '<h2>Muses 오픈을 환영합니다!</h2><p>공연 펀딩 플랫폼 Muses가 2026년 1월에 정식 오픈했습니다. 다양한 공연 프로젝트에 참여해 보세요.</p>',
    category: 'NOTICE',
    date: '2026-01-10T10:00:00',
  },
  {
    eventId: 2,
    title: '크리에이터 모집 공지',
    description: '공연을 기획 중인 아티스트를 모집합니다.',
    content:
      '<h2>크리에이터 모집</h2><p>Muses에서 공연을 진행하고 싶은 아티스트라면 누구나 신청 가능합니다. 크리에이터 전환 신청을 통해 프로젝트를 등록해 보세요.</p>',
    category: 'COLLABORATIVE',
    date: '2026-01-15T10:00:00',
  },
  {
    eventId: 3,
    title: '1월 결제 점검 안내',
    description: '1월 28일 오전 2시~4시 결제 시스템 점검이 진행됩니다.',
    content:
      '<h2>결제 시스템 점검 안내</h2><p>일시: 2026년 1월 28일 02:00 ~ 04:00</p><p>점검 시간 동안 결제가 불가합니다. 미리 양해 부탁드립니다.</p>',
    category: 'NOTICE',
    date: '2026-01-20T10:00:00',
  },
];

export const mockEventDetail: EventDetailResDTO = {
  event: mockEvents[0],
  prevId: null,
  nextId: 2,
};

// ===========================
// Mock: Alarms (알람)
// ===========================

export const mockAlarms: AlarmResDT[] = [
  {
    memberAlarmId: 1,
    content: '인디밴드 별빛 단독 콘서트 프로젝트 펀딩이 시작되었습니다.',
    alarmTime: '2026-02-01T09:00:00',
  },
  {
    memberAlarmId: 2,
    content: '인디밴드 별빛 단독 콘서트 프로젝트에 RapperLee님이 후원하셨습니다.',
    alarmTime: '2026-02-02T14:30:00',
  },
  {
    memberAlarmId: 3,
    content: '푸른 오렌지 재즈 콘서트 프로젝트의 VIP 티켓 리워드를 후원하셨습니다.',
    alarmTime: '2026-02-05T18:00:00',
  },
];

// ===========================
// Mock: Orders & Payments (주문/결제)
// ===========================

export const mockOrderCreateRes: OrderCreateResDT = {
  orderId: 1001,
  customerKey: 'muses_550e8400-e29b-41d4-a716-446655440000',
  successUrl: 'https://muses.com/billing/success',
  failUrl: 'https://muses.com/billing/fail',
};

export const mockOrderHistoryItems: OrderHistoryItem[] = [
  {
    orderId: 101,
    projectTitle: '푸른 오렌지 재즈 콘서트',
    orderStatus: 'PAID',
    paymentStatus: 'SUCCESS',
    amount: 80000,
    displayDate: '2026-02-05T15:00:00',
  },
  {
    orderId: 102,
    projectTitle: 'K-POP 커버댄스 페스티벌',
    orderStatus: 'PAID',
    paymentStatus: 'SUCCESS',
    amount: 35000,
    displayDate: '2026-01-10T11:00:00',
  },
  {
    orderId: 103,
    projectTitle: '인디밴드 별빛 단독 콘서트',
    orderStatus: 'CANCELED',
    paymentStatus: 'CANCEL',
    amount: 80000,
    displayDate: '2026-01-20T09:00:00',
  },
];

export const mockOrderHistoryList: OrderHistoryListResponse = {
  items: mockOrderHistoryItems,
};

export const mockOrderHistoryDetail: OrderHistoryDetailResponse = {
  orderId: 101,
  projectTitle: '푸른 오렌지 재즈 콘서트',
  opening: '2026-02-28T18:00:00',
  locationDetail: '부산 해운대 복합문화공간 B-Stage',
  optionTitle: 'VIP 티켓',
  optionDescription: '앞좌석 VIP 구역 + 포토카드 포함',
  quantity: 1,
  paidAt: '2026-02-05T15:00:00',
  paymentProvider: 'TOSS_PAYMENTS',
  amount: 80000,
  orderStatus: 'PAID',
  paymentStatus: 'SUCCESS',
};

// ===========================
// Mock: Tickets (티켓)
// ===========================

export const mockTickets: MyTicketResDT[] = [
  {
    ticketId: 15,
    projectTitle: '푸른 오렌지 재즈 콘서트',
    opening: '2026-02-28T18:00:00',
    optionLabel: 'VIP 티켓',
    ticketToken: 'TICKET-8f3a2c9b-001',
    status: 'UNUSED',
  },
  {
    ticketId: 16,
    projectTitle: 'K-POP 커버댄스 페스티벌',
    opening: '2026-01-15T15:00:00',
    optionLabel: '일반 티켓',
    ticketToken: 'TICKET-7e2b1d8a-002',
    status: 'USED',
  },
  {
    ticketId: 17,
    projectTitle: '힙합 & R&B 쇼케이스',
    opening: '2026-02-20T19:00:00',
    optionLabel: 'VIP 티켓',
    ticketToken: 'TICKET-4c5f9e3b-003',
    status: 'UNUSED',
  },
];

// ===========================
// Mock: Checkin (체크인)
// ===========================

export const mockCheckinResult: CheckinConfirmResDTO = {
  result: 'USED_NOW',
  buyerName: '홍길동',
  buyerNickname: '길동이',
  rewardTitle: 'VIP 티켓',
  quantity: 1,
  usedAt: '2026-02-28T18:05:00',
};

// ===========================
// Mock: Creator Application (크리에이터 전환 신청)
// ===========================

export const mockCreatorApplication: CreatorApplyResDT = {
  applicationId: 12,
  creatorType: 'INDIVIDUAL',
  status: 'PENDING',
};

export const mockCreatorDocs: CreatorApplicationDocResDT[] = [
  {
    docId: 1,
    docType: 'ID_CARD',
    attachmentId: 18,
    fileUrl: 'https://via.placeholder.com/400x300',
    originalFilename: 'id_card.jpg',
    extension: 'jpg',
  },
];

export const mockSubmitResult: CreatorApplicationSubmitResDT = {
  applicationId: 12,
  status: 'PENDING',
  submitted: false,
  required: ['ID_CARD', 'BANKBOOK'],
  uploaded: ['ID_CARD'],
  missing: ['BANKBOOK'],
};

// ===========================
// Mock: Creator Center (크리에이터 센터)
// ===========================

export const mockMyProjects: MyProjectListResponse = {
  items: [
    {
      projectId: 1,
      title: '인디밴드 별빛 단독 콘서트',
      fundingStatus: 'FUNDING',
      dDay: 16,
      achieveRate: 127,
      raisedAmount: 6350000,
      tags: ['인디', '콘서트', '라이브'],
    },
    {
      projectId: 7,
      title: '별빛 미니 앨범 발매 기념 팬 미팅',
      fundingStatus: 'PREPARING',
      dDay: 90,
      achieveRate: 0,
      raisedAmount: 0,
      tags: ['팬미팅', '앨범', '인디'],
    },
  ],
};

export const mockCreatorSummary: CreatorSummaryResDT = {
  totalFunding: 6350000,
  ongoingProjectCount: 1,
};

export const mockProjectSettings: ProjectSettingsResponse = {
  projectId: 1,
  description: '인디밴드 별빛의 첫 번째 단독 콘서트를 함께해 주세요!',
  tags: ['인디', '콘서트', '라이브', '홍대'],
  targetAmount: 5000000,
  deadline: '2026-03-01T23:59:59',
};

export const mockMakerList: MakerListResponse = {
  projectId: 1,
  items: [
    {
      memberId: 2,
      nickname: 'RapperLee',
      name: '김철수',
      phone: '010-1111-2222',
      email: 'maker@muses.com',
      quantity: 2,
      rewardName: 'VIP 티켓',
      qrStatus: 'ACTIVE',
      orderId: 101,
    },
    {
      memberId: 5,
      nickname: '재즈좋아',
      name: '이지원',
      phone: '010-3333-4444',
      email: 'jazz@example.com',
      quantity: 1,
      rewardName: '일반 티켓',
      qrStatus: 'ACTIVE',
      orderId: 102,
    },
    {
      memberId: 6,
      nickname: '공연팬',
      name: '박민수',
      phone: '010-5555-6666',
      email: 'fan@example.com',
      quantity: 3,
      rewardName: '굿즈 패키지',
      qrStatus: 'NONE',
      orderId: 103,
    },
  ],
};

export const mockDashboard: CreatorDashboardResDT = {
  totalFunding: 6350000,
  participantCount: 89,
  likeCount: 234,
  dDay: 16,
  rewardSales: [
    {
      rewardId: 1,
      rewardName: 'VIP 티켓',
      soldQuantity: 30,
      revenue: 2400000,
    },
    {
      rewardId: 2,
      rewardName: '일반 티켓',
      soldQuantity: 120,
      revenue: 4200000,
    },
    {
      rewardId: 3,
      rewardName: '굿즈 패키지',
      soldQuantity: 45,
      revenue: 1125000,
    },
  ],
  genderRatio: { male: 42, female: 58 },
  ageRatio: { '10s': 5, '20s': 45, '30s': 35, '40s': 12, '50s+': 3 },
};

export const mockCreatorSettlement: CreatorSettlementResDT = {
  totalAmount: 6350000,
  feeAmount: 444500,
  payoutAmount: 5905500,
};

// ===========================
// Mock: Admin - Settlement (관리자 정산)
// ===========================

export const mockSettlements: SettlementListResDTO[] = [
  {
    id: 1,
    totalAmount: 6350000,
    feeAmount: 444500,
    payoutAmount: 5905500,
    settlementStatus: 'WAITING',
    title: '인디밴드 별빛 단독 콘서트',
    documents: [
      {
        id: 10,
        fileUrl: 'https://via.placeholder.com/100',
        originalFilename: 'settlement_doc.pdf',
        extension: 'pdf',
      },
    ],
  },
  {
    id: 2,
    totalAmount: 3200000,
    feeAmount: 224000,
    payoutAmount: 2976000,
    settlementStatus: 'IN_PROGRESS',
    title: '푸른 오렌지 재즈 콘서트',
    documents: [],
  },
  {
    id: 3,
    totalAmount: 1500000,
    feeAmount: 105000,
    payoutAmount: 1395000,
    settlementStatus: 'COMPLETED',
    title: 'K-POP 커버댄스 페스티벌',
    documents: [
      {
        id: 11,
        fileUrl: 'https://via.placeholder.com/100',
        originalFilename: 'settlement_complete.pdf',
        extension: 'pdf',
      },
    ],
  },
];

// ===========================
// Mock: Admin - Creator Applications (관리자 크리에이터 심사)
// ===========================

export const mockAdminApplications: ApplicationListResponse = {
  items: [
    {
      applicationId: 1,
      memberId: 3,
      name: '이유리',
      creatorType: 'INDIVIDUAL',
      creatorTypeDescription: '개인',
      status: 'APPROVED',
      statusDescription: '승인됨',
      createdAt: '2026-01-05T10:00:00',
    },
    {
      applicationId: 2,
      memberId: 5,
      name: '박지훈',
      creatorType: 'SOLE_BIZ',
      creatorTypeDescription: '개인사업자',
      status: 'PENDING',
      statusDescription: '대기중',
      createdAt: '2026-01-25T14:00:00',
    },
    {
      applicationId: 3,
      memberId: 6,
      name: '최수진',
      creatorType: 'CORP_BIZ',
      creatorTypeDescription: '법인사업자',
      status: 'REJECTED',
      statusDescription: '반려됨',
      createdAt: '2026-01-20T09:00:00',
    },
  ],
  totalCount: 3,
  page: 0,
  size: 10,
};

export const mockDocumentList: DocumentListResponse = {
  applicationId: 2,
  memberName: '박지훈',
  creatorType: 'SOLE_BIZ',
  documents: [
    {
      docId: 1,
      docTypeDescription: '신분증',
      attachmentId: 20,
      fileUrl: 'https://via.placeholder.com/400x300',
      originalFilename: 'id_card.jpg',
      extension: 'jpg',
    },
    {
      docId: 2,
      docTypeDescription: '통장 사본',
      attachmentId: 21,
      fileUrl: 'https://via.placeholder.com/400x300',
      originalFilename: 'bankbook.jpg',
      extension: 'jpg',
    },
  ],
  requiredDocs: ['ID_CARD', 'BANKBOOK', 'BRC'],
};

export const mockReviewResponse: ReviewResponse = {
  applicationId: 2,
  memberId: 5,
  status: 'APPROVED',
  statusDescription: '승인됨',
  processedAt: '2026-01-30T15:30:00',
  adminId: 1,
};

// ===========================
// Mock: Admin - Projects (관리자 프로젝트 심사)
// ===========================

export const mockAdminProjectList: ProjectAuditListResponse[] = [
  {
    projectId: 1,
    title: '인디밴드 별빛 단독 콘서트',
    creatorName: '이유리',
    targetAmount: 5000000,
    status: 'FUNDING',
    createdAt: '2026-01-15T10:30:00',
  },
  {
    projectId: 8,
    title: '재즈 피아노 트리오 공연',
    creatorName: '박지훈',
    targetAmount: 3000000,
    status: 'PENDING',
    createdAt: '2026-01-28T09:00:00',
  },
  {
    projectId: 9,
    title: '클래식 바이올린 독주회',
    creatorName: '최수진',
    targetAmount: 2000000,
    status: 'REJECTED',
    createdAt: '2026-01-22T11:00:00',
  },
];

// ===========================
// Mock: Admin - Events (관리자 이벤트)
// ===========================

export const mockAdminEvents: EventDetailResponse[] = [
  {
    eventId: 1,
    category: 'NOTICE',
    title: 'Muses 서비스 오픈 안내',
    description: 'Muses 공연 펀딩 플랫폼이 정식 오픈하였습니다.',
    content: '<h2>Muses 오픈을 환영합니다!</h2><p>공연 펀딩 플랫폼 Muses가 2026년 1월에 정식 오픈했습니다.</p>',
    uploadDateTime: null,
    createdAt: '2026-01-10T10:00:00',
    updatedAt: '2026-01-10T10:00:00',
    status: '게시됨',
  },
  {
    eventId: 2,
    category: 'COLLABORATIVE',
    title: '크리에이터 모집 공지',
    description: '공연을 기획 중인 아티스트를 모집합니다.',
    content: '<h2>크리에이터 모집</h2><p>지금 바로 신청하세요.</p>',
    uploadDateTime: '2026-02-01T10:00:00',
    createdAt: '2026-01-15T10:00:00',
    updatedAt: '2026-01-15T10:00:00',
    status: '예약됨',
  },
];

// ===========================
// Mock: Filter Options (필터 옵션)
// ===========================

export const mockRegions = [
  { code: 'SEOUL', name: '서울' },
  { code: 'GYEONGGI', name: '경기' },
  { code: 'INCHEON', name: '인천' },
  { code: 'BUSAN', name: '부산' },
  { code: 'DAEGU', name: '대구' },
  { code: 'DAEJEON', name: '대전' },
  { code: 'GWANGJU', name: '광주' },
  { code: 'ULSAN', name: '울산' },
  { code: 'SEJONG', name: '세종' },
  { code: 'GANGWON', name: '강원' },
  { code: 'CHUNGBUK', name: '충북' },
  { code: 'CHUNGNAM', name: '충남' },
  { code: 'JEONBUK', name: '전북' },
  { code: 'JEONNAM', name: '전남' },
  { code: 'GYEONGBUK', name: '경북' },
  { code: 'GYEONGNAM', name: '경남' },
  { code: 'JEJU', name: '제주' },
];

export const mockFundingStatuses = [
  { code: 'PREPARING', name: '준비중' },
  { code: 'SCHEDULED', name: '오픈 예정' },
  { code: 'FUNDING', name: '펀딩중' },
  { code: 'CLOSING', name: '마감 임박' },
  { code: 'SUCCESS', name: '펀딩 성공' },
  { code: 'FAIL', name: '펀딩 실패' },
];

export const mockAgeLimits = [
  { code: 'ALL', name: '전체 이용가' },
  { code: 'ADULT', name: '19세 이상' },
];

// ===========================
// Mock: Token (인증)
// ===========================

export const mockTokenResponse: TokenResponse = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWtlckBtdXNlcy5jb20iLCJpYXQiOjE3MDY2MjI0MDAsImV4cCI6MTcwNjYyNjAwMH0.mock_access_token',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWtlckBtdXNlcy5jb20iLCJpYXQiOjE3MDY2MjI0MDAsImV4cCI6MTcwNzIyNzIwMH0.mock_refresh_token',
  role: 'MAKER',
  name: '김철수',
};
