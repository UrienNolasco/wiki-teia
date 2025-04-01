"use server";
import { db } from "@/lib/prisma";

export const getFormacoes = async (userId: string) => {
  try {
    const formacoes = await db.formacao.findMany({
      include: {
        capacitacoes: {
          include: {
            workshops: {
              include: {
                // Corrigido para progressoWorkshop (singular)
                progressoWorkshop: {
                  // ← Nome correto da relação
                  where: {
                    usuarioId: userId,
                  },
                },
              },
            },
          },
        },
      },
    });

    return formacoes.map((formacao) => ({
      ...formacao,
      capacitacoes: formacao.capacitacoes.map((capacitacao) => ({
        ...capacitacao,
        workshops: capacitacao.workshops.map((workshop) => ({
          ...workshop,
          done:
            workshop.progressoWorkshop.length > 0
              ? workshop.progressoWorkshop[0].done
              : false,
        })),
      })),
    }));
  } catch (error) {
    console.error("Erro ao buscar formações:", error);
    return [];
  }
};
