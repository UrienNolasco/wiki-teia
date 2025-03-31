// app/components/FormacaoServer.tsx
import { getFormacoes } from "@/app/actions/getFormacao";
import FormacaoContent from "./formacaocontent";

type FormacaoServerProps = {
  tipoFormacao: "Formação ABAP" | "Formação SD" | "Formação MM";
};

export default async function FormacaoServer({
  tipoFormacao,
}: FormacaoServerProps) {
  let formacoes;
  try {
    formacoes = await getFormacoes();
  } catch (error) {
    console.error("Erro ao buscar formações:", error);
    return <p>Erro ao carregar as formações.</p>;
  }

  const formacao = formacoes?.find((f: any) => f.nome === tipoFormacao);

  return <FormacaoContent formacao={formacao} />;
}
