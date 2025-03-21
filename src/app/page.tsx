"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import FormacoesCards from "@/components/formacaocards";
import Link from "next/link";

const Home = () => {
  const { data } = useSession();
  if (!data) {
    return (
      <div className="flex h-screen">
        {/* Lado esquerdo com imagem */}
        <div className="w-1/2 h-full flex items-center justify-center bg-[#5ce1e6]">
          <Image src="/lamp.png" alt="Login" width={250} height={250} />
        </div>

        {/* Lado direito com conteúdo de login */}
        <div className="w-full md:w-1/2 bg-gray-50 flex flex-col items-center justify-center p-8">
          {/* Título */}
          <h1
            style={{ fontFamily: "Tan Mon Cheri" }}
            className="text-9xl  mb-8"
          >
            WIKITEIA
          </h1>

          {/* Botão de Login */}
          <Button
            className="bg-[#5ce1e6] w-48 h-10"
            onClick={() => signIn("azure-ad")}
          >
            <h1 className="pl">Login via Microsoft</h1>
            <Image
              src="/microsoft-svgrepo-com.svg"
              alt="Microsoft"
              width={30}
              height={30}
            />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col h-full">
            {/* Cabeçalho */}
            <SheetHeader className="text-center border-b pb-4 mb-4">
              <SheetTitle
                style={{ fontFamily: "Tan Mon Cheri" }}
                className="text-2xl font-bold"
              >
                WIKITEIA
              </SheetTitle>
              <SheetDescription className="text-xs">
                UM PRODUTO TEIA CONNECT
              </SheetDescription>
            </SheetHeader>

            {/* Área principal para botões */}
            <div className="flex-1 py-4 space-y-2">
              <Link href={`/`}>
                <Button variant="ghost" className="w-full justify-start">
                  Página Inicial
                </Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start">
                Configurações
              </Button>
            </div>

            {/* Footer usando SheetFooter */}
            <SheetFooter className="mt-auto border-t pt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-3 w-full hover:bg-accent/50 transition-colors p-2 rounded-lg cursor-pointer">
                    <Avatar className="w-12 h-12 ml-2">
                      <AvatarImage src={data?.user?.image ?? ""} />
                    </Avatar>
                    <div className="flex-1 text-left">
                      <p className="font-semibold">{data?.user?.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {data?.user?.email}
                      </p>
                    </div>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-48 mr-2" align="start">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      className="text-destructive focus:bg-destructive/10"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Header>
      <FormacoesCards />
    </div>
  );
};

export default Home;
