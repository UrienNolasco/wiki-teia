"use server";
import { db } from "@/lib/prisma";

export const getFormacoes = async () => {
  try {
    const formacao = await db.formacao.findMany({
      include: {
        capacitacoes: {
          include: {
            workshops: true, // Traz os workshops dentro das capacitacoes
          },
        },
      },
    });

    return formacao;
  } catch (error) {
    console.error("Erro ao buscar formações:", error);
  }
};
