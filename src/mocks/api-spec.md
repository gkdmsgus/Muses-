# Muses Backend API Specification

> 백엔드 레포: `umcMuses/Backend`  
> Base URL: `https://[서버주소]/api`  
> 인증: JWT Bearer Token (`Authorization: Bearer <accessToken>`)  
> 공통 응답 형식: `{ "success": boolean, "data": T, "pageInfo"?: PageInfo }`

---

## 목차

1. [인증 (Auth)](#1-인증-auth)
2. [랜딩 (Landing)](#2-랜딩-landing)
3. [프로젝트 (Project)](#3-프로젝트-project)
4. [프로젝트 필터 옵션 (ProjectFilters)](#4-프로젝트-필터-옵션-projectfilters)
5. [주문 (Order)](#5-주문-order)
6. [빌링키 인증 (BillingAuth)](#6-빌링키-인증-billingauth)
7. [체크인 (Checkin)](#7-체크인-checkin)
8. [이벤트/공지 (Event)](#8-이벤트공지-event)
9. [알람 (Alarm)](#9-알람-alarm)
10. [마이페이지 - 프로필 (MyPage)](#10-마이페이지---프로필-mypage)
11. [마이페이지 - 관심 프로젝트 (MyInterest)](#11-마이페이지---관심-프로젝트-myinterest)
12. [마이페이지 - 주문 내역 (MyOrderHistory)](#12-마이페이지---주문-내역-myorderhistory)
13. [마이페이지 - 티켓 (MyTicket)](#13-마이페이지---티켓-myticket)
14. [마이페이지 - 크리에이터 전환 신청 (CreatorApplication)](#14-마이페이지---크리에이터-전환-신청-creatorapplication)
15. [크리에이터 센터 - 프로젝트 (CreatorCenter)](#15-크리에이터-센터---프로젝트-creatorcenter)
16. [정산 관리 - 관리자 (Settlement Admin)](#16-정산-관리---관리자-settlement-admin)
17. [관리자 - 크리에이터 심사 (Admin Creator)](#17-관리자---크리에이터-심사-admin-creator)
18. [관리자 - 프로젝트 심사 (Admin Project)](#18-관리자---프로젝트-심사-admin-project)
19. [관리자 - 이벤트 관리 (Admin Event)](#19-관리자---이벤트-관리-admin-event)

---

## Enum 정의

### Role
| 값 | 설명 |
|---|---|
| `GUEST` | 프로필 미설정 상태 |
| `MAKER` | 정회원 |
| `CREATOR` | 크리에이터 |
| `ADMIN` | 관리자 |

### Provider
| 값 | 설명 |
|---|---|
| `LOCAL` | 자체 회원가입 |
| `KAKAO` | 카카오 소셜 로그인 |
| `GOOGLE` | 구글 소셜 로그인 |

### FundingStatus
| 값 | 설명 |
|---|---|
| `PREPARING` | 준비중 |
| `SCHEDULED` | 오픈 예정 |
| `FUNDING` | 펀딩중 |
| `CLOSING` | 마감 임박 |
| `SUCCESS` | 펀딩 성공 |
| `FAIL` | 펀딩 실패 |

### Region
| 값 | 설명 |
|---|---|
| `SEOUL` | 서울 |
| `GYEONGGI` | 경기 |
| `INCHEON` | 인천 |
| `BUSAN` | 부산 |
| `DAEGU` | 대구 |
| `DAEJEON` | 대전 |
| `GWANGJU` | 광주 |
| `ULSAN` | 울산 |
| `SEJONG` | 세종 |
| `GANGWON` | 강원 |
| `CHUNGBUK` | 충북 |
| `CHUNGNAM` | 충남 |
| `JEONBUK` | 전북 |
| `JEONNAM` | 전남 |
| `GYEONGBUK` | 경북 |
| `GYEONGNAM` | 경남 |
| `JEJU` | 제주 |

### AgeLimit
| 값 | 설명 |
|---|---|
| `ALL` | 전체 이용가 |
| `ADULT` | 19세 이상 |

### RewardType
| 값 | 설명 |
|---|---|
| `TICKET` | QR 티켓 발급 |
| `NONE` | QR 티켓 미발급 |

### OrderStatus
| 값 | 설명 |
|---|---|
| `RESERVED` | 결제 예약됨 |
| `CANCELED` | 후원 취소됨 |
| `PAYING` | 결제 처리 중 |
| `PAID` | 결제 완료 |
| `PAY_FAILED` | 결제 실패 |
| `VOID` | 펀딩 실패로 무효 처리 |

### PaymentStatus
| 값 | 설명 |
|---|---|
| `READY` | 준비 |
| `SUCCESS` | 성공 |
| `CANCEL` | 취소 |
| `FAIL` | 실패 |

### TicketStatus
| 값 | 설명 |
|---|---|
| `UNUSED` | 미사용 |
| `USED` | 체크인 완료 |
| `CANCELED` | 취소됨 |

### SettlementStatus
| 값 | 설명 |
|---|---|
| `WAITING` | 대기중 |
| `IN_PROGRESS` | 처리중 |
| `COMPLETED` | 완료됨 |

### ApplicationStatus (크리에이터 전환 신청)
| 값 | 설명 |
|---|---|
| `PENDING` | 심사 대기 |
| `APPROVED` | 승인됨 |
| `REJECTED` | 반려됨 |

### CreatorType
| 값 | 설명 |
|---|---|
| `INDIVIDUAL` | 개인 |
| `SOLE_BIZ` | 개인사업자 |
| `CORP_BIZ` | 법인사업자 |

### DocType (서류 유형)
| 값 | 설명 | 대상 |
|---|---|---|
| `ID_CARD` | 신분증 사본 | 개인/개인사업자/법인사업자 |
| `BANKBOOK` | 통장 사본 | 개인/개인사업자/법인사업자 |
| `BRC` | 사업자등록증 사본 | 개인사업자/법인사업자 |
| `COMP_SEAL` | 법인 인감증명서 | 법인사업자 |
| `COMP_REGISTRY` | 법인 등기부등본 | 법인사업자 |

### QrStatus
| 값 | 설명 |
|---|---|
| `NONE` | 해당 없음 (QR 티켓 없는 주문) |
| `ACTIVE` | 활성화 |
| `INACTIVE` | 비활성화 |

### EventCategory
| 값 | 설명 |
|---|---|
| `NOTICE` | 공지 |
| `COLLABORATIVE` | 협업 |

### BillingAuthStatus
| 값 | 설명 |
|---|---|
| `ACTIVE` | 활성 |
| `REVOKED` | 폐기됨 |

### ProjectAuditStatus (관리자 심사 상태)
| 값 | 설명 |
|---|---|
| `DRAFT` | 작성중 |
| `PENDING` | 검토중 |
| `APPROVED` | 승인됨 |
| `REJECTED` | 반려됨 |

---

## 1. 인증 (Auth)

### POST /api/auth/signup
자체 회원가입

**Request Body:**
```json
{
  "name": "김철수",
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** `Long` (생성된 memberId)

---

### POST /api/auth/login
자체 로그인

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "accessToken": "eyJ...",
  "refreshToken": "eyJ...",
  "role": "MAKER",
  "name": "김철수"
}
```

---

### POST /api/auth/profile/create
초기 프로필 생성 (회원가입 직후, multipart/form-data)

**인증 필요**

**Form Parts:**
- `profileImage` (선택): 이미지 파일 (jpg/jpeg/png/webp)
- `nickName` (필수): 닉네임
- `introduction` (선택): 자기소개
- `birthday` (필수): 생년월일 (yyyy-MM-dd)

**Query Params:**
- `gender` (필수): 성별 (0=남, 1=여)

**Response:**
```json
{
  "accessToken": "eyJ...",
  "refreshToken": "eyJ...",
  "role": "MAKER",
  "name": "김철수"
}
```

---

### GET /api/auth/signup/check-email
이메일 중복 확인

**Query Params:**
- `email`: 확인할 이메일

**Response:** `Boolean` (true: 중복, false: 사용 가능)

---

### GET /api/auth/profile/check-nickname
닉네임 중복 확인

**Query Params:**
- `nickName`: 확인할 닉네임

**Response:** `Boolean`

---

### POST /api/auth/logout
로그아웃 (인증 필요)

**Response:** `"로그아웃 되었습니다."`

---

### DELETE /api/auth/withdraw
회원 탈퇴 (인증 필요)

**Response:** `"회원탈퇴가 완료되었습니다."`

---

### GET /auth/callback
소셜 로그인 콜백 (OAuth2)

**Response:** URL의 토큰 확인 안내 메시지

---

## 2. 랜딩 (Landing)

### POST /api/landing
랜딩 페이지 프로젝트 목록 조회

FUNDING 상태 프로젝트를 후원자 수 기준 상위 6개 반환

**Response:**
```json
[
  {
    "projectId": 1,
    "thumbnailUrl": "https://cdn.muses.com/project/thumbnail.png",
    "title": "인디밴드 단독 콘서트",
    "achieveRate": 127,
    "deadline": "2025-03-01T23:59:59",
    "dDay": 15,
    "fundingStatus": "FUNDING",
    "region": "SEOUL",
    "tags": ["콘서트", "인디", "라이브"]
  }
]
```

---

## 3. 프로젝트 (Project)

### POST /api/projects/draft
프로젝트 초기 생성 (인증 필요)

**Request Body:**
```json
{
  "userId": 1,
  "title": "임시프로젝트이름"
}
```

**Response:**
```json
{
  "projectId": 1,
  "status": "DRAFT",
  "message": "프로젝트 생성 완료",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### GET /api/projects/{projectId}
프로젝트 상세 조회

**Response:**
```json
{
  "projectId": 1,
  "status": "FUNDING",
  "lastSavedStep": 5,
  "title": "인디밴드 단독 콘서트",
  "description": "첫 번째 단독 콘서트입니다",
  "thumbnailUrl": "https://cdn.muses.com/project/thumbnail.png",
  "tags": ["음악", "콘서트", "인디밴드"],
  "ageLimit": "ALL",
  "region": "SEOUL",
  "targetAmount": 5000000,
  "opening": "2025-02-01T00:00:00",
  "deadline": "2025-03-01T23:59:59",
  "fundingStatus": "FUNDING",
  "rewards": [
    {
      "rewardId": 1,
      "rewardName": "VIP석",
      "price": 50000,
      "description": "VIP 좌석에서 공연 감상",
      "totalQuantity": 100,
      "soldQuantity": 45,
      "remainingQuantity": 55,
      "type": "TICKET"
    }
  ],
  "storyHtml": "<h1>프로젝트 소개</h1>",
  "refundPolicy": "공연 7일 전까지 전액 환불 가능",
  "attachments": [],
  "creatorName": "이유리",
  "creatorNickName": "MusicLover",
  "hostProfileImg": "https://...",
  "hostPhone": "010-1234-5678",
  "hostBio": "보컬을 맡고 있습니다",
  "managerName": "김철수",
  "managerPhone": "010-9876-5432",
  "documents": [],
  "makerDocuments": [],
  "achieveRate": 127,
  "supporterCount": 89,
  "createdAt": "2025-01-15T10:30:00",
  "updatedAt": "2025-01-20T14:20:00"
}
```

---

### GET /api/projects
프로젝트 목록 조회 (DRAFT, PENDING 제외)

**Response:** `ProjectCardResponseDT[]`
```json
[
  {
    "projectId": 1,
    "thumbnailUrl": "https://...",
    "title": "인디밴드 단독 콘서트",
    "achieveRate": 127,
    "deadline": "2025-03-01T23:59:59",
    "dDay": 15,
    "fundingStatus": "FUNDING",
    "isScheduled": false,
    "opening": "2025-02-01T00:00:00",
    "attachmentImageUrl": "https://...",
    "region": "SEOUL",
    "tags": ["음악", "콘서트"]
  }
]
```

---

### GET /api/projects/search
프로젝트 검색 (필터링 + 페이징)

**Query Params:**
- `region` (선택): 지역 코드
- `fundingStatus` (선택): 펀딩 상태
- `tag` (선택): 태그 키워드 (부분 일치)
- `keyword` (선택): 검색어 (제목/설명)
- `page` (기본값: 0): 페이지 번호
- `size` (기본값: 10): 페이지 크기

**Response:**
```json
{
  "projects": [...],
  "totalCount": 42,
  "page": 0,
  "size": 10,
  "totalPages": 5,
  "hasNext": true
}
```

---

### PUT /api/projects/{projectId}/outline
1단계: 개요 저장

**Request Body:**
```json
{
  "title": "인디밴드 단독 콘서트",
  "description": "인디밴드 단독 콘서트입니다",
  "thumbnailUrl": "https://...",
  "tags": ["음악", "콘서트", "인디밴드"],
  "ageLimit": "ALL",
  "region": "SEOUL"
}
```

**Response:**
```json
{
  "projectId": 1,
  "message": "개요 저장 완료",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### PUT /api/projects/{projectId}/funding
2단계: 펀딩 설정 저장

**Request Body:**
```json
{
  "targetAmount": 5000000,
  "opening": "2025-02-01T00:00:00",
  "deadline": "2025-03-01T23:59:59"
}
```

**Response:**
```json
{
  "projectId": 1,
  "message": "펀딩 설정 저장 완료",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### PUT /api/projects/{projectId}/rewards
3단계: 리워드 저장 (기존 리워드 전체 삭제 후 재저장)

**Request Body:**
```json
{
  "rewards": [
    {
      "rewardName": "VIP석",
      "price": 50000,
      "description": "최고의 좌석에서 공연 감상. 포토카드 포함.",
      "totalQuantity": 100,
      "type": "TICKET"
    }
  ]
}
```

**Response:**
```json
{
  "projectId": 1,
  "message": "리워드 저장 완료",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### PUT /api/projects/{projectId}/story
4단계: 스토리 저장

**Request Body:**
```json
{
  "storyHtml": "<h1>프로젝트 소개</h1><p>내용...</p>",
  "refundPolicy": "공연 7일 전까지 전액 환불 가능합니다."
}
```

**Response:**
```json
{
  "projectId": 1,
  "message": "스토리 저장 완료",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### POST /api/projects/{projectId}/images
4단계: 파일 업로드 (multipart/form-data)

**Form Parts:**
- `files` (선택): 업로드할 파일 목록

**Query Params:**
- `deleteIds` (선택): 삭제할 첨부파일 ID 목록

**Response:**
```json
{
  "projectId": 1,
  "fileUrls": ["https://...", "https://..."],
  "message": "파일 처리 완료",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### PUT /api/projects/{projectId}/info
5단계: 정보 저장

**Request Body:**
```json
{
  "hostProfileImg": "https://...",
  "hostPhone": "010-1234-5678",
  "hostBirth": "1990-05-15",
  "hostAddress": "서울특별시 강남구...",
  "hostBio": "인디밴드 리더이자 보컬입니다.",
  "managerName": "김매니저",
  "managerPhone": "010-9876-5432",
  "managerEmail": "manager@example.com"
}
```

**Response:**
```json
{
  "projectId": 1,
  "message": "정보 저장 완료",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### POST /api/projects/{projectId}/documents
5단계: 정산 서류 업로드 (multipart/form-data)

**Form Parts:**
- `files` (선택): 업로드할 파일 목록

**Query Params:**
- `deleteIds` (선택): 삭제할 첨부파일 ID 목록

**Response:**
```json
{
  "projectId": 1,
  "documentUrls": ["https://..."],
  "message": "정산 서류 처리 완료",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### POST /api/projects/{projectId}/maker-documents
5단계: 메이커 서류 업로드 (multipart/form-data)

**Form Parts:**
- `files` (선택): 업로드할 파일 목록

**Query Params:**
- `deleteIds` (선택): 삭제할 첨부파일 ID 목록

**Response:**
```json
{
  "projectId": 1,
  "documentUrls": ["https://..."],
  "message": "메이커 서류 처리 완료",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### POST /api/projects/{projectId}/submit
프로젝트 제출 (DRAFT → PENDING)

**Response:**
```json
{
  "projectId": 1,
  "status": "PENDING",
  "message": "프로젝트가 심사 요청되었습니다",
  "timestamp": "2026-01-01T00:00:00"
}
```

---

### POST /api/projects/{projectId}/like
좋아요 토글 (인증 필요)

**Response:**
```json
{
  "projectId": 1,
  "liked": true,
  "likeCount": 42
}
```

---

### GET /api/projects/{projectId}/like
좋아요 상태 조회

**Response:**
```json
{
  "projectId": 1,
  "liked": false,
  "likeCount": 42
}
```

---

## 4. 프로젝트 필터 옵션 (ProjectFilters)

### GET /api/project-filters/regions
지역 목록 조회

**Response:**
```json
[
  { "code": "SEOUL", "name": "서울" },
  { "code": "GYEONGGI", "name": "경기" }
]
```

---

### GET /api/project-filters/funding-statuses
펀딩 상태 목록 조회

**Response:**
```json
[
  { "code": "PREPARING", "name": "준비중" },
  { "code": "FUNDING", "name": "펀딩중" }
]
```

---

### GET /api/project-filters/age-limits
연령 제한 목록 조회

**Response:**
```json
[
  { "code": "ALL", "name": "전체 이용가" },
  { "code": "ADULT", "name": "19세 이상" }
]
```

---

## 5. 주문 (Order)

### POST /api/orders/prepare
주문 준비 (인증 필요)

응원하기 버튼 클릭 시 주문(RESERVED) 생성

**Request Body:**
```json
{
  "projectId": 1,
  "items": [
    {
      "rewardId": 10,
      "quantity": 2,
      "unitPrice": 55000
    }
  ]
}
```

**Response:**
```json
{
  "orderId": 1001,
  "customerKey": "muses_550e8400-e29b-41d4-a716-446655440000",
  "successUrl": "https://umc-muses.netlify.app/billing/success",
  "failUrl": "https://umc-muses.netlify.app/billing/fail"
}
```

---

### DELETE /api/orders/cancel/all/{orderId}
주문 전체 취소 (연관 빌링키 삭제)

**Response:** `"OK"`

---

## 6. 빌링키 인증 (BillingAuth)

### POST /api/billing-auth/issue
빌링키 발급

프론트에서 Toss 결제 인증 후 받은 `authKey` 기반으로 PG에 빌링키를 발급

**Query Params:**
- `orderId` (필수): 주문 ID

**Request Body:**
```json
{
  "authKey": "auth_4a2f8c9d0e",
  "customerKey": "user_12345"
}
```

**Response:** `"OK"`

---

## 7. 체크인 (Checkin)

### POST /api/checkin/result
체크인 확정 (스태프용)

**Query Params:**
- `ticketId`: 티켓 ID
- `name`: 구매자 이름
- `nick`: 구매자 닉네임
- `qty`: 수량
- `reward`: 리워드명

**Response:**
```json
{
  "result": "USED_NOW",
  "buyerName": "홍길동",
  "buyerNickname": "길동이",
  "rewardTitle": "VIP 티켓",
  "quantity": 2,
  "usedAt": "2026-01-27T14:30:00"
}
```
- `result` 값: `"USED_NOW"` (정상 처리) | `"ALREADY_USED"` (이미 사용됨)

---

### GET /api/checkin/tickets/{ticketId}/qr.png
티켓 QR 이미지 생성 (인증 필요)

PNG 이미지 바이너리 반환

---

### GET /api/checkin/tickets/{ticketId}
티켓 토큰 조회

**Response:**
```json
{
  "ticketToken": "abc123XYZ"
}
```

---

### POST /api/checkin/projects/{projectId}/link
프로젝트 체크인 링크 생성/조회

**Response:**
```json
{
  "checkinUrl": "https://mymuses.site/checkin/abc123XYZ"
}
```

---

## 8. 이벤트/공지 (Event)

### GET /api/events
이벤트 목록 조회

**Query Params:**
- `keyword` (선택): 제목 검색
- `page` (기본값: 0): 페이지 번호
- `size` (기본값: 3): 페이지 크기

**Response:**
```json
[
  {
    "eventId": 1,
    "title": "Muses 업데이트 안내",
    "description": "서비스 기능 개선 안내",
    "content": "이번 업데이트에서는...",
    "category": "NOTICE",
    "date": "2026-01-28T10:00:00"
  }
]
```

---

### GET /api/events/{eventId}
이벤트 상세 조회

**Response:**
```json
{
  "event": {
    "eventId": 1,
    "title": "Muses 업데이트 안내",
    "description": "서비스 기능 개선 안내",
    "content": "이번 업데이트에서는...",
    "category": "NOTICE",
    "date": "2026-01-28T10:00:00"
  },
  "prevId": 2,
  "nextId": null
}
```

---

## 9. 알람 (Alarm)

### GET /api/alarms
내 알람 목록 조회 (인증 필요)

활성 알람 최신 20개 반환

**Response:**
```json
[
  {
    "memberAlarmId": 1,
    "content": "인디밴드 콘서트가 시작되었습니다",
    "alarmTime": "2025-01-22T12:00:00"
  }
]
```

---

### GET /api/alarms/count
내 알람 개수 조회 (인증 필요)

**Response:** `Integer`

---

### DELETE /api/alarms/{memberAlarmId}
알람 닫기 (비활성화)

**Response:** `null`

---

## 10. 마이페이지 - 프로필 (MyPage)

### GET /api/users/me
프로필 조회 (인증 필요)

**Response:**
```json
{
  "memberId": 2,
  "name": "지원이",
  "email": "2jw0305@gmail.com",
  "nickName": "리브",
  "introduction": "재즈 공연 좋아합니다.",
  "birthday": "2003-05-30",
  "gender": 1,
  "profileImgUrl": "http://localhost:9098/files/member/2/profile.png",
  "ticketCount": 3,
  "supportCount": 5,
  "supportLevel": 2
}
```

---

### POST /api/users/me/profile
프로필 수정 (인증 필요)

**Request Body:**
```json
{
  "nickName": "리브",
  "introduction": "안녕하세요. 공연 좋아해요!",
  "birthday": "2003-05-30",
  "gender": 0
}
```

**Response:** `MyProfileResDT` (위 GET 응답과 동일)

---

### PATCH /api/users/me/profile/image
프로필 이미지 수정 (인증 필요, multipart/form-data)

**Form Parts:**
- `image` (필수): 이미지 파일

**Response:**
```json
{
  "profileImgUrl": "http://localhost:9098/files/member/2/profile.png"
}
```

---

## 11. 마이페이지 - 관심 프로젝트 (MyInterest)

### GET /api/users/me/likes/projects
관심 있는 프로젝트 목록 조회 (인증 필요)

**Query Params:**
- `page` (기본값: 0)
- `size` (기본값: 10)

**Response:** `ProjectCardResponseDT[]`

---

## 12. 마이페이지 - 주문 내역 (MyOrderHistory)

### GET /api/users/me/orders
내 결제 목록 조회 (인증 필요)

**Response:**
```json
{
  "items": [
    {
      "orderId": 101,
      "projectTitle": "푸른 오렌지 재즈 콘서트",
      "orderStatus": "PAID",
      "paymentStatus": "SUCCESS",
      "amount": 59000,
      "displayDate": "2026-01-30T15:00:00"
    }
  ]
}
```

---

### GET /api/users/me/orders/detail
내 결제 상세 조회 (인증 필요)

**Query Params:**
- `orderId` (필수): 주문 ID

**Response:**
```json
{
  "orderId": 101,
  "projectTitle": "푸른 오렌지 재즈 콘서트",
  "opening": "2026-02-10T18:00:00",
  "locationDetail": "홍대입구역 2번 출구 인근",
  "optionTitle": "VIP 티켓",
  "optionDescription": "앞좌석 + 굿즈 제공",
  "quantity": 2,
  "paidAt": "2026-01-30T15:00:00",
  "paymentProvider": "TOSS_PAYMENTS",
  "amount": 118000,
  "orderStatus": "PAID",
  "paymentStatus": "SUCCESS"
}
```

---

## 13. 마이페이지 - 티켓 (MyTicket)

### GET /api/users/me/tickets
내 티켓 목록 조회 (인증 필요)

**Response:**
```json
[
  {
    "ticketId": 15,
    "projectTitle": "푸른 오렌지 재즈 콘서트",
    "opening": "2026-02-10T18:00:00",
    "optionLabel": "VIP 티켓",
    "ticketToken": "TICKET-8f3a2c9b",
    "status": "UNUSED"
  }
]
```

---

## 14. 마이페이지 - 크리에이터 전환 신청 (CreatorApplication)

### POST /api/creators/applications
크리에이터 전환 신청 (인증 필요)

**Request Body:**
```json
{
  "creatorType": "INDIVIDUAL"
}
```

**Response:**
```json
{
  "applicationId": 12,
  "creatorType": "INDIVIDUAL",
  "status": "PENDING"
}
```

---

### GET /api/creators/applications/me
내 크리에이터 전환 신청 조회 (인증 필요)

**Response:** CreatorApplyResDT (위와 동일)

---

### POST /api/creators/applications/me/docs
서류 업로드 (인증 필요, multipart/form-data)

**Form Parts:**
- `docType` (필수): 서류 유형 (ID_CARD, BANKBOOK, BRC, COMP_SEAL, COMP_REGISTRY)
- `file` (필수): 파일

**Response:**
```json
{
  "docId": 1,
  "docType": "ID_CARD",
  "attachmentId": 18,
  "fileUrl": "http://localhost:9098/files/member/2/abc123.pdf",
  "originalFilename": "id_card.jpg",
  "extension": "jpg"
}
```

---

### GET /api/creators/applications/me/docs
내 전환 신청 서류 목록 조회 (인증 필요)

**Response:** `CreatorApplicationDocResDT[]`

---

### POST /api/creators/applications/me/submit
전환 신청 제출 및 검증 (인증 필요)

**Response:**
```json
{
  "applicationId": 12,
  "status": "PENDING",
  "submitted": false,
  "required": ["ID_CARD", "BANKBOOK"],
  "uploaded": ["ID_CARD"],
  "missing": ["BANKBOOK"]
}
```

---

## 15. 크리에이터 센터 - 프로젝트 (CreatorCenter)

### GET /api/creators/me/projects
내 프로젝트 목록 조회 (인증 필요, CREATOR 역할)

**Response:**
```json
{
  "items": [
    {
      "projectId": 2,
      "title": "푸른 오렌지 재즈 콘서트",
      "fundingStatus": "FUNDING",
      "dDay": 3,
      "achieveRate": 124,
      "raisedAmount": 2840000,
      "tags": ["재즈", "공연"]
    }
  ]
}
```

---

### GET /api/creators/me/summary
크리에이터 요약 정보 (인증 필요)

**Response:**
```json
{
  "totalFunding": 2840000,
  "ongoingProjectCount": 1
}
```

---

### GET /api/creators/creator-center/projects/{projectId}/setting
프로젝트 설정 조회 (인증 필요)

**Response:**
```json
{
  "projectId": 2,
  "description": "재즈 라이브 공연을 준비 중입니다.",
  "tags": ["재즈", "공연"],
  "targetAmount": 3000000,
  "deadline": "2026-02-10T18:00:00"
}
```

---

### PATCH /api/creators/creator-center/projects/{projectId}/details
프로젝트 설정 수정 (인증 필요)

**Request Body:**
```json
{
  "description": "재즈 라이브 공연을 준비 중입니다. 2월 10일 홍대에서 만나요!",
  "tags": ["재즈", "공연", "홍대"]
}
```

**Response:** `ProjectSettingsResponse`

---

### GET /api/creators/creator-center/projects/{projectId}/makers
메이커 명단 조회 (인증 필요)

**Response:**
```json
{
  "projectId": 2,
  "items": [
    {
      "memberId": 5,
      "nickname": "재즈좋아",
      "name": "이지원",
      "phone": "010-1234-5678",
      "email": "2jw@gmail.com",
      "quantity": 2,
      "rewardName": "일반 티켓",
      "qrStatus": "ACTIVE",
      "orderId": 3
    }
  ]
}
```

---

### POST /api/creators/creator-center/projects/{projectId}/makers/orderId/{orderId}/status/{qrStatus}
메이커 주문 QR 상태 변경 (인증 필요)

- `ACTIVE` → 티켓 UNUSED를 모두 USED로 변경
- `INACTIVE` → 티켓 USED를 모두 UNUSED로 변경

**Response:** `null`

---

### GET /api/creators/creator-center/projects/{projectId}/dashboard
프로젝트 대시보드 (인증 필요)

**Response:**
```json
{
  "totalFunding": 2840000,
  "participantCount": 47,
  "likeCount": 123,
  "dDay": 3,
  "rewardSales": [
    {
      "rewardId": 1,
      "rewardName": "VIP 티켓",
      "soldQuantity": 20,
      "revenue": 1000000
    }
  ],
  "genderRatio": { "male": 45, "female": 55 },
  "ageRatio": { "20s": 40, "30s": 35, "40s": 25 }
}
```

---

### GET /api/creators/creator-center/projects/{projectId}/settlement
프로젝트 정산 (인증 필요)

**Response:**
```json
{
  "totalAmount": 1000000.00,
  "feeAmount": 70000.00,
  "payoutAmount": 930000.00
}
```

---

## 16. 정산 관리 - 관리자 (Settlement Admin)

### GET /api/admin/settlements
정산 목록 조회 (인증 필요, ADMIN 역할)

**Query Params:**
- `status` (선택): WAITING | IN_PROGRESS | COMPLETED (미전송 시 전체)

**Response:**
```json
[
  {
    "id": 1,
    "totalAmount": 100000.00,
    "feeAmount": 10000.00,
    "payoutAmount": 90000.00,
    "settlementStatus": "IN_PROGRESS",
    "title": "뮤지컬 갈라 콘서트",
    "documents": [
      {
        "id": 1,
        "fileUrl": "https://...",
        "originalFilename": "settlement.pdf",
        "extension": "pdf"
      }
    ]
  }
]
```

---

### POST /api/admin/settlements/payout
정산 지급 완료 처리 (인증 필요, ADMIN 역할)

**Query Params:**
- `settlementId` (필수): 정산 ID

**Response:** `"OK"`

---

## 17. 관리자 - 크리에이터 심사 (Admin Creator)

### GET /api/admin/creators/applications
크리에이터 전환 신청 목록 조회 (ADMIN 역할)

**Query Params:**
- `status` (선택): PENDING | APPROVED | REJECTED
- `page` (기본값: 0)
- `size` (기본값: 10)

**Response:**
```json
{
  "items": [
    {
      "applicationId": 12,
      "memberId": 5,
      "name": "김민지",
      "creatorType": "INDIVIDUAL",
      "creatorTypeDescription": "개인",
      "status": "PENDING",
      "statusDescription": "대기중",
      "createdAt": "2026-01-30T10:30:00"
    }
  ],
  "totalCount": 1,
  "page": 0,
  "size": 10
}
```

---

### GET /api/admin/creators/applications/{appId}/documents
서류 전체 조회 (ADMIN 역할)

**Response:**
```json
{
  "applicationId": 12,
  "memberName": "김철수",
  "creatorType": "INDIVIDUAL",
  "documents": [
    {
      "docId": 1,
      "docTypeDescription": "신분증",
      "attachmentId": 18,
      "fileUrl": "https://...",
      "originalFilename": "id_card.jpg",
      "extension": "jpg"
    }
  ],
  "requiredDocs": ["ID_CARD", "BANKBOOK"]
}
```

---

### GET /api/admin/creators/applications/{appId}/documents/{docType}
서류 개별 이미지 조회 (ADMIN 역할)

**Response:**
```json
{
  "applicationId": 12,
  "docType": "ID_CARD",
  "docTypeDescription": "신분증",
  "fileUrl": "https://...",
  "originalFilename": "id_card.jpg",
  "extension": "jpg"
}
```

---

### PATCH /api/admin/creators/applications/review
크리에이터 전환 승인/반려 (ADMIN 역할)

**Request Body:**
```json
{
  "applicationId": 12,
  "status": "APPROVED"
}
```

**Response:**
```json
{
  "applicationId": 12,
  "memberId": 5,
  "status": "APPROVED",
  "statusDescription": "승인됨",
  "processedAt": "2026-01-30T15:30:00",
  "adminId": 1
}
```

---

## 18. 관리자 - 프로젝트 심사 (Admin Project)

### GET /api/admin/projects
심사 프로젝트 목록 조회 (인증 필요)

**Query Params:**
- `status` (선택): DRAFT | PENDING | APPROVED | REJECTED
- `page` (기본값: 0)
- `size` (기본값: 10)

**Response:**
```json
[
  {
    "projectId": 1,
    "title": "인디밴드 단독 콘서트",
    "creatorName": "이유리",
    "targetAmount": 5000000,
    "status": "PENDING",
    "createdAt": "2026-01-15T10:30:00"
  }
]
```
(pageInfo 포함)

---

### GET /api/admin/projects/{projectId}
프로젝트 상세 조회 (관리자용, 인증 필요)

**Response:** `ProjectDetailResponseDT` (일반 상세 조회와 동일)

---

### PATCH /api/admin/projects/{projectId}/review
프로젝트 승인/반려 처리 (인증 필요)

**Request Body:**
```json
{
  "status": "APPROVED",
  "rejectReason": null
}
```

**Response:** `"프로젝트 심사가 완료되었습니다. [관리자 ID:1]"`

---

## 19. 관리자 - 이벤트 관리 (Admin Event)

### POST /api/admin/events
공지글 작성

**Request Body:**
```json
{
  "category": "NOTICE",
  "title": "서비스 점검 안내",
  "description": "서비스 점검 안내입니다.",
  "content": "<p>상세 본문...</p>",
  "uploadDateTime": "2026-02-01T10:00:00"
}
```

**Response:** `Long` (생성된 eventId)

---

### PATCH /api/admin/events/{eventId}
공지글 수정

**Request Body:** (위 EventRequest와 동일)

**Response:** `"공지글이 수정되었습니다."`

---

### DELETE /api/admin/events/{eventId}
공지글 삭제

**Response:** `"공지글이 삭제되었습니다."`

---

### GET /api/admin/events/{eventId}
공지글 상세 조회 (관리자용)

**Response:**
```json
{
  "eventId": 1,
  "category": "NOTICE",
  "title": "서비스 점검 안내",
  "description": "서비스 점검 안내입니다.",
  "content": "<p>상세 본문...</p>",
  "uploadDateTime": "2026-02-01T10:00:00",
  "createdAt": "2026-01-28T10:00:00",
  "updatedAt": "2026-01-28T10:00:00",
  "status": "예약됨"
}
```

---

### GET /api/admin/events
관리자 공지글 전체 조회

**Query Params:**
- `page` (기본값: 0)
- `size` (기본값: 10)

**Response:**
```json
[
  {
    "eventId": 1,
    "category": "NOTICE",
    "title": "서비스 점검 안내",
    "uploadDateTime": "2026-02-01T10:00:00",
    "createdAt": "2026-01-28T10:00:00",
    "updatedAt": "2026-01-28T10:00:00",
    "status": "게시됨"
  }
]
```
(pageInfo 포함)

---

## 초기 데이터 (data.sql 기반)

### 기본 계정
| 역할 | 이메일 | 비밀번호 | 이름 | 닉네임 |
|---|---|---|---|---|
| GUEST | lys0000@google.com | 1223 | 박지성 | - |
| ADMIN | admin@muses.com | 0000 | 뮤즈관리자 | AdminMuse |
| MAKER | maker@muses.com | 0000 | 김철수 | RapperLee |
| CREATOR | creator@muses.com | 0000 | 이유리 | MusicLover |

### 알람 템플릿
| ID | 템플릿 |
|---|---|
| 1 | `${projectName} 프로젝트가 생성되었습니다.` |
| 2 | `${projectName} 프로젝트가 승인되었습니다.` |
| 3 | `${projectName} 프로젝트 펀딩이 시작되었습니다.` |
| 4 | `${projectName} 프로젝트 펀딩이 성공적으로 완료되었습니다.` |
| 5 | `${projectName} 프로젝트에 ${makerName}님이 후원하셨습니다.` |
| 6 | `${projectName} 프로젝트의 ${rewardName} 리워드를 후원하셨습니다.` |
