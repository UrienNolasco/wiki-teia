"use server";
import { db } from "@/lib/prisma";

// Interface para os parâmetros de entrada
interface getProgressoCapacitacaoProps {
  userId: string;
  nomeCapacitacao: string;
}

// Interface para o retorno
interface ProgressoCapacitacao {
  totalWorkshops: number;
  concluidos: number;
  progresso: number;
}

export const getProgressoCapacitacao = async ({
  userId,
  nomeCapacitacao,
}: getProgressoCapacitacaoProps): Promise<ProgressoCapacitacao> => {
  // Primeiro verifica se a capacitação existe
  const capacitacao = await db.capacitacao.findFirst({
    where: { nome: nomeCapacitacao },
    select: { id: true },
  });

  if (!capacitacao) {
    return { totalWorkshops: 0, concluidos: 0, progresso: 0 };
  }

  // Busca os totais em paralelo para melhor performance
  const [totalWorkshops, concluidos] = await Promise.all([
    db.workshop.count({
      where: { capacitacaoId: capacitacao.id },
    }),

    db.progressoWorkshop.count({
      where: {
        usuarioId: userId,
        done: true,
        workshop: { capacitacaoId: capacitacao.id },
      },
    }),
  ]);

  const progresso =
    totalWorkshops > 0 ? Math.round((concluidos / totalWorkshops) * 100) : 0;

  return { totalWorkshops, concluidos, progresso };
};
