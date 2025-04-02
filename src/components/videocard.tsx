"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, ChevronUp, FileText, MessageCircle } from "lucide-react";
import Link from "next/link";

import FooterAvaliation from "./footeravaliation";
import { switchVideo } from "@/app/actions/switchVideo";
import { useSession } from "next-auth/react";
import { useLastWorkshopStore } from "@/stores/progressStore";

interface Workshop {
  id: string;
  nome: string;
  link_video: string;
  done: boolean;
}

export const VideoCard = ({ workshop }: { workshop: Workshop }) => {
  const { setLastWorkshop } = useLastWorkshopStore();

  useEffect(() => {
    setLastWorkshop(workshop.id);
  }, [workshop.id, setLastWorkshop]);

  const user = useSession();

  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    if (!isCollapsed) {
      setLastWorkshop(workshop.id);
    }
  }, [isCollapsed, workshop.id, setLastWorkshop]);

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const [isDone, setIsDone] = useState(workshop.done);

  const cleanVideoUrl = workshop.link_video.replace(/^"(.*)"$/, "$1");

  const handleSwitchChange = async () => {
    const newDoneStatus = !isDone;
    setIsDone(newDoneStatus);

    try {
      await switchVideo({
        usuarioId: user.data?.user.id ?? "",
        workshopId: workshop.id,
        done: newDoneStatus,
      });
    } catch (error) {
      console.error("Erro ao atualizar status do vídeo", error);
      setIsDone(!newDoneStatus); // Reverter em caso de erro
    }
  };

  return (
    <Card className="w-full mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardHeader
        className="cursor-pointer pb-4"
        onClick={handleToggleCollapse}
      >
        <CardTitle className="flex items-center justify-between gap-2 text-xl text-gray-800">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-600" />
            {workshop.nome}
          </div>
          {isCollapsed ? (
            <ChevronDown className="h-6 w-6 text-gray-500 transition-transform duration-300" />
          ) : (
            <ChevronUp className="h-6 w-6 text-gray-500 transition-transform duration-300" />
          )}
        </CardTitle>
      </CardHeader>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isCollapsed ? 0 : "auto",
          opacity: isCollapsed ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <CardContent className="space-y-4">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={cleanVideoUrl}
              className="w-full h-full"
              title={workshop.nome}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between gap-4 border-t mt-8 items-center">
          <FooterAvaliation workshopId={workshop.id} />

          <Button
            variant="outline"
            className="flex-1 gap-2"
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="#">
              <FileText className="h-4 w-4" />
              Materiais de Apoio
            </Link>
          </Button>

          <Button
            variant="outline"
            className="flex-1 gap-2"
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="#">
              <MessageCircle className="h-4 w-4" />
              Devolutiva
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Visto</span>
            <Switch checked={isDone} onCheckedChange={handleSwitchChange} />
          </div>
        </CardFooter>
      </motion.div>
    </Card>
  );
};
