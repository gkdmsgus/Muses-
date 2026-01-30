const footerLinks = ['서비스 소개', '이용약관', '개인정보처리방침', '고객센터'];

const Footer = () => {
  return (
    <footer className="w-full h-[209px] border-t border-white80 bg-white py-16 px-[72.5px]">
      <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center gap-10 px-6">
        <div className="flex justify-center items-start gap-10">
          {footerLinks.map((text) => (
            <span
              key={text}
              className="text-center text-sm font-mediumFont text-black60 cursor-pointer hover:text-black"
            >
              {text}
            </span>
          ))}
        </div>

        <div className="text-center text-sm font-mainFont text-black40">
          © 2025 Muses Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
