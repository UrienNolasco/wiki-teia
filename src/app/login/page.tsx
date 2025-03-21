"use client";

import About from "@/components/about";
import Contato from "@/components/contato";
import Hero from "@/components/hero";
import Objetivos from "@/components/objetivos";
import Recursos from "@/components/recursos";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between scroll [&::-webkit-scrollbar]:hidden">
        {/* Seção Hero */}
        <Hero />

        {/* Seção Hero */}
        <About />

        {/* Seção Experiencias */}
        <Recursos />

        {/* Seção Projetos */}
        <Objetivos />
        {/* Seção Contato */}
        <Contato />
      </main>
    </>
  );
};

export default LoginPage;
