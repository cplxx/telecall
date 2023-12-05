import { Link } from "lucide-react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-lg">
      <a href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          width="0"
          height="0"
          alt=""
          className="w-14"
          sizes="100vw"
          objectFit="cover"
        />

        <p className="text-primary-text">CPaaS Telecall</p>
      </a>
    </div>
  );
};

export default Logo;
