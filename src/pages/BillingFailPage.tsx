import { X } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function BillingFailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const errorMessage = searchParams.get('message');
  const errorCode = searchParams.get('code');

  console.log(errorMessage, errorCode);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 font-mainFont">
      <button
        type="button"
        aria-label="프로젝트 목록으로 이동"
        className="absolute inset-0 bg-black/40 backdrop-blur-xs"
        onClick={() => navigate('/projects')}
      />
      <div className="relative w-full max-w-[620px] h-full max-h-[400px] rounded-[48px] bg-white p-10 text-center flex flex-col items-center justify-center">
        <div className="flex items-center justify-center rounded-full bg-pastelBlue w-20 h-20 mb-10">
          <X className="w-10 h-10 text-solidBlue" />
        </div>
        <p className="text-4xl font-boldFont text-mainBlack mb-2">후원 실패</p>
        <p className="text-xl text-black40 font-mediumFont mb-2">
          결제 오류로 후원을 실패했어요
        </p>
      </div>
    </div>
  );
}
