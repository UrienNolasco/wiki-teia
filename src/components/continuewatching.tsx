"use client";

import { useLastWorkshopStore } from "@/stores/progressStore";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { useRouter } from "next/navigation";

export function ContinueWatching() {
  const { lastWorkshopId, lastViewedAt } = useLastWorkshopStore();
  const router = useRouter();

  return (
    <Card>
      <div className="p-6 space-y-6">
        <CardTitle className="uppercase text-xl text-center mb-4">
          {lastWorkshopId
            ? "Continue de onde parou:"
            : "Nenhum workshop assistido ainda"}
        </CardTitle>

        {lastWorkshopId ? (
          <CardContent>
            <Card>
              <CardTitle className="text-lg uppercase text-center">
                Último vídeo acessado
              </CardTitle>
              <CardContent className="text-center text-gray-700">
                Workshop ID: <strong>{lastWorkshopId}</strong>
                <br />
                Assistido em:{" "}
                {lastViewedAt ? new Date(lastViewedAt).toLocaleString() : "N/A"}
              </CardContent>
              <CardContent>
                <Progress value={100} className="h-[15px] bg-pink-200" />
              </CardContent>
            </Card>
          </CardContent>
        ) : (
          <p className="text-center text-gray-500">
            Você ainda não assistiu nenhum workshop.
          </p>
        )}

        <CardFooter className="flex justify-between px-4">
          <Button
            className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold mr-2"
            onClick={() => router.push("/formacao")}
          >
            Acessar Conteúdo
          </Button>

          {lastWorkshopId && (
            <Button
              className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold ml-2"
              onClick={() => router.push(`/workshop/${lastWorkshopId}`)}
            >
              Acessar Vídeo
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
