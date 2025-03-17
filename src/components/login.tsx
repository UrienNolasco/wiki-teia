"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";

const Login = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Divisão de cores de fundo */}
      <div className="h-1/2 bg-white"></div>
      <div className="h-1/2 bg-cyan-500"></div>

      {/* Container central com todos os elementos */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Imagem acima do texto */}
        <img
          src="/lamp.png"
          alt="Logo"
          className="w-60 h-fit mb-4 object-contain"
        />

        {/* Texto principal */}
        <h1 className="text-9xl font-bold  ">WIKITEIA</h1>
        <Button onClick={() => signIn("azure-ad")}>Login Microsoft</Button>
        {/* Botão de acesso */}
      </div>
    </div>
  );
};

export default Login;
