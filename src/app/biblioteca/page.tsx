import FormacaoCard from "@/components/formacaocard";
import { Header } from "@/components/header";
import { SearchBar } from "@/components/searchbar";
import { SidebarLayout } from "@/components/sidebarlayout";

const Biblioteca = () => {
  return (
    <SidebarLayout>
      <div className="h-screen flex flex-col">
        <Header />
        <SearchBar />
        <main className="bg-gray-200 flex-1">
          <div className="p-8 space-y-8">
            <FormacaoCard
              nome="Formação ABAP"
              path="/formacao/abap"
              imagem="/formacaoabap.svg"
            />
            <FormacaoCard
              nome="Formação SD"
              path="/formacao/sd"
              imagem="/formacaosd.svg"
            />
            <FormacaoCard
              nome="Formação MM"
              path="/formacao/mm"
              imagem="/formacaomm.svg"
            />
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default Biblioteca;
