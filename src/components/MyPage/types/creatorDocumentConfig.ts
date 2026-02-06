export type CreatorType = 'person' | 'solo' | 'corporate';

interface DocumentConfig {
  title: string;
  files: {
    content: string;
    condition: string;
  }[];
}
export const personConfig: DocumentConfig = {
  title: '개인 서류 제출',
  files: [
    {
      content: '신분증 사본',
      condition: '주민등록증, 운전면허증 등',
    },
    {
      content: '통장 사본',
      condition: '본인 명의 계좌',
    },
  ],
};
export const soloConfig: DocumentConfig = {
  title: '개인사업자 서류 제출',
  files: [
    {
      content: '사업자등록증 사본',
      condition: '최근 3개월 이내',
    },
    {
      content: '대표자 신분증',
      condition: '사업자등록증 대표자와 일치',
    },
    {
      content: '통장 사본',
      condition: '사업자 명의',
    },
  ],
};
export const corporateConfig: DocumentConfig = {
  title: '법인사업자 서류 제출',
  files: [
    {
      content: '사업자등록증 사본',
      condition: '법인 사업자',
    },
    {
      content: '법인 등기부등본',
      condition: '최근 3개월 이내',
    },
    {
      content: '법인 인감증명서',
      condition: '최근 3개월 이내',
    },
    {
      content: '통장 사본',
      condition: '법인 명의',
    },
  ],
};

export const creatorDocumentConfig: Record<CreatorType, DocumentConfig> = {
  person: personConfig,
  solo: soloConfig,
  corporate: corporateConfig,
};
