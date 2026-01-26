import { useState } from 'react';
import ModalLayout from './ModalLayout';
import { TypeSelector } from './TypeSelector';
import { PersonType } from './PersonType';
import { SoloProprietorType } from './SoloProprietorType';
import { CorporProprietorType } from './CorporProprietorType';
import { X } from 'lucide-react';

type Creator = 'person' | 'solo' | 'corporate';

interface CreatorTypeProps {
  onClose: () => void;
}

const CreatorType = ({ onClose }: CreatorTypeProps) => {
  const [type, setType] = useState<Creator | null>(null);

  return (
    <ModalLayout onClose={onClose}>
      {/* 헤더 */}
      <div className="self-stretch pb-4 border-b border-white80 inline-flex justify-between items-center">
        <div className="text-mainBlack text-xl font-boldFont leading-7">
          크리에이터 전환 신청
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-white80 rounded-full hover:bg-white60"
        >
          <X size={20} />
        </button>
      </div>



      {/* 여기부터 교체 영역 */}
      {type === null && <TypeSelector onSelect={setType} />}
      {type === 'person' && <PersonType onBack={() => setType(null)} />}
      {type === 'solo' && <SoloProprietorType onBack={() => setType(null)} />}
      {type === 'corporate' && (
        <CorporProprietorType onBack={() => setType(null)} />
      )}
    </ModalLayout>
  );
};

export default CreatorType;
