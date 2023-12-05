import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-14 flex flex-col md:flex-row gap-4 items-center justify-center 2xl:justify-between">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl md:text-2xl text-primary-text   ">
          Plataforma de Comunicação como Serviço
        </h1>
        <p className="w-full md:w-[70%]">
          É uma solução de software de comunicação que atua como uma base sobre
          a qual desenvolvedores podem integrar uma variedade de aplicativos.{" "}
          <br />
          <br />
          Métodos de comunicação típicos, como voz, chamadas de vídeo ou
          mensagens de texto SMS, podem ser incorporados em outros sistemas por
          meio de APIs que se conectam à plataforma CPaaS. <br /> <br />
          Essas APIs permitem que as empresas expandam suas ofertas sem a
          necessidade de hardware ou software adicional.
        </p>
      </div>
      <Image
        src="/hero-image.png"
        width="0"
        height="0"
        alt=""
        className="w-[500px] "
        sizes="100vw"
        objectFit="cover"
      />
    </section>
  );
};

export default Hero;
