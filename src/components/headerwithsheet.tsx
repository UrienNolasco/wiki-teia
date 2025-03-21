"use client";

import { MenuIcon } from "lucide-react";
import Header from "./header";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage } from "./ui/avatar";
import { signOut, useSession } from "next-auth/react";
import router from "next/router";
import Link from "next/link";

const HeaderWithSheet = () => {
  const { data } = useSession();
  return (
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
  );
};

export default HeaderWithSheet;
