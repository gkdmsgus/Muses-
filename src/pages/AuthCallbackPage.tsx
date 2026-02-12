import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function AuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');

  const isProcessed = useRef(false);

  useEffect(() => {
    const handleSocialLogin = async () => {
      if (!code || isProcessed.current) return;
      isProcessed.current = true;

      try {
        const response = await axios.post(
          'https://mymuses.site/api/auth/login/social',
          {
            code: code,
          }
        );

        if (response.data.success) {
          const { accessToken, refreshToken, role } = response.data.data;

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          // GUEST: 신규 유저 -> 온보딩 페이지로
          // USER: 기존 유저 -> 메인 페이지로
          if (role === 'GUEST') {
            navigate('/onboarding');
          } else {
            navigate('/');
          }
        }
      } catch (error) {
        console.error('소셜 로그인 처리 중 오류 발생:', error);
        alert('로그인에 실패했습니다. 다시 로그인해주세요.');
        navigate('/login');
      }
    };

    handleSocialLogin();
  }, [code, navigate]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white font-['Pretendard']">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 border-4 border-[#8B5CF6] border-t-transparent rounded-full animate-spin"></div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-[20px] font-semibold text-[#111111]">
            소셜 로그인 중
          </p>
          <p className="text-[14px] text-[#6B7280]">잠시만 기다려주세요...</p>
        </div>
      </div>
    </div>
  );
}
