import { ContentCard } from "@/components/contentcard";
import { Header } from "@/components/header";
import { LibraryCard } from "@/components/librarycard";
import { SearchBar } from "@/components/searchbar";
import { SidebarLayout } from "@/components/sidebarlayout";

export default function Home() {
  return (
    <SidebarLayout>
      <div className="h-screen flex flex-col">
        <Header />
        <SearchBar />
        <main className="flex-1 bg-gray-200 p-6 overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <ContentCard />
            <LibraryCard title="Biblioteca de conteúdos" path="/biblioteca" />
            <LibraryCard title="Progresso de aprendizado" path="/progresso" />
            <LibraryCard
              title="Devolutivas para avaliações"
              path="/devolutivas"
            />
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
}
