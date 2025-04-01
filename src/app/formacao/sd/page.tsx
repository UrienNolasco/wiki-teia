import FormacaoServer from "@/components/formacaoserver";
import { Header } from "@/components/header";
import { SearchBar } from "@/components/searchbar";
import { SidebarLayout } from "@/components/sidebarlayout";

export const revalidate = 0;

const SD = async () => {
  return (
    <SidebarLayout>
      <div className="h-screen flex flex-col">
        <Header />
        <SearchBar />
        <main className="bg-gray-200 flex-1">
          <div className="p-8 space-y-8">
            <FormacaoServer tipoFormacao="Formação SD" />
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default SD;
