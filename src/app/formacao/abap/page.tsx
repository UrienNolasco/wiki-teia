import { Header } from "@/components/header";
import { SearchBar } from "@/components/searchbar";
import { SidebarLayout } from "@/components/sidebarlayout";

import ConteudoFormacao from "@/components/formacaocontent";


const Abap = () => {
  return (
    <SidebarLayout>
      <div className="h-screen flex flex-col">
        <Header />
        <SearchBar />
        <main className="bg-gray-200 flex-1">
          <div className="p-8 space-y-8">
            <ConteudoFormacao tipoFormacao="Formação ABAP" />
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default Abap;
