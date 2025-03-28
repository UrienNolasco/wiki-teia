import { getFormacoes } from "@/app/actions/getFormacao";
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

type FormacaoContentProps = {
  tipoFormacao: "Formação ABAP" | "Formação SD" | "Formação MM";
};

export default async function FormacaoContent({
  tipoFormacao,
}: FormacaoContentProps) {
  // Busca todas as formações do banco de dados

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
    // <div>
    //   <h1>Formação {formacao.nome.toUpperCase()}</h1>
    //   {formacao.capacitacoes.map((capacitacao: any) => (
    //     <div
    //       key={capacitacao.id}
    //       className="border p-4 mb-4 rounded-md flex items-center justify-between"
    //     >
    //       <div>
    //         <h2 className="font-bold">{capacitacao.nome}</h2>
    //         <p>
    //           Status:{" "}
    //           {capacitacao.done ? (
    //             <span className="text-green-600">Concluído</span>
    //           ) : (
    //             <span className="text-orange-600">Pendente</span>
    //           )}
    //         </p>
    //       </div>
    //       <button
    //         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    //         // Aqui você pode adicionar a função que enviará a devolutiva
    //       >
    //         Enviar Devolutiva
    //       </button>
    //     </div>
    //   ))}
    // </div>
    <>
      <div className="flex flex-row items-center w-full">
        {/* Título da Formação */}
        <div className="w-full flex justify-center">
          <Card className="bg-[#5e17eb] w-fit">
            <CardTitle className="text-3xl px-4 text-white">
              {formacao.nome}
            </CardTitle>
          </Card>
        </div>
      </div>

      <div className="mt-10 w-full flex flex-row gap-4 justify-between">
        {formacao.capacitacoes.map((capacitacao: any) => (
          <Card
            key={capacitacao.id}
            className="w-full p-4 flex justify-between items-center"
          >
            
            <div className="text-lg font-semibold">{capacitacao.nome}</div>
            <div
              className={
                capacitacao.done ? "text-green-600" : "text-orange-600"
              }
            >
              {capacitacao.done ? "Concluído" : "Pendente"}
            </div>
            <Button>Acessar Capacitação</Button>
          </Card>
        ))}
      </div>
    </>
  );
}
