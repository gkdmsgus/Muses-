import type { Project } from '../types/projectType';

export const projectItems: Project[] = [
  {
    id: 1,
    thumbnail: '새',
    status: 'ONGOING',
    title: '새벽 2집 앨범 발매 기념 공연',
    progressPercent: 86,
    amount: '2,840,000원',
    dday: 'D-3',
  },
  {
    id: 2,
    thumbnail: '새',

    status: 'DONE',
    title: '새벽 2집 앨범 발매 기념 공연',
    progressPercent: 142,
    amount: '2,840,000원',
  },
  {
    id: 3,
    thumbnail: '새',
    status: 'FAILED',
    title: '새벽 2집 앨범 발매 기념 공연',
    progressPercent: 142,
    amount: '2,840,000원',
    dday: 'D+7',
  },
];
