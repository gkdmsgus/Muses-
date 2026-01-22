import cheeringImage from '../assets/images/cheering.png';

export interface ProjectDetailData {
  projectId: number;
  contentHtml: string;
  creator: string;
  rewards: ProjectReward[];
  likes: number;
}

export interface ProjectReward {
  id: number;
  title: string;
  description: string;
  price: number;
  numberOfAvailable: number;
  numberOfFunded: number | 0;
}

export const MOCK_PROJECT_DETAILS: ProjectDetailData[] = [
  {
    projectId: 1,
    contentHtml: `
      <p>A대 시각디자인 졸업전시 “Trace”는 기록과 기억의 형태를 시각적으로 탐구하는 전시입니다.</p>
      <p>학생들의 다양한 시선이 모여 도시의 흔적, 개인의 일상, 그리고 시간의 결을 디자인으로 풀어냈습니다.</p>
      <img src="${cheeringImage}" alt="전시 준비 현장" />
      <p>여러분의 펀딩은 전시 공간 조성, 작품 설치, 전시 운영에 사용됩니다. 함께 전시의 마지막 퍼즐이 되어주세요.</p>
    `,
    creator: 'Band Dawn',
    likes: 100,
    rewards: [
      {
        id: 1,
        title: '감사 메시지',
        description:
          '프로젝트 종료 후 감사 메시지와 결과 리포트를 보내드립니다.',
        price: 5000,
        numberOfAvailable: 100,
        numberOfFunded: 0,
      },
      {
        id: 2,
        title: '전시 초대권',
        description: '전시 오픈 당일 입장 가능한 초대권 1매가 제공됩니다.',
        price: 20000,
        numberOfAvailable: 54,
        numberOfFunded: 46,
      },
    ],
  },
  {
    projectId: 2,
    contentHtml: `
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
    creator: 'Band Dawn',
    likes: 100,
    rewards: [
      {
        id: 1,
        title: '온라인 라이브 관람권',
        description: '온라인 라이브 스트리밍 관람권을 제공합니다.',
        price: 15000,
        numberOfAvailable: 54,
        numberOfFunded: 46,
      },
      {
        id: 2,
        title: '현장 스탠딩 티켓',
        description: '콘서트 현장 스탠딩 티켓 1매가 제공됩니다.',
        price: 45000,
        numberOfAvailable: 54,
        numberOfFunded: 46,
      },
      {
        id: 3,
        title: 'MD 패키지',
        description: '포스터 + 사인 카드 + 스페셜 굿즈 세트.',
        price: 65000,
        numberOfAvailable: 100,
        numberOfFunded: 0,
      },
    ],
  },
  {
    projectId: 3,
    contentHtml: `
      <p>원우 생일 카페 'Spring'은 팬들이 함께 만든 따뜻한 공간입니다.</p>
      <img src="${cheeringImage}" alt="카페 이벤트 안내 이미지" />
      <p>방문객을 위한 포토존, 한정 굿즈, 그리고 함께 나누는 메시지 월이 준비되어 있어요.</p>
    `,
    creator: 'Band Dawn',
    likes: 100,
    rewards: [
      {
        id: 1,
        title: '카페 음료 쿠폰',
        description: '카페 방문 시 사용할 수 있는 음료 쿠폰 1매.',
        price: 8000,
        numberOfAvailable: 54,
        numberOfFunded: 46,
      },
      {
        id: 2,
        title: '굿즈 패키지',
        description: '포토카드 + 스티커 + 기념 배지가 포함됩니다.',
        price: 25000,
        numberOfAvailable: 100,
        numberOfFunded: 0,
      },
    ],
  },
];
