import { getServerSession } from "next-auth/next";

import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "@/lib/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.accessToken) {
    return res.status(401).json({ error: "Não autorizado" });
  }

  try {
    // Configurações do SharePoint
    const siteId = "seu-site-id";
    const folderPath = "/Formação/Aula/Videos"; // Caminho relativo

    // Chamada para Microsoft Graph API
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/sites/${siteId}/drive/root:/${folderPath}:/children?$filter=file ne null`,
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!response.ok) throw new Error("Falha na requisição");

    const data = await response.json();

    // Paginação
    const videos = data.value;
    while (data["@odata.nextLink"]) {
      const nextPage = await fetch(data["@odata.nextLink"], {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });
      const nextData = await nextPage.json();
      videos.push(...nextData.value);
    }

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar vídeos" });
  }
}
