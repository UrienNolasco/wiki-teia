import { getFormacoes } from "@/app/actions/getFormacao";
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { AlertCircle, CheckCircle } from "lucide-react";

type FormacaoContentProps = {
  tipoFormacao: "Formação ABAP" | "Formação SD" | "Formação MM";
};

export default async function FormacaoContent({
  tipoFormacao,
}: FormacaoContentProps) {
  let formacoes;
  try {
    formacoes = await getFormacoes();
    console.log("Formações retornadas do banco:", formacoes);
  } catch (error) {
    console.log("Erro ao buscar formações:", error);
  }

  // Filtra a formação cujo nome corresponde ao tipo desejado (supondo que esteja em minúsculo)
  const formacao = formacoes?.find((f: any) => f.nome === tipoFormacao);

  if (!formacao) {
    return <p>Formação {tipoFormacao} não encontrada.</p>;
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <Card className="bg-gradient-to-r from-[#5e17eb] to-[#813ef3] w-fit shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ">
          <div className="relative px-8 ">
            {/* Decoração lateral */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-white/30 rounded-r-full"></div>

            {/* Conteúdo principal */}
            <CardTitle className="text-3xl text-white font-bold tracking-wide flex flex-col">
              <span className="text-white/90">{formacao.nome}</span>
              <span className="text-sm font-normal mt-1 text-white/70">
                Progresso das Capacitações
              </span>
            </CardTitle>

            {/* Efeito brilho hover */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute -inset-12 opacity-0 hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-10 w-full flex flex-col gap-4">
        {formacao.capacitacoes.map((capacitacao: any) => (
          <Card
            key={capacitacao.id}
            className="w-full p-4 flex flex-row justify-between items-center hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center gap-6">
              {/* Título */}
              <div className="text-lg font-semibold text-gray-800">
                {capacitacao.nome}
              </div>

              {/* Separador visual */}
              <div className="h-6 w-px bg-gray-200" />

              {/* Container de Progresso */}
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

            <Button className="bg-[#5e17eb] hover:bg-[#4a12ba]">
              Acessar Capacitação
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
