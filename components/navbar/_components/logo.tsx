import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src="/logos/main-logo.svg" alt="Logo" width={150} height={150} className="w-24" />
      </Link>
    </>
  );
};

export default Logo;
