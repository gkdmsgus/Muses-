interface LoginSignupButtonProps {
  onClick?: () => void;
}

const LoginSignupButton = ({ onClick }: LoginSignupButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-col items-center justify-center py-2.5 px-5 rounded-full bg-mainBlack cursor-pointer hover:scale-105"
    >
      <span className="text-center text-sm font-boldFont text-white">
        로그인/회원가입
      </span>
    </button>
  );
};

export default LoginSignupButton;
