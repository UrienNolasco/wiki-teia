"use server";

import { db } from "@/lib/prisma";

interface SwitchVideoParams {
  id: string;
  done: boolean;
}

export const switchVideo = async ({ id, done }: SwitchVideoParams) => {
  try {
    await db.workshop.update({
      where: { id }, // Especifica qual registro atualizar
      data: { done }, // Define os novos valores
    });
  } catch (error) {
    console.error("Erro ao atualizar vídeo:", error);
  }
};
