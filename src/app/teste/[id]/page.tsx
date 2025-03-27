"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import VideoPlayer from '@/components/videoplayer'
import VideoDetails from '@/components/videodetails'


interface Video {
  id: string
  embedUrl: string
  name: string
  size: number
  lastModified: string
  uniqueId: string
  downloadUrl: string
  createdDate: string
  mimeType: string
}

export default function VideoPage() {
  const params = useParams()
  const id = params?.id as string
  const [video, setVideo] = useState<Video | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`/api/sharepoint/videos/${id}`)
        
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`)
        }
        
        const data: Video = await response.json()
        setVideo(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchVideo()
  }, [id])

  if (loading) {
    return (
      <div className="p-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="aspect-video bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 text-red-600 text-center">
        ❌ Erro ao carregar vídeo: {error}
      </div>
    )
  }

  if (!video) {
    return (
      <div className="p-4 text-yellow-600 text-center">
        Vídeo não encontrado
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <VideoDetails video={video} />
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <VideoPlayer embedUrl={video.embedUrl} />
        
        <div className="p-4 border-t">
          <h2 className="text-lg font-semibold mb-2">Detalhes Técnicos</h2>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Tamanho</dt>
              <dd>{(video.size / 1024 / 1024).toFixed(1)} MB</dd>
            </div>
            <div>
              <dt className="text-gray-500">Última Atualização</dt>
              <dd>{new Date(video.lastModified).toLocaleDateString('pt-BR')}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}