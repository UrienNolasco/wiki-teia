import { useEffect, useState } from 'react'

interface VideoPlayerProps {
  embedUrl: string
}

export default function VideoPlayer({ embedUrl }: VideoPlayerProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
      {loaded && (
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allowFullScreen
          title="Player de Vídeo"
          allow="autoplay; fullscreen"
          loading="lazy"
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="animate-pulse">Carregando player...</span>
        </div>
      )}
    </div>
  )
}