import TrendingCard, { type Project } from './TrendingCard';

interface TrendingListProps {
  index: number;
}

const STEP = 1243;

const TREND_PROJECTS: Project[] = [
  {
    id: 1,
    location: '서울',
    status: '진행중',
    tags: ['#졸업전시', '#미디어아트'],
    title: "A대 시각디자인 졸전 'Trace'",
    progress: 120,
    deadline: 'D-5',
    backgroundColor: 'bg-lime-100',
  },
  {
    id: 2,
    location: '서울',
    status: '진행중',
    tags: ['#인디밴드', '#라이브'],
    title: "인디밴드 '새벽' 단독 공연",
    progress: 85,
    deadline: 'D-12',
    backgroundColor: 'bg-purple-100',
  },
  {
    id: 3,
    location: '경기',
    status: '진행중',
    tags: ['#생일카페', '#아이돌'],
    title: "원우 생일 카페 'Spring'",
    progress: 210,
    deadline: 'D-3',
    backgroundColor: 'bg-blue-100',
  },
  {
    id: 4,
    location: '서울',
    status: '오픈예정',
    tags: ['#재즈', '#페스티벌'],
    title: '2025 뉴이어 재즈 페스티벌',
    backgroundColor: 'bg-cyan-100',
    hasNotification: true,
    openDate: '2025.11.01',
  },
  {
    id: 5,
    location: '전라',
    status: '진행중',
    tags: ['#팝업스토어', '#패션'],
    title: "패션 브랜드 '모던' 팝업 스토어",
    progress: 65,
    deadline: 'D-12',
    backgroundColor: 'bg-pink-100',
  },
  {
    id: 6,
    location: '경상',
    status: '오픈예정',
    tags: ['#댄스커버', '#K-POP'],
    title: "댄스팀 '리듬' 커버 공연",
    backgroundColor: 'bg-yellow-100',
    hasNotification: true,
    openDate: '2025.12.15',
  },
  {
    id: 7,
    location: '서울',
    status: '종료',
    tags: ['#사진전', '#포트레이트'],
    title: "사진작가 '빛' 개인전 'Moment'",
    backgroundColor: 'bg-indigo-100',
    progress: 150,
  },
  {
    id: 8,
    location: '충청',
    status: '종료',
    tags: ['#연극', '#창작극'],
    title: "연극단 '무대' 창작극 '시간의 방'",
    backgroundColor: 'bg-emerald-100',
    progress: 120,
  },
];

export default function TrendingList({ index }: TrendingListProps) {
  return (
    <div className="relative w-[1232px] overflow-hidden">
      <div
        className="flex px-1 transition-transform duration-500 ease-out gap-[30.49px]"
        style={{
          transform: `translateX(-${index * STEP}px)`,
        }}
      >
        {TREND_PROJECTS.map((project) => (
          <TrendingCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
