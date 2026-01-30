import { Link, useNavigate } from 'react-router-dom';
import museslogo from '../../assets/images/icons/logo.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full px-6 py-4 border-b border-white/40 bg-white/70 backdrop-blur-[6px] items-center justify-between">
      {/* 왼쪽 영역 */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={museslogo} alt="Muses Logo" className="size-8" />
          <Link to="/" className="text-xl font-logoFont">
            muses
          </Link>
        </div>
        <div className="flex h-6 items-center gap-1">
          <Link
            to="/projects"
            className="text-center text-sm font-mediumFont text-black80 px-3 hover:text-black"
          >
            프로젝트
          </Link>

          <span className="w-[1px] h-[12px] bg-[#D1D5DB]" />

          <Link
            to="/events"
            className="text-center text-sm font-mediumFont text-black80 px-3 hover:text-black"
          >
            이벤트
          </Link>
        </div>
      </div>

      {/* 오른쪽 버튼 */}
      <button
        onClick={() => navigate('/login')}
        className="flex items-center justify-center
          px-5 py-2.5 rounded-full bg-mainBlack
          text-sm font-boldFont text-white
          transition-transform hover:scale-105"
      >
        로그인/회원가입
      </button>
    </nav>
  );
};

export default Header;
