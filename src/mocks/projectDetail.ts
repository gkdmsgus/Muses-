import cheeringImage from '../assets/images/cheering.png';
import mockPoster1 from '../assets/images/mockposters/1.png';
import mockPoster2 from '../assets/images/mockposters/2.png';
import mockPoster3 from '../assets/images/mockposters/3.png';
import type { ProjectDetailData } from '../types/projectDetails';

export const MOCK_PROJECT_DETAILS: ProjectDetailData[] = [
  {
    projectId: 1,
    creatorName: 'Band Dawn',
    contents: {
      project_id: 1,
      story_html: `
        <p>A대 시각디자인 졸업전시 “Trace”는 기록과 기억의 형태를 시각적으로 탐구하는 전시입니다.</p>
        <p>학생들의 다양한 시선이 모여 도시의 흔적, 개인의 일상, 그리고 시간의 결을 디자인으로 풀어냈습니다.</p>
        <img src="${cheeringImage}" alt="전시 준비 현장" />
        <p>여러분의 펀딩은 전시 공간 조성, 작품 설치, 전시 운영에 사용됩니다. 함께 전시의 마지막 퍼즐이 되어주세요.</p>
      `,
      refund_policy: '프로젝트 종료 후 7일 이내 환불 요청 시 전액 환불됩니다.',
      location_detail: '서울시 성동구 성수동 전시장',
    },
    manager: {
      host_id: 101,
      project_id: 1,
      host_profile_img: null,
      host_phone: '010-1111-2222',
      host_birth: '1996-03-12',
      host_address: '서울시 성동구 성수동',
      host_intro: '프로젝트 진행을 맡은 운영자입니다.',
      manager_name: '김민지',
      manager_phone: '010-1234-5678',
      manager_email: 'minji.kim@example.com',
    },
    tags: [
      { tag_id: 1, project_id: 1, tag_name: '#졸업전시' },
      { tag_id: 2, project_id: 1, tag_name: '#미디어아트' },
    ],
    posters: [mockPoster1, mockPoster2, mockPoster3],
    likes: 100,
    rewards: [
      {
        reward_id: 1,
        project_id: 1,
        reward_name: '감사 메시지',
        description:
          '프로젝트 종료 후 감사 메시지와 결과 리포트를 보내드립니다.',
        price: 5000,
        total_quantity: 100,
        sold_quantity: 0,
        entry_at: null,
        type: 'NONE',
      },
      {
        reward_id: 2,
        project_id: 1,
        reward_name: '전시 초대권',
        description: '전시 오픈 당일 입장 가능한 초대권 1매가 제공됩니다.',
        price: 20000,
        total_quantity: 54,
        sold_quantity: 46,
        entry_at: '2025-10-20T00:00:00',
        type: 'TICKET',
      },
    ],
  },
  {
    projectId: 2,
    creatorName: 'Band Dawn',
    contents: {
      project_id: 2,
      story_html: `
        <p>깊어가는 가을 밤, 여러분을 '새벽'의 첫 번째 단독 콘서트에 초대합니다. 지난 3년간 유튜브를 통해 들려드렸던 노래들을 이제 라이브로 생생하게 전달하려 합니다.</p>
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <p>홍대 웨스트브릿지에서 진행되며, 현장 리허설과 아티스트 스페셜 세션이 준비되어 있습니다.</p>
        <p>깊어가는 가을 밤, 여러분을 '새벽'의 첫 번째 단독 콘서트에 초대합니다. 지난 3년간 유튜브를 통해 들려드렸던 노래들을 이제 라이브로 생생하게 전달하려 합니다.</p>
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <p>홍대 웨스트브릿지에서 진행되며, 현장 리허설과 아티스트 스페셜 세션이 준비되어 있습니다.</p>
        <p>깊어가는 가을 밤, 여러분을 '새벽'의 첫 번째 단독 콘서트에 초대합니다. 지난 3년간 유튜브를 통해 들려드렸던 노래들을 이제 라이브로 생생하게 전달하려 합니다.</p>
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <p>홍대 웨스트브릿지에서 진행되며, 현장 리허설과 아티스트 스페셜 세션이 준비되어 있습니다.</p>
      `,
      refund_policy: '공연 전날 18시 이전 취소 시 전액 환불됩니다.',
      location_detail: '서울시 마포구 홍대 웨스트브릿지',
    },
    manager: {
      host_id: 102,
      project_id: 2,
      host_profile_img: null,
      host_phone: '010-2222-3333',
      host_birth: '1994-07-02',
      host_address: '서울시 마포구',
      host_intro: '공연 기획 및 운영을 담당하고 있습니다.',
      manager_name: '박지훈',
      manager_phone: '010-2345-6789',
      manager_email: 'jihun.park@example.com',
    },
    tags: [
      { tag_id: 3, project_id: 2, tag_name: '#인디밴드' },
      { tag_id: 4, project_id: 2, tag_name: '#라이브' },
    ],
    posters: [mockPoster2, mockPoster3],
    likes: 100,
    rewards: [
      {
        reward_id: 3,
        project_id: 2,
        reward_name: '온라인 라이브 관람권',
        description: '온라인 라이브 스트리밍 관람권을 제공합니다.',
        price: 15000,
        total_quantity: 54,
        sold_quantity: 46,
        entry_at: '2025-10-22T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 4,
        project_id: 2,
        reward_name: '현장 스탠딩 티켓',
        description: '콘서트 현장 스탠딩 티켓 1매가 제공됩니다.',
        price: 45000,
        total_quantity: 54,
        sold_quantity: 46,
        entry_at: '2025-10-22T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 5,
        project_id: 2,
        reward_name: 'MD 패키지',
        description: '포스터 + 사인 카드 + 스페셜 굿즈 세트.',
        price: 65000,
        total_quantity: 100,
        sold_quantity: 0,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 3,
    creatorName: 'Band Dawn',
    contents: {
      project_id: 3,
      story_html: `
        <p>원우 생일 카페 'Spring'은 팬들이 함께 만든 따뜻한 공간입니다.</p>
        <img src="${cheeringImage}" alt="카페 이벤트 안내 이미지" />
        <p>방문객을 위한 포토존, 한정 굿즈, 그리고 함께 나누는 메시지 월이 준비되어 있어요.</p>
      `,
      refund_policy: '행사 시작 24시간 전까지 환불 가능합니다.',
      location_detail: '경기도 수원시 팔달구 카페 Spring',
    },
    manager: {
      host_id: 103,
      project_id: 3,
      host_profile_img: null,
      host_phone: '010-3333-4444',
      host_birth: '1998-11-05',
      host_address: '경기도 수원시',
      host_intro: '팬 이벤트 운영을 맡고 있습니다.',
      manager_name: '이서연',
      manager_phone: '010-3456-7890',
      manager_email: 'seoyeon.lee@example.com',
    },
    tags: [
      { tag_id: 5, project_id: 3, tag_name: '#아이돌' },
      { tag_id: 6, project_id: 3, tag_name: '#생일카페' },
    ],
    posters: [mockPoster3],
    likes: 100,
    rewards: [
      {
        reward_id: 6,
        project_id: 3,
        reward_name: '카페 음료 쿠폰',
        description: '카페 방문 시 사용할 수 있는 음료 쿠폰 1매.',
        price: 8000,
        total_quantity: 54,
        sold_quantity: 46,
        entry_at: '2025-10-18T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 7,
        project_id: 3,
        reward_name: '굿즈 패키지',
        description: '포토카드 + 스티커 + 기념 배지가 포함됩니다.',
        price: 25000,
        total_quantity: 100,
        sold_quantity: 0,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 4,
    creatorName: 'Jazz Lane',
    contents: {
      project_id: 4,
      story_html: `
        <p>2025 뉴이어 재즈 페스티벌은 새해를 여는 특별한 무대입니다.</p>
        <img src="${cheeringImage}" alt="재즈 페스티벌" />
        <p>국내 재즈 뮤지션과 함께하는 라이브 공연을 준비했습니다.</p>
      `,
      refund_policy: '행사 3일 전까지 전액 환불 가능합니다.',
      location_detail: '서울시 중구 장충체육관',
    },
    manager: {
      host_id: 104,
      project_id: 4,
      host_profile_img: null,
      host_phone: '010-4444-5555',
      host_birth: '1989-02-14',
      host_address: '서울시 중구',
      host_intro: '공연 운영 총괄을 맡고 있습니다.',
      manager_name: '오지은',
      manager_phone: '010-4567-8901',
      manager_email: 'jieun.oh@example.com',
    },
    tags: [
      { tag_id: 7, project_id: 4, tag_name: '#재즈' },
      { tag_id: 8, project_id: 4, tag_name: '#페스티벌' },
    ],
    likes: 84,
    rewards: [
      {
        reward_id: 8,
        project_id: 4,
        reward_name: '재즈 페스티벌 티켓',
        description: '행사 입장권 1매 제공.',
        price: 35000,
        total_quantity: 200,
        sold_quantity: 68,
        entry_at: '2025-04-01T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 9,
        project_id: 4,
        reward_name: '굿즈 패키지',
        description: '에코백 + 프로그램북 세트.',
        price: 20000,
        total_quantity: 150,
        sold_quantity: 20,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 5,
    creatorName: 'Modern Studio',
    contents: {
      project_id: 5,
      story_html: `
        <p>모던의 첫 팝업 스토어에서 한정 캡슐 컬렉션을 공개합니다.</p>
        <img src="${cheeringImage}" alt="팝업 스토어" />
        <p>현장 체험과 특별한 선물도 준비되어 있어요.</p>
      `,
      refund_policy: '발송 전 취소 시 전액 환불됩니다.',
      location_detail: '전주시 완산구 팝업 공간',
    },
    manager: {
      host_id: 105,
      project_id: 5,
      host_profile_img: null,
      host_phone: '010-5555-6666',
      host_birth: '1993-05-21',
      host_address: '전주시 완산구',
      host_intro: '브랜드 운영과 팝업 진행을 맡고 있습니다.',
      manager_name: '정하은',
      manager_phone: '010-5678-9012',
      manager_email: 'haeun.jung@example.com',
    },
    tags: [
      { tag_id: 9, project_id: 5, tag_name: '#패션' },
      { tag_id: 10, project_id: 5, tag_name: '#팝업' },
    ],
    posters: [mockPoster2],
    likes: 56,
    rewards: [
      {
        reward_id: 10,
        project_id: 5,
        reward_name: '팝업 초대권',
        description: '입장 가능한 초대권 1매.',
        price: 10000,
        total_quantity: 300,
        sold_quantity: 120,
        entry_at: '2025-10-10T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 11,
        project_id: 5,
        reward_name: '캡슐 컬렉션 선구매',
        description: '한정판 아이템 선구매 권한.',
        price: 45000,
        total_quantity: 80,
        sold_quantity: 30,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 6,
    creatorName: 'K-Dance Crew',
    contents: {
      project_id: 6,
      story_html: `
        <p>K-POP 댄스 커버 공연으로 여러분을 찾아갑니다.</p>
        <img src="${cheeringImage}" alt="댄스 커버 공연" />
        <p>무대 연출과 의상 제작을 위해 응원 부탁드려요.</p>
      `,
      refund_policy: '공연 48시간 전까지 환불 가능합니다.',
      location_detail: '부산시 해운대구 공연장',
    },
    manager: {
      host_id: 106,
      project_id: 6,
      host_profile_img: null,
      host_phone: '010-6666-7777',
      host_birth: '1999-09-09',
      host_address: '부산시 해운대구',
      host_intro: '공연 제작과 무대 연출 담당입니다.',
      manager_name: '최준호',
      manager_phone: '010-6789-0123',
      manager_email: 'junho.choi@example.com',
    },
    tags: [
      { tag_id: 11, project_id: 6, tag_name: '#댄스' },
      { tag_id: 12, project_id: 6, tag_name: '#커버' },
    ],
    posters: [mockPoster3, mockPoster1],
    likes: 42,
    rewards: [
      {
        reward_id: 12,
        project_id: 6,
        reward_name: '공연 티켓',
        description: '공연 관람 티켓 1매.',
        price: 25000,
        total_quantity: 180,
        sold_quantity: 45,
        entry_at: '2026-08-15T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 13,
        project_id: 6,
        reward_name: '리허설 참관',
        description: '사전 리허설 참관권.',
        price: 30000,
        total_quantity: 60,
        sold_quantity: 10,
        entry_at: '2026-08-14T00:00:00',
        type: 'TICKET',
      },
    ],
  },
  {
    projectId: 7,
    creatorName: '빛 스튜디오',
    contents: {
      project_id: 7,
      story_html: `
        <p>사진작가 '빛'의 개인전 'Moment'를 준비하고 있습니다.</p>
        <img src="${cheeringImage}" alt="사진전" />
        <p>전시 연출과 인쇄 제작을 위한 후원을 부탁드립니다.</p>
      `,
      refund_policy: '전시 시작 전까지 환불 가능합니다.',
      location_detail: '서울시 종로구 갤러리',
    },
    manager: {
      host_id: 107,
      project_id: 7,
      host_profile_img: null,
      host_phone: '010-7777-8888',
      host_birth: '1988-01-30',
      host_address: '서울시 종로구',
      host_intro: '전시 운영 및 홍보를 담당합니다.',
      manager_name: '홍수진',
      manager_phone: '010-7890-1234',
      manager_email: 'sujin.hong@example.com',
    },
    tags: [
      { tag_id: 13, project_id: 7, tag_name: '#사진전' },
      { tag_id: 14, project_id: 7, tag_name: '#전시' },
    ],
    posters: [mockPoster1],
    likes: 210,
    rewards: [
      {
        reward_id: 14,
        project_id: 7,
        reward_name: '전시 도록',
        description: '전시 도록 1권 제공.',
        price: 18000,
        total_quantity: 120,
        sold_quantity: 95,
        entry_at: null,
        type: 'NONE',
      },
      {
        reward_id: 15,
        project_id: 7,
        reward_name: '프린트 한정판',
        description: '작가 서명 포함 프린트 1장.',
        price: 50000,
        total_quantity: 40,
        sold_quantity: 35,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 8,
    creatorName: '무대 극단',
    contents: {
      project_id: 8,
      story_html: `
        <p>창작극 '시간의 방'을 위한 제작 프로젝트입니다.</p>
        <img src="${cheeringImage}" alt="창작극" />
        <p>무대 디자인과 의상 제작을 준비하고 있어요.</p>
      `,
      refund_policy: '공연 2일 전까지 환불 가능합니다.',
      location_detail: '대전시 중구 소극장',
    },
    manager: {
      host_id: 108,
      project_id: 8,
      host_profile_img: null,
      host_phone: '010-8888-9999',
      host_birth: '1991-12-18',
      host_address: '대전시 중구',
      host_intro: '극단 운영과 제작을 맡고 있습니다.',
      manager_name: '장민호',
      manager_phone: '010-8901-2345',
      manager_email: 'minho.jang@example.com',
    },
    tags: [
      { tag_id: 15, project_id: 8, tag_name: '#연극' },
      { tag_id: 16, project_id: 8, tag_name: '#창작극' },
    ],
    posters: [mockPoster2, mockPoster1],
    likes: 132,
    rewards: [
      {
        reward_id: 16,
        project_id: 8,
        reward_name: '공연 티켓',
        description: '창작극 관람 티켓 1매.',
        price: 22000,
        total_quantity: 150,
        sold_quantity: 110,
        entry_at: '2025-08-15T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 17,
        project_id: 8,
        reward_name: '포스터 세트',
        description: '공연 포스터 2종 세트.',
        price: 12000,
        total_quantity: 90,
        sold_quantity: 40,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 9,
    creatorName: 'Indie Road',
    contents: {
      project_id: 9,
      story_html: `
        <p>전국 소극장 투어 라이브를 준비 중입니다.</p>
        <img src="${cheeringImage}" alt="인디 투어" />
        <p>이동 비용과 무대 연출을 위해 도움을 부탁드려요.</p>
      `,
      refund_policy: '공연 72시간 전까지 환불 가능합니다.',
      location_detail: '경기도 성남시 공연장',
    },
    manager: {
      host_id: 109,
      project_id: 9,
      host_profile_img: null,
      host_phone: '010-9012-3456',
      host_birth: '1992-06-11',
      host_address: '경기도 성남시',
      host_intro: '투어 매니지먼트 담당입니다.',
      manager_name: '류하린',
      manager_phone: '010-9123-4567',
      manager_email: 'harin.ryu@example.com',
    },
    tags: [
      { tag_id: 17, project_id: 9, tag_name: '#투어' },
      { tag_id: 18, project_id: 9, tag_name: '#인디' },
    ],
    posters: [mockPoster3, mockPoster2],
    likes: 64,
    rewards: [
      {
        reward_id: 18,
        project_id: 9,
        reward_name: '투어 티켓',
        description: '투어 공연 티켓 1매.',
        price: 27000,
        total_quantity: 220,
        sold_quantity: 70,
        entry_at: '2025-11-01T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 19,
        project_id: 9,
        reward_name: '라이브 앨범',
        description: '라이브 녹음 디지털 앨범 제공.',
        price: 12000,
        total_quantity: null,
        sold_quantity: 0,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 10,
    creatorName: 'Young Art Lab',
    contents: {
      project_id: 10,
      story_html: `
        <p>젊은 작가들의 현대미술 팝업 전시를 준비합니다.</p>
        <img src="${cheeringImage}" alt="현대미술 전시" />
        <p>전시 공간 연출과 작품 설치를 지원해주세요.</p>
      `,
      refund_policy: '전시 전날까지 환불 가능합니다.',
      location_detail: '서울시 성북구 전시장',
    },
    manager: {
      host_id: 110,
      project_id: 10,
      host_profile_img: null,
      host_phone: '010-1010-2020',
      host_birth: '1995-04-03',
      host_address: '서울시 성북구',
      host_intro: '전시 큐레이션과 운영을 담당합니다.',
      manager_name: '서유진',
      manager_phone: '010-2233-4455',
      manager_email: 'yujin.seo@example.com',
    },
    tags: [
      { tag_id: 19, project_id: 10, tag_name: '#현대미술' },
      { tag_id: 20, project_id: 10, tag_name: '#팝업전시' },
    ],
    posters: [mockPoster1, mockPoster3],
    likes: 73,
    rewards: [
      {
        reward_id: 20,
        project_id: 10,
        reward_name: '전시 관람권',
        description: '전시 관람권 1매 제공.',
        price: 18000,
        total_quantity: 250,
        sold_quantity: 40,
        entry_at: '2025-05-20T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 21,
        project_id: 10,
        reward_name: '작가 인터뷰집',
        description: '참여 작가 인터뷰집 1권.',
        price: 15000,
        total_quantity: 120,
        sold_quantity: 15,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 11,
    creatorName: 'Runway Team',
    contents: {
      project_id: 11,
      story_html: `
        <p>신진 디자이너 쇼케이스 런웨이를 준비합니다.</p>
        <img src="${cheeringImage}" alt="런웨이" />
        <p>무대 제작과 모델 캐스팅 비용을 지원해주세요.</p>
      `,
      refund_policy: '행사 5일 전까지 환불 가능합니다.',
      location_detail: '광주시 동구 쇼룸',
    },
    manager: {
      host_id: 111,
      project_id: 11,
      host_profile_img: null,
      host_phone: '010-2323-3434',
      host_birth: '1990-08-27',
      host_address: '광주시 동구',
      host_intro: '쇼케이스 운영 담당입니다.',
      manager_name: '문하린',
      manager_phone: '010-3344-5566',
      manager_email: 'harin.moon@example.com',
    },
    tags: [
      { tag_id: 21, project_id: 11, tag_name: '#런웨이' },
      { tag_id: 22, project_id: 11, tag_name: '#쇼케이스' },
    ],
    posters: [mockPoster2],
    likes: 68,
    rewards: [
      {
        reward_id: 22,
        project_id: 11,
        reward_name: '쇼케이스 관람권',
        description: '런웨이 관람권 1매.',
        price: 30000,
        total_quantity: 140,
        sold_quantity: 50,
        entry_at: '2025-12-10T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 23,
        project_id: 11,
        reward_name: '룩북',
        description: '룩북 1권 제공.',
        price: 20000,
        total_quantity: 90,
        sold_quantity: 10,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 12,
    creatorName: 'Craft Lab',
    contents: {
      project_id: 12,
      story_html: `
        <p>전통공예 체험 클래스를 진행합니다.</p>
        <img src="${cheeringImage}" alt="전통공예" />
        <p>작업 도구와 재료 준비를 위한 후원 부탁드립니다.</p>
      `,
      refund_policy: '클래스 3일 전까지 환불 가능합니다.',
      location_detail: '부산시 동구 공방',
    },
    manager: {
      host_id: 112,
      project_id: 12,
      host_profile_img: null,
      host_phone: '010-4545-5656',
      host_birth: '1987-10-06',
      host_address: '부산시 동구',
      host_intro: '클래스 운영을 맡고 있습니다.',
      manager_name: '강유나',
      manager_phone: '010-4455-6677',
      manager_email: 'yuna.kang@example.com',
    },
    tags: [
      { tag_id: 23, project_id: 12, tag_name: '#공예' },
      { tag_id: 24, project_id: 12, tag_name: '#체험클래스' },
    ],
    posters: [mockPoster3],
    likes: 95,
    rewards: [
      {
        reward_id: 24,
        project_id: 12,
        reward_name: '클래스 참가권',
        description: '공예 클래스 참가권 1매.',
        price: 28000,
        total_quantity: 100,
        sold_quantity: 60,
        entry_at: '2025-06-01T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 25,
        project_id: 12,
        reward_name: '완성품 키트',
        description: '집에서 만들 수 있는 키트 제공.',
        price: 18000,
        total_quantity: 150,
        sold_quantity: 40,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
];
