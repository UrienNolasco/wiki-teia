import { Header } from "@/components/header";
import { SearchBar } from "@/components/searchbar";
import { SidebarLayout } from "@/components/sidebarlayout";
import { Card, CardTitle } from "@/components/ui/card";
import { VideoCard } from "@/components/videocard";
import { db } from "@/lib/prisma";

const Workshops = async () => {
  const workshops = await db.workshop.findMany({
    where: {
      capacitacao: {
        nome: "Capacitação ABAP",
      },
    },
    orderBy: {
      nome: "asc",
    },
  });


  return (
    <SidebarLayout>
      <div className="h-screen flex flex-col ">
        <Header />
        <main className="bg-gray-200 flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Capacitação ABAP
            </h1>
            <div className="space-y-6">
              {workshops.map((workshop) => (
                <VideoCard
                  key={workshop.id}
                  workshop={{
                    ...workshop,
                    link_video: workshop.link_video ?? "",
                  }}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
};

export default Workshops;
