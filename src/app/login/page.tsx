"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginPage = () => {
  const handleLogin = async () => {
    await signIn("azure-ad", {
      redirect: true,
      callbackUrl: "/", // Redireciona para a página inicial após login
    });
  };
  return (
    <div className="flex h-screen">
      {/* Lado esquerdo com imagem */}
      <div className="w-1/2 h-full flex items-center justify-center bg-[#5ce1e6]">
        <Image src="/lamp.png" alt="Login" width={250} height={250} />
      </div>

      {/* Lado direito com conteúdo de login */}
      <div className="w-full md:w-1/2 bg-gray-50 flex flex-col items-center justify-center p-8">
        {/* Título */}
        <h1 style={{ fontFamily: "Tan Mon Cheri" }} className="text-9xl  mb-8">
          WIKITEIA
        </h1>

        {/* Botão de Login */}
        <Button className="bg-[#5ce1e6] w-48 h-10" onClick={handleLogin}>
          <h1 className="pl">Login via Microsoft</h1>
          <Image
            src="/microsoft-svgrepo-com.svg"
            alt="Microsoft"
            width={30}
            height={30}
          />
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
