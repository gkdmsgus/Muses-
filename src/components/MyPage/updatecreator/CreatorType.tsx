import { useState } from 'react';
import ModalLayout from './ModalLayout';
import { TypeSelector } from './TypeSelector';
import CreatorDocumentForm from './CreatorDocumentForm';
import { type CreatorType as CreatorKind } from '../types/creatorDocumentConfig';
import { X } from 'lucide-react';

interface CreatorTypeProps {
  onClose: () => void;
}

const CreatorType = ({ onClose }: CreatorTypeProps) => {
  const [type, setType] = useState<CreatorKind | null>(null);

  return (
    <ModalLayout onClose={onClose}>
      {/* 헤더 */}
      <div className="self-stretch pb-4 border-b border-white80 flex justify-between items-center">
        <div className="text-mainBlack text-xl font-boldFont">
          크리에이터 전환 신청
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-white80 rounded-full hover:bg-white60"
        >
          <X size={20} />
        </button>
      </div>

      {/* 본문 */}
      {type === null ? (
        <TypeSelector onSelect={setType} />
      ) : (
        <CreatorDocumentForm
          type={type}
          onBack={() => setType(null)}
        />
      )}
    </ModalLayout>
  );
};

export default CreatorType;
