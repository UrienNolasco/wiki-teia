"use server";

import { db } from "@/lib/prisma";

interface SwitchVideoParams {
  usuarioId: string;
  workshopId: string;
  done: boolean;
}

export const switchVideo = async ({
  usuarioId,
  workshopId,
  done,
}: SwitchVideoParams) => {
  try {
    await db.progressoWorkshop.upsert({
      where: {
        usuarioId_workshopId: { usuarioId, workshopId },
      },
      update: { done },
      create: { usuarioId, workshopId, done },
    });
  } catch (error) {
    console.error("Erro ao atualizar vídeo:", error);
  }
};
