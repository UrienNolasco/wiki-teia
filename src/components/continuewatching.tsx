"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";
import { getWorkshop } from "@/app/actions/getworkshop";
import { useLastWorkshopStore } from "@/stores/progressStore";
import { BookOpen, CalendarDays, Play, Video } from "lucide-react";

// Mapeamento de capacitações para URLs
const routeMap: { [key: string]: string } = {
  "Capacitação de Negócios": "/formacao/sd/workshops/negocios",
  "Capacitação de Configurações": "/formacao/sd/workshops/config",
  "Capacitação ABAP": "/formacao/abap/workshops",
};

export function ContinueWatching() {
  const { lastWorkshopId, lastViewedAt } = useLastWorkshopStore();
  const router = useRouter();
  const [workshopName, setWorkshopName] = useState<string | null>(null);
  const [capacitacao, setCapacitacao] = useState<string | null>(null);

  useEffect(() => {
    if (lastWorkshopId) {
      getWorkshop({ workshopId: lastWorkshopId }).then((data) => {
        if (data) {
          setWorkshopName(data.nome);
          setCapacitacao(data.capacitacao);
        }
      });
    }
  }, [lastWorkshopId]);

  const handleAcessarConteudo = () => {
    const route = capacitacao
      ? routeMap[capacitacao] || "/formacao"
      : "/biblioteca";
    router.push(route);
  };

  return (
    <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="p-6 space-y-6">
        <div className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {workshopName ? "Continue Assistindo" : "Bem-vindo(a)!"}
          </CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {workshopName
              ? "Retome seu último workshop assistido"
              : "Explore nossos conteúdos formativos"}
          </p>
        </div>

        {/* Conteúdo Principal */}
        {workshopName ? (
          <div className="group relative space-y-4">
            {/* Efeito de brilho sutil no hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />

            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <div className="space-y-2">
                {/* Linha de tempo visual */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="h-2 w-2 bg-pink-500 rounded-full" />
                  <span>Último acesso</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {workshopName}
                </h3>

                {/* Badge de capacitação */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100/50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-300 text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {capacitacao}
                </div>

                {/* Data com ícone */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarDays className="h-4 w-4" />
                  {lastViewedAt
                    ? new Date(lastViewedAt).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "N/A"}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 h-16 w-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <Video className="h-8 w-8 text-gray-400 dark:text-gray-500" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Sua jornada de aprendizagem está apenas começando!
            </p>
          </div>
        )}

        {/* Botão com efeito de destaque */}
        <Button
          onClick={handleAcessarConteudo}
          className="w-full transform transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
        >
          <Play className="h-5 w-5 mr-2" />
          {workshopName ? "Continuar Assistindo" : "Explorar Conteúdos"}
        </Button>
      </div>

      {/* Decoração de canto */}
      <div className="absolute top-0 right-0 h-16 w-16 bg-pink-500/10 blur-[80px]" />
    </Card>
  );
}
