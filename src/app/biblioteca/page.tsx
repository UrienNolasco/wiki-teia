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
        <main className="bg-gray-200 ">
          <div className="h-full">
            <FormacaoCard
              nome="Formação ABAP"
              path="/formacao/1"
              imagem="/formacaoabap.svg"
            />
            <FormacaoCard
              nome="Formação SD"
              path="/formacao/1"
              imagem="/formacaosd.svg"
            />
            <FormacaoCard
              nome="Formação MM"
              path="/formacao/1"
              imagem="/formacaomm.svg"
            />
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default Biblioteca;
