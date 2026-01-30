import { LoginFormCard } from '../components/LoginPage/LoginFormCard';

export function LoginPage() {
  return (
    <div
      className="w-full min-h-screen flex justify-center bg-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/src/assets/images/backgrounds/login_bg.png")',
      }}
    >
      <div className=" w-full flex justify-center">
        <LoginFormCard />
      </div>
    </div>
  );
}
