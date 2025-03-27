import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@microsoft/microsoft-graph-client";
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Método não permitido" });

  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: "Não autorizado" });

  const { fileId } = req.query;

  if (!fileId) return res.status(400).json({ error: "Parâmetros inválidos" });

  try {
    const client = Client.init({
      authProvider: (done) => done(null, session.accessToken ?? null), // Corrigido aqui
    });

    const response = await client.api(`/me/drive/items/${fileId}/listItem/fields`).get();

    return res.status(200).json({ lastWatchedTime: response.LastWatchedTime || 0 });
  } catch (error) {
    console.error("Erro ao buscar progresso:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}