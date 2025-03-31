"use client";

import React from "react";
import { Card, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

type FormacaoContentProps = {
  formacao?: {
    nome: string;
    capacitacoes: { id: string; nome: string; done: boolean }[];
  };
};

export default function FormacaoContent({ formacao }: FormacaoContentProps) {
  if (!formacao) {
    return <p>Formação não encontrada.</p>;
  }

  const router = useRouter();

  const handleClick = () => {
    if (formacao?.nome === "Formação ABAP") {
      router.push("/formacao/abap/workshops");
    }
    if (formacao?.nome === "Formação SD") {
      router.push("/formacao/sd/workshops");
    }
    if (formacao?.nome === "Formação MM") {
      router.push("/formacao/mm/workshops");
    }
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <Card className="bg-gradient-to-r from-[#5e17eb] to-[#813ef3] w-fit shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ">
          <div className="relative px-8 ">
            <CardTitle className="text-3xl text-white font-bold tracking-wide flex flex-col">
              <span className="text-white/90">{formacao.nome}</span>
              <span className="text-sm font-normal mt-1 text-white/70">
                Progresso das Capacitações
              </span>
            </CardTitle>
          </div>
        </Card>
      </div>

      <div className="mt-10 w-full flex flex-col gap-4">
        {formacao.capacitacoes.map((capacitacao) => (
          <Card
            key={capacitacao.id}
            className="w-full p-4 flex flex-row justify-between items-center hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center gap-6">
              <div className="text-lg font-semibold text-gray-800">
                {capacitacao.nome}
              </div>

              <div className="h-6 w-px bg-gray-200" />

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Progresso:</span>
                <div
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                    capacitacao.done
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {capacitacao.done ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <span>{capacitacao.done ? "Concluído" : "Pendente"}</span>
                </div>
              </div>
            </div>

            <Button
              className="bg-[#5e17eb] hover:bg-[#4a12ba] "
              onClick={() => handleClick()}
            >
              Acessar Capacitação
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
