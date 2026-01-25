export interface EventData {
  event_id: number;
  category: 'COLLAB' | 'NOTICE' | 'MUSES';
  title: string;
  desscription: string; // db에 오타(ss)가 있음 일단 그대로 사용
  content: string;
  start_date: string | null;
  end_date: string | null;
  posted_at: string | null;
  created_at: string;
  updated_at: string;
}
