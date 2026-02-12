import { Link, useNavigate } from 'react-router-dom';
import alarm from '../../assets/images/icons/alarm.png';
import profilePlaceholder from '../../assets/images/icons/profile_placeholder.png';
import museslogo from '../../assets/images/icons/logo.png';
import { useEffect, useState, useRef } from 'react';
import { logoutAPI } from '../../api/auth';

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 로그인 상태 확인
  useEffect(() => {
    setIsLogin(!!localStorage.getItem('accessToken'));
  }, []);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logoutAPI(); // 서버 로그아웃
    } catch (error) {
      console.error(error);
    } finally {
      localStorage.removeItem('accessToken');
      setIsLogin(false);
      navigate('/', { replace: true });
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full px-6 py-4 border-b border-white/40 bg-white/70 backdrop-blur-[6px] items-center justify-between">
      {/* 왼쪽 영역 */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-xl font-logoFont flex items-center gap-2">
          <img src={museslogo} alt="Muses Logo" className="size-8" />
          <p>muses</p>
        </Link>

        <div className="flex h-6 items-center gap-1">
          <Link
            to="/projects"
            className="text-sm font-mediumFont text-black80 px-3 hover:text-black"
          >
            프로젝트
          </Link>

          <span className="w-px h-[12px] bg-[#D1D5DB]" />

          <Link
            to="/events"
            className="text-sm font-mediumFont text-black80 px-3 hover:text-black"
          >
            이벤트
          </Link>
        </div>
      </div>

      {/* 오른쪽 영역 */}
      {isLogin ? (
        <div
          className="flex justify-center items-center gap-5 relative"
          ref={menuRef}
        >
          {/* 알림 */}
          <button className="relative cursor-pointer">
            <img src={alarm} alt="Alarm" />
          </button>

          {/* 프로필 */}
          <div className="relative">
            <img
              src={profilePlaceholder}
              alt="profile"
              className="w-10 h-10 border rounded-full object-cover cursor-pointer"
              onClick={() => setOpenMenu((prev) => !prev)}
            />

            {openMenu && (
              <div className="absolute right-0 mt-3 w-36 bg-white rounded-xl shadow-lg border border-white80 py-2">
                <button
                  onClick={() => navigate('/mypage')}
                  className="w-full text-left px-4 py-2 text-md font-mediumFont text-mainBlack hover:bg-white80"
                >
                  마이페이지
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-md font-mediumFont text-[#F87171] hover:bg-white80"
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate('/login')}
          className="flex items-center justify-center
            px-5 py-2.5 rounded-full bg-mainBlack
            text-sm font-boldFont text-white
            transition-transform hover:scale-105"
        >
          로그인/회원가입
        </button>
      )}
    </nav>
  );
};

export default Header;
