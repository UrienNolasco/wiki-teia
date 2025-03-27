// pages/api/videos/progress.ts
import { getServerSession } from "next-auth/next"

import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { authOptions } from "@/lib/auth"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)

  if (!session?.user?.id) {
    return res.status(401).json({ error: "Não autorizado" })
  }

  if (req.method === "POST") {
    const { videoId, tempo } = req.body

    if (typeof videoId !== "string" || typeof tempo !== "number") {
      return res.status(400).json({ error: "Dados inválidos" })
    }

    try {
      // Verificar se já existe um registro
      const existingProgress = await prisma.progressoVideo.findFirst({
        where: {
          usuarioId: session.user.id,
          devolutivaId: videoId
        }
      })

      if (existingProgress) {
        // Atualizar registro existente
        await prisma.progressoVideo.update({
          where: { id: existingProgress.id },
          data: {
            tempo_assistido: tempo,
            ultima_atualizacao: new Date()
          }
        })
      } else {
        // Criar novo registro
        await prisma.progressoVideo.create({
          data: {
            usuarioId: session.user.id,
            videoId: videoId,
            devolutivaId: videoId,
            tempo_assistido: tempo,
            ultima_atualizacao: new Date()
          }
        })
      }

      res.status(200).json({ success: true })
    } catch (error) {
      console.error("Erro no Prisma:", error)
      res.status(500).json({ error: "Erro ao salvar progresso" })
    } finally {
      await prisma.$disconnect()
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
