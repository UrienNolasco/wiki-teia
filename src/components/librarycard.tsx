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
          className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold"
          onClick={() => router.push(path)}
        >
          Acessar
        </Button>
      </div>
    </Card>
  );
}
