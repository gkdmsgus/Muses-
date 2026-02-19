export type CreatorType = 'person' | 'solo' | 'corporate';
export type CreatorDocType =
  | 'ID_CARD'
  | 'BANKBOOK'
  | 'BRC'
  | 'COMP_REGISTRY'
  | 'COMP_SEAL';

// 프론트 타입 → API 타입 매핑
export const creatorTypeToApi: Record<CreatorType, 'INDIVIDUAL' | 'BUSINESS' | 'CORPORATION'> = {
  person: 'INDIVIDUAL',
  solo: 'BUSINESS',
  corporate: 'CORPORATION',
};

interface DocumentConfig {
  title: string;
  files: {
    content: string;
    condition: string;
    docType: CreatorDocType;
  }[];
}

export const personConfig: DocumentConfig = {
  title: '개인 서류 제출',
  files: [
    { content: '신분증 사본', condition: '주민등록증, 운전면허증 등', docType: 'ID_CARD' },
    { content: '통장 사본', condition: '본인 명의 계좌', docType: 'BANKBOOK' },
  ],
};

export const soloConfig: DocumentConfig = {
  title: '개인사업자 서류 제출',
  files: [
    { content: '사업자등록증 사본', condition: '최근 3개월 이내', docType: 'BRC' },
    { content: '대표자 신분증', condition: '사업자등록증 대표자와 일치', docType: 'ID_CARD' },
    { content: '통장 사본', condition: '사업자 명의', docType: 'BANKBOOK' },
  ],
};

export const corporateConfig: DocumentConfig = {
  title: '법인사업자 서류 제출',
  files: [
    { content: '사업자등록증 사본', condition: '법인 사업자', docType: 'BRC' },
    { content: '법인 등기부등본', condition: '최근 3개월 이내', docType: 'COMP_REGISTRY' },
    { content: '법인 인감증명서', condition: '최근 3개월 이내', docType: 'COMP_SEAL' },
    { content: '통장 사본', condition: '법인 명의', docType: 'BANKBOOK' },
  ],
};

export const creatorDocumentConfig: Record<CreatorType, DocumentConfig> = {
  person: personConfig,
  solo: soloConfig,
  corporate: corporateConfig,
};
export interface CreatorApplication {
  applicationId: number;
  creatorType: 'INDIVIDUAL' | 'BUSINESS' | 'CORPORATION';
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submitted: boolean;
  required: string[]; // 필요한 서류 ID_CARD, BANKBOOK...
  uploaded: string[]; // 업로드된 서류
  missing: string[];  // 누락된 서류
}
export interface UploadDocResponse {
  docId: number;
  docType: string; // ID_CARD, BANKBOOK 등
  attachmentId: number;
  fileUrl: string;
  originalFilename: string;
  extension: string;
}
