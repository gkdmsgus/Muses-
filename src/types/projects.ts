export interface Project {
  id: number;
  location: string;
  status: '진행중' | '오픈예정' | '종료';
  tags: string[];
  title: string;
  progress: number | 0;
  deadline: string;
  posterImage: string | null;
  hasNotification?: boolean;
  openDate: string;
  subtitle?: string;
  supporters: number | 0;
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    location: '서울',
    status: '진행중',
    tags: ['#졸업전시', '#미디어아트'],
    title: "A대 시각디자인 졸전 'Trace'",
    progress: 120,
    deadline: '2026.03.25T00:00:00',
    supporters: 335,
    openDate: '2025.10.20T00:00:00',
    posterImage: null,
  },
  {
    id: 2,
    location: '서울',
    status: '진행중',
    tags: ['#인디밴드', '#라이브', '#공연', '#홍대'],
    title: "밴드 '새벽' 단독 콘서트 : 밤을 걷는 시간",
    subtitle: '홍대 웨스트브릿지에서 펼쳐지는 가장 감성적인 밤',
    progress: 116,
    deadline: '2026.03.31T00:00:00',
    supporters: 142,
    openDate: '2025.10.22T00:00:00',
    posterImage: null,
  },
  {
    id: 3,
    location: '경기',
    status: '진행중',
    tags: ['#생일카페', '#아이돌'],
    title: "원우 생일 카페 'Spring'",
    progress: 80,
    deadline: '2026.04.17T23:00:00',
    supporters: 123,
    openDate: '2025.10.18T00:00:00',
    posterImage: null,
  },
  {
    id: 4,
    location: '서울',
    status: '오픈예정',
    tags: ['#재즈', '#페스티벌'],
    title: '2025 뉴이어 재즈 페스티벌',
    posterImage: null,
    hasNotification: true,
    progress: 0,
    deadline: '2025.06.01T00:00:00',
    supporters: 0,
    openDate: '2025.04.01T00:00:00',
  },
  {
    id: 5,
    location: '전라',
    status: '진행중',
    tags: ['#팝업스토어', '#패션'],
    title: "패션 브랜드 '모던' 팝업 스토어",
    progress: 65,
    deadline: '2026.05.22T00:00:00',
    supporters: 77,
    openDate: '2025.10.10T00:00:00',
    posterImage: null,
  },
  {
    id: 6,
    location: '경상',
    status: '오픈예정',
    tags: ['#댄스커버', '#K-POP'],
    title: 'WONYOUNG & YUJIN CAFE KITSCH GIRLS CLUB KITSCH GIRLS CLUB',
    posterImage: null,
    hasNotification: true,
    progress: 0,
    deadline: '2026.12.15T00:00:00',
    supporters: 0,
    openDate: '2026.08.15T00:00:00',
  },
  {
    id: 7,
    location: '서울',
    status: '종료',
    tags: ['#사진전', '#포트레이트'],
    title: "사진작가 '빛' 개인전 'Moment'",
    posterImage: null,
    progress: 150,
    deadline: '2025.09.10T00:00:00',
    supporters: 512,
    openDate: '2025.09.01T00:00:00',
  },
  {
    id: 8,
    location: '충청',
    status: '종료',
    tags: ['#연극', '#창작극'],
    title: "연극단 '무대' 창작극 '시간의 방'",
    posterImage: null,
    progress: 120,
    deadline: '2025.08.25T00:00:00',
    supporters: 124,
    openDate: '2025.08.15T00:00:00',
  },
];
