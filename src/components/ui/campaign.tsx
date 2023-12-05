import Image from "next/image";
import { Badge } from "./badge";
import { CheckCheckIcon } from "lucide-react";
import { Campaignn } from "@/data/campaing";

const Campaign = () => {
  return (
    <div className="mt-14 flex flex-col md:items-center md:justify-center md:flex-row gap-5 2xl:justify-between ">
      <Image
        src="/notebook.png"
        width="0"
        height="0"
        alt=""
        className="w-96"
        sizes="100vw"
        objectFit="cover"
      />
      <h1 className="text-primary-text text-lg">
        Fornecemos muitos recursos que você pode usar
        <p className="dark:text-white text-black mt-3 text-sm">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul>
          {Campaignn.map((item) => {
            return (
              <li className="mt-4 flex items-center gap-2" key={item.title}>
                <Badge
                  variant="outline"
                  className="bg-primary-text rounded-3xl w-10"
                >
                  <CheckCheckIcon color="white" />
                </Badge>
                <p className="dark:text-white text-black text-sm">
                  {item.title}
                </p>
              </li>
            );
          })}
        </ul>
      </h1>
    </div>
  );
};

export default Campaign;
