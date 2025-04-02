"use client";

import * as React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Team = () => {
  const router = useRouter();

  return (
    <SidebarMenu>
      <SidebarMenuItem onClick={() => router.push("/")}>
        <SidebarMenuButton size="lg" className="text-left">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Image
              src={"/teia-logo-512.jpg"}
              className="object-fill"
              alt="Logo da teia"
              width={50}
              height={50}
            />
          </div>
          <div className="grid flex-1 text-sm leading-tight">
            <span className="truncate font-semibold">Teia Connect</span>
            <span className="truncate text-xs">Time Connect Pro</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default Team;
