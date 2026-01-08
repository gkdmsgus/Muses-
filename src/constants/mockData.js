export const PROJECTS = [
  {
    id: 1,
    title: "2024 Neon City Jazz Festival",
    organizer: "Blue Note Seoul",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800",
    percentage: 124,
    daysLeft: 3,
    category: "콘서트",
    location: "성수 에스팩토리",
    isHot: true
  },
  {
    id: 2,
    title: "인디 밴드 '새벽' 3집 발매 기념 단독 공연",
    organizer: "Band Dawn",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    percentage: 85,
    daysLeft: 12,
    category: "콘서트",
    location: "홍대 롤링홀",
    isHot: false
  },
  {
    id: 3,
    title: "몰입형 연극 : 보이지 않는 도시",
    organizer: "극단 시선",
    // 연극 무대 느낌의 이미지로 교체했습니다.
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800",
    percentage: 42,
    daysLeft: 20,
    category: "연극/뮤지컬",
    location: "대학로 예술극장",
    isHot: false
  },
  {
    id: 4,
    title: "Underground DJ Party: SEOUL VIBE",
    organizer: "DJ Crew Vibe",
    // 언더그라운드 클럽 분위기의 살아있는 이미지로 교체
    image: "data:image/jpeg;base64,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",
    percentage: 210,
    daysLeft: 1,
    category: "파티",
    location: "이태원 케이크샵",
    isHot: true
  },
  {
    id: 5,
    title: "김수현 첼로 독주회: 바흐에서 현대까지",
    organizer: "Seoul Philharmonic",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=800",
    percentage: 67,
    daysLeft: 8,
    category: "클래식",
    location: "예술의전당 콘서트홀",
    isHot: false
  },
  {
    id: 6,
    title: "뮤지컬 '해밀턴' 한국 초연",
    organizer: "Broadway Korea",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    percentage: 156,
    daysLeft: 5,
    category: "연극/뮤지컬",
    location: "샤롯데씨어터",
    isHot: true
  },
  {
    id: 7,
    title: "BTS 진 팬미팅: Welcome Home",
    organizer: "HYBE Entertainment",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800",
    percentage: 320,
    daysLeft: 2,
    category: "팬미팅",
    location: "올림픽공원 KSPO돔",
    isHot: true
  },
  {
    id: 8,
    title: "현대미술 전시: 디지털 드림스",
    organizer: "MMCA",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=800",
    percentage: 78,
    daysLeft: 15,
    category: "전시",
    location: "국립현대미술관 서울관",
    isHot: false
  },
  {
    id: 9,
    title: "어쿠스틱 카페 라이브: 봄날의 노래",
    organizer: "Cafe Muse",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=800",
    percentage: 92,
    daysLeft: 6,
    category: "콘서트",
    location: "연남동 뮤즈카페",
    isHot: false
  },
  {
    id: 10,
    title: "일렉트로닉 뮤직 페스티벌 2024",
    organizer: "EDM Korea",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    percentage: 145,
    daysLeft: 4,
    category: "콘서트",
    location: "올림픽공원 88잔디마당",
    isHot: true
  }
];

export const CATEGORIES = ["전체", "콘서트", "연극/뮤지컬", "전시", "팬미팅", "클래식"];