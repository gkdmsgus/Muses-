import React from 'react';

interface LoginFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <div className="absolute w-[382px] h-[236px] top-[137px] left-[33px] flex flex-col gap-4 opacity-100">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-black80 ml-1">
          이메일
        </label>
        <div className="relative">
          <img
            src="/images/icons/mail.png"
            alt="mail"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40"
          />
          <input
            type="email"
            placeholder="example@muses.com"
            className="w-full h-12 pl-12 pr-4 border border-white60 rounded-xl focus:outline-none focus:border-solidPurple transition-all placeholder:text-black40"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-black80 ml-1">
          비밀번호
        </label>
        <div className="relative">
          <img
            src="/images/icons/lock.png"
            alt="lock"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40"
          />
          <input
            type="password"
            placeholder="........"
            className="w-full h-12 pl-12 pr-4 border border-white60 rounded-xl focus:outline-none focus:border-solidPurple transition-all placeholder:text-black40"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
      </div>

      <button className="w-full h-12 bg-mainBlack text-mainWhite rounded-full font-semibold mt-auto hover:opacity-90 transition-opacity">
        로그인
      </button>
    </div>
  );
};

export default LoginForm;
