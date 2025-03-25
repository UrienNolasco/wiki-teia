import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Container principal com altura fixa da tela */}
        <div className="h-screen flex flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-gray-200 relative">
            <div className="flex items-center gap-2 px-4 bg-gray-200">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <Image
              src={"/squareshomepage1.svg"}
              alt="Home"
              width={300}
              height={200}
              className="absolute top-0 right-0"
            />
          </header>

          {/* Área de pesquisa */}
          <div className="w-full bg-gray-200 py-4">
            <div className="w-full max-w-2xl px-4 mx-auto">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
                  stroke="currentColor"
                />
                <Input placeholder="Search" className="w-full pl-10 bg-white" />
              </div>
            </div>
          </div>

          {/* Main content com scroll */}
          <main className="flex-1 bg-gray-200 p-6 overflow-y-auto [&::-webkit-scrollbar]:hidden">
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Card principal */}
              <Card>
                <div className="p-6 space-y-6">
                  <CardTitle className="uppercase text-xl text-center mb-4">
                    Continue de onde parou: Formação .... Conteúdo ...
                  </CardTitle>

                  <CardContent>
                    <Card>
                      <CardTitle className="text-lg uppercase text-center">
                        Ultimo vídeo acessado
                      </CardTitle>
                      <CardContent>
                        <Progress value={50} className="h-[15px] bg-pink-200" />
                      </CardContent>
                    </Card>
                  </CardContent>

                  <CardFooter className="flex justify-between px-4">
                    <Button className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold mr-2">
                      Acessar Conteúdo
                    </Button>
                    <Button className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold ml-2">
                      Acessar Vídeo
                    </Button>
                  </CardFooter>
                </div>
              </Card>

              {/* Cards da biblioteca - Agora fora do card principal */}
              <Card>
                <div className="p-6 flex justify-between items-center">
                  <CardTitle className="text-lg uppercase font-bold m-0">
                    biblioteca de conteúdos
                  </CardTitle>
                  <Button className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold">
                    Acessar
                  </Button>
                </div>
              </Card>

              {/* Progresso de aprendizado */}
              <Card>
                <div className="p-6 flex justify-between items-center">
                  <CardTitle className="text-lg uppercase font-bold m-0">
                    progresso de aprendizado
                  </CardTitle>
                  <Button className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold">
                    Acessar
                  </Button>
                </div>
              </Card>

              {/* Devolutivas para avaliações */}
              <Card>
                <div className="p-6 flex justify-between items-center">
                  <CardTitle className="text-lg uppercase font-bold m-0">
                    devolutivas para avaliações
                  </CardTitle>
                  <Button className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold">
                    Acessar
                  </Button>
                </div>
              </Card>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
