"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FormacaoCardProps {
  nome: string;
  path: string;
  imagem: string;
}

const FormacaoCard = ({ nome, path, imagem }: FormacaoCardProps) => {
  const router = useRouter();

  return (
    <Card className="relative w-full h-[120px] cursor-pointer overflow-hidden hover:shadow-lg transition-shadow p-0 bg-cyan-50">
      <CardContent className="flex w-full h-full p-0">
        {/* Parte da esquerda (3/5 do card) */}
        <div className="flex-3 p-4 flex flex-col justify-center">
          <Badge
            className="text-sm truncate bg-pink-500"
            onClick={() => router.push(path)}
          >
            {nome}
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
