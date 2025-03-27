import { Video } from "@/app/types/video";

interface VideoDetailsProps {
  video: Video;
}

export default function VideoDetails({ video }: VideoDetailsProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{video.name}</h1>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Tamanho:</p>
          <p>{(video.size / 1024 / 1024).toFixed(1)} MB</p>
        </div>

        {video.duration && (
          <div>
            <p className="text-gray-600">Duração:</p>
            <p>{new Date(video.duration).toISOString().substr(11, 8)}</p>
          </div>
        )}

        {video.resolution && (
          <div>
            <p className="text-gray-600">Resolução:</p>
            <p>{video.resolution}</p>
          </div>
        )}

        <div>
          <p className="text-gray-600">Última atualização:</p>
          <p>{new Date(video.lastModified).toLocaleDateString("pt-BR")}</p>
        </div>
      </div>
    </div>
  );
}
