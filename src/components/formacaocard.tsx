"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface FormacaoCardProps {
  nome: string;
  path: string;
  imagem: string;
}

const FormacaoCard = ({ nome, path, imagem }: FormacaoCardProps) => {
  const router = useRouter();

  return (
    <Card className="relative w-full h-[120px] cursor-pointer overflow-hidden group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-cyan-200 to-blue-200 hover:-translate-y-1 shadow-sm p-0">
      <CardContent className="flex w-full h-full p-0">
        {/* Parte da esquerda (3/5 do card) */}
        <div className="flex-3 p-4 flex flex-col justify-center relative bg-gradient-to-r from-cyan-100/20 to-transparent">
          <Badge
            className="text-sm font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white shadow-sm hover:scale-105 transition-transform duration-200 w-fit border-2 border-white"
            onClick={() => router.push(path)}
          >
            <span className="truncate">{nome}</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Badge>
        </div>

        {/* Parte da direita (2/5 do card) com a imagem */}
        <div className="flex-[2] relative w-full p-0 overflow-hidden">
          {/* Adicione rounded-l-lg e overflow-hidden */}
          <Image
            src={imagem}
            alt={nome}
            fill
            className="object-cover rounded-l-full"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default FormacaoCard;
