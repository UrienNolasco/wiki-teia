import CapacitacoesCards from "@/components/capacitacaocards";
import { Header } from "@/components/header";
import { SearchBar } from "@/components/searchbar";
import { SidebarLayout } from "@/components/sidebarlayout";

const Abap = () => {
  return (
    <SidebarLayout>
      <div className="h-screen flex flex-col">
        <Header />
        <SearchBar />
        <main className="bg-gray-200 flex-1">
          <div className="p-8 space-y-8"></div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default Abap;
