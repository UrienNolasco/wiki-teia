"use client";

import { getFormacoes } from "@/app/actions/getFormacao";
import { Button } from "@/components/ui/button";


const TesteButton = () => {
  const handleTest = async () => {
    const data = await getFormacoes();
    console.log(data);
  };

  return <Button onClick={handleTest}>Teste</Button>;
};

export default TesteButton;
