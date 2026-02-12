import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';

export default function BillingSuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status') ?? 'loading';

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
          <CheckIcon className="w-10 h-10 text-solidBlue" />
        </div>
        {status === 'loading' && (
          <p className="text-base text-black80">결제 인증을 확인 중입니다.</p>
        )}
        {status === 'success' && (
          <>
            <p className="text-4xl font-boldFont text-mainBlack mb-2">
              후원 성공!
            </p>
            <p className="text-xl text-black40 font-mediumFont">
              마이페이지에서 티켓을 확인하세요
            </p>
          </>
        )}
      </div>
    </div>
  );
}
