"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";

type LibraryCardProps = {
  title: string;
  path: string;
};

export function LibraryCard({ title, path }: LibraryCardProps) {
  const router = useRouter();

  return (
    <Card>
      <div className="p-6 flex justify-between items-center">
        <CardTitle className="text-lg uppercase font-bold m-0">
          {title}
        </CardTitle>
        <Button
          className="uppercase ransition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
          onClick={() => router.push(path)}
        >
          Acessar
        </Button>
      </div>
    </Card>
  );
}
