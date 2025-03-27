"use client";

import { useEffect, useState } from "react";

export default function VideoPlayer() {
  const fileId = "d9089d7c-5795-40cd-9b0c-7492e802c3b6";
  const baseUrl =
    "https://teiaconnect.sharepoint.com/sites/Teia-Formaes-FormaoABAP/_layouts/15/embed.aspx?UniqueId=" +
    fileId;

  const [videoUrl, setVideoUrl] = useState(baseUrl);

  useEffect(() => {
    async function fetchProgress() {
      const response = await fetch(`/api/getProgress?fileId=${fileId}`);
      const data = await response.json();
      if (data.lastWatchedTime) {
        setVideoUrl(`${baseUrl}&t=${data.lastWatchedTime}s`);
      }
    }
    fetchProgress();
  }, []);

  const saveTime = async () => {
    const time = prompt("Digite o tempo atual do vídeo em segundos:");
    if (time) {
      await fetch(`/api/saveProgress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileId, time }),
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <iframe
        src={videoUrl}
        width="1280"
        height="720"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title="Vídeo de Treinamento"
      ></iframe>
      <button
        onClick={saveTime}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Salvar progresso
      </button>
    </div>
  );
}
