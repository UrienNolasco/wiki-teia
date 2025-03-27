import { getServerSession } from "next-auth/next"
import { NextApiRequest, NextApiResponse } from "next"
import { authOptions } from "@/lib/auth"
import { Video } from "@/app/types/video"

const SHAREPOINT_SITE_ID = "teiaconnect.sharepoint.com,9a8ed58c-3206-47e6-bb20-b3e2eb910f82,d6dcd062-fa29-4cc6-bebd-b5d626de81dc"
const DRIVE_ID = "b!jNWOmgYy5ke7ILPi65EPgmLQ3NYp-sZMvr211ibegdxT6cw5qoIjQ7a3ddE1r7HQ"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Video | { error: string }>
) {
  const session = await getServerSession(req, res, authOptions)
  const { videoId } = req.query

  if (!session?.accessToken) {
    return res.status(401).json({ error: "Não autorizado" })
  }

  try {
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/sites/${SHAREPOINT_SITE_ID}/drives/${DRIVE_ID}/items/${videoId}`,
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )

    if (!response.ok) throw new Error("Vídeo não encontrado")

    const data = await response.json()
    
    const video: Video = {
      id: data.id,
      uniqueId: data.eTag.split(",")[0].replace(/[{"}]/g, ''),
      name: data.name,
      downloadUrl: data["@microsoft.graph.downloadUrl"],
      embedUrl: `https://teiaconnect.sharepoint.com/_layouts/15/embed.aspx?UniqueId=${data.eTag.split(",")[0].replace(/[{"}]/g, '')}`,
      createdDate: data.createdDateTime,
      lastModified: data.lastModifiedDateTime,
      size: data.size,
      mimeType: data.file.mimeType,
      duration: data.video?.duration,
      resolution: `${data.video?.width}x${data.video?.height}`
    }

    res.status(200).json(video)
    
  } catch (error) {
    console.error("Erro na busca do vídeo:", error)
    res.status(500).json({ 
      error: error instanceof Error ? error.message : "Erro desconhecido"
    })
  }
}