"use client";

import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import Image from "next/image";

interface FormacaoCardProps {
  nome: string;
  path: string;
  imagem: string;
}

const FormacaoCard = ({ nome, path, imagem }: FormacaoCardProps) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
      <Badge
        className="cursor-pointer text-sm px-3 py-1"
        onClick={() => router.push(path)}
      >
        {nome}
      </Badge>
      <Image
        src={imagem}
        alt={nome}
        width={80}
        height={80}
        className="rounded-md object-fill"
      />
    </div>
  );
};

export default FormacaoCard;
