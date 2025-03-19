"use client";

import { getFormacoes } from "@/app/actions/getFormacao";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

export default function FormacoesCards() {
  const router = useRouter();
  const [formacoes, setFormacoes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleAcessarFormacao = (nomeFormacao: string) => {
    const tipo = nomeFormacao.split(" ").pop()?.toLowerCase() || "";
    router.push(`/${tipo}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFormacoes();
        if (data) setFormacoes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return <div className="text-center">Carregando formações...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {formacoes.map((formacao) => (
        <Card key={formacao.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{formacao.nome}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Adicione aqui o conteúdo principal do card se necessário */}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => handleAcessarFormacao(formacao.nome)}
              variant="outline"
            >
              Acessar Formação
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
