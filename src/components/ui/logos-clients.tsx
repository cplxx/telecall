import { Logo } from "@/data/logo-clients";
import Image from "next/image";

const LogosClients = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      {Logo.map((item) => {
        return (
          <div key={item.imageUrl}>
            <Image
              src={item.imageUrl}
              alt=""
              width={80}
              height={10}
              objectFit="cover"
              sizes="100vw"
              className=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default LogosClients;
