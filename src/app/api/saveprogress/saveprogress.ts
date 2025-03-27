import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@microsoft/microsoft-graph-client";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Método não permitido" });

  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: "Não autorizado" });

  const { fileId, time } = req.body;

  if (!fileId || time == null) {
    return res.status(400).json({ error: "Parâmetros inválidos" });
  }

  try {
    const client = Client.init({
      authProvider: (done) => done(null, session.accessToken ?? null),
    });

    console.log(`Saving time: ${time}`); // Log the time being saved

    // Atualiza a propriedade no SharePoint
    await client.api(`/me/drive/items/${fileId}/listItem/fields`).patch({
      LastWatchedTime: time,
    });

    console.log("Progresso salvo!");

    return res.status(200).json({ message: "Progresso salvo!" });
  } catch (error) {
    console.error("Erro ao salvar progresso:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
