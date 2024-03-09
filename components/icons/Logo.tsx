import Image from 'next/image';
const Logo = ({ ...props }) => (
  <div {...props}>
    <Image
      src="/logo-white.svg"
      alt="StudyFliss Logo"
      width={32}
      height={32}
      className={'invert dark:invert-0 transition-all duration-300 ease-in-out-sine w-full h-full'}
    />
  </div>
);

export default Logo;
