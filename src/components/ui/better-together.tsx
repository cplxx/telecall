"use client";

import TitleAndSubtitle from "./title-subtitle";
import Image from "next/image";
import LogosClients from "./logos-clients";

const BetterTogether = () => {
  return (
    <>
      <TitleAndSubtitle
        title="Melhor junto"
        subtitle="Quas et dolorem quod. Autem et labore dolor ab incidunt nisi. Qui voluptas quia sequi. Nihil est ullam omnis voluptas repellat voluptatibus error iure."
      />

      <Image
        src="/map.png"
        width={0}
        height={0}
        alt="mapa"
        sizes="100vw"
        objectFit="container"
        className="w-full mt-14"
      />
    </>
  );
};

export default BetterTogether;
