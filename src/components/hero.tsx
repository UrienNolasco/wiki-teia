import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  const handleLogin = async () => {
    await signIn("azure-ad", {
      redirect: true,
      callbackUrl: "/", // Redireciona para a página inicial após login
    });
  };

  return (
    <section className="w-full h-screen flex items-center bg-[#fffbf3] relative [&::-webkit-scrollbar]:hidden">
      {/* Cabeçalho superior esquerdo */}
      <div className="absolute top-8 left-16 mt-16">
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "Tan Mon Cheri" }}
        >
          WIKITEIA
        </h2>
        <p className="text-xs md:text-sm">UM PRODUTO TEIA CONNECT</p>
      </div>

      {/* Container imagem + botão fixo no canto superior direito */}
      <div className="absolute top-0 right-0 flex flex-col items-end gap-2">
        <Image
          src="/squares1.svg"
          alt="Imagem superior de decoracao"
          width={585.4}
          height={309}
          style={{ height: "300px" }}
        />
      </div>

      <div className="absolute right-0 mt-32 mr-24">
        <Button
          className="bg-[#5ce1e6] hover:bg-[#4ac8cd] w-36 md:w-48 h-8 md:h-10 flex gap-2 mb-24"
          onClick={handleLogin}
        >
          <span className="text-xs md:text-sm">Login via Microsoft</span>
          <Image
            src="/microsoft-svgrepo-com.svg"
            alt="Microsoft"
            width={20}
            height={20}
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </Button>
      </div>

      <div className="absolute bottom-0 right-0 z-0 ">
        <Image
          src="/squares2.svg"
          alt="Imagem superior de decoracao"
          width={970}
          height={200}
          style={{ height: "290px" }}
        />
      </div>

      {/* Conteúdo principal centralizado na esquerda */}
      <div className="absolute w-full max-w-6xl left-16 pb-16">
        <h1
          style={{ fontFamily: "Red Hat Display" }}
          className="uppercase font-bold text-7xl"
        >
          Nossas ideias,
          <br /> todas em um lugar só.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
