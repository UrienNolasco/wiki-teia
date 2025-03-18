"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleMicrosoftLogin = async () => {
    const result = await signIn("azure-ad", {
      redirect: false,
      callbackUrl: "/",
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
    } else {
      router.push("/");
    }
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
        <h1
          style={{ fontFamily: "MinhaFonte, sans-serif" }}
          className="text-9xl  mb-8"
        >
          WIKITEIA
        </h1>

        {/* Botão de Login */}
        <Button
          className="bg-[#5ce1e6] w-48 h-10 "
          onClick={handleMicrosoftLogin}
        >
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
