import { ContinueWatching } from "@/components/continuewatching";
import { Header } from "@/components/header";
import { LibraryCard } from "@/components/librarycard";
import { SearchBar } from "@/components/searchbar";
import { SidebarLayout } from "@/components/sidebarlayout";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <SidebarLayout>
      <div className="h-screen flex flex-col">
        <Header />
        <SearchBar />
        <ToastContainer />

        {/* Main em linha (horizontal) */}
        <main className="flex-1 bg-gray-200 p-6 overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-6 h-full">
            {/* Parte esquerda: Continuar assistindo (2/3) */}
            <div className="flex-[2]">
              <ContinueWatching />
            </div>

            {/* Parte direita: Cards (1/3) */}
            <div className="flex-[1] space-y-6">
              <LibraryCard title="Biblioteca de conteúdos" path="/biblioteca" />
              <LibraryCard title="Progresso de aprendizado" path="/progresso" />
              <LibraryCard
                title="Devolutivas para avaliações"
                path="/devolutivas"
              />
            </div>
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
}
