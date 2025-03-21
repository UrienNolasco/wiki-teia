"use client";

import { getFormacoes } from "@/app/actions/getFormacao";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

export default function CapacitacoesCards() {
  const router = useRouter();
  const pathname = usePathname();
  const [capacitacoes, setCapacitacoes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlSegment = pathname.split("/")[1];
        const formacoes = await getFormacoes();

        const formacaoAtual = formacoes?.find((formacao: any) => {
          // Nova lógica de normalização
          const nomeSlug = formacao.nome
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove acentos
            .toLowerCase()
            .split(" ") // Divide em partes
            .pop(); // Pega a última parte (SD ou ABAP)

          return nomeSlug === urlSegment.toLowerCase();
        });

        // Restante do código permanece igual
        if (formacaoAtual) {
          setCapacitacoes(
            formacaoAtual.capacitacoes.map((capacitacao: any) => ({
              ...capacitacao,
              formacaoNome: formacaoAtual.nome,
            }))
          );
        } else {
          setCapacitacoes([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pathname]);

  if (loading)
    return <div className="text-center">Carregando capacitações...</div>;

  if (!capacitacoes.length)
    return (
      <div className="text-center">
        Nenhuma capacitação encontrada para esta formação
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {capacitacoes.map((capacitacao) => (
        <Card
          key={capacitacao.id}
          className="hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <CardTitle>{capacitacao.nome}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Parte da formação: <strong>{capacitacao.formacaoNome}</strong>
            </p>
            <p className="text-sm mt-2">
              Workshops disponíveis: {capacitacao.workshops.length}
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => router.push(`/capacitacoes/${capacitacao.id}`)}
              variant="outline"
            >
              Acessar Capacitação
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
