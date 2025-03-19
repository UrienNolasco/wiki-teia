"use server";
import { db } from "@/lib/prisma";

export const getFormacoes = async () => {
  try {
    const formacao = await db.formacao.findMany();

    return formacao;
  } catch (error) {
    console.error(error);
  }
};
