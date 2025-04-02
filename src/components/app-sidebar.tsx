"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  School,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Team from "./team";
import NavUser from "./nav-user";

const data = {
  navMain: [
    {
      title: "Formação",
      url: "#",
      icon: School,
      items: [
        {
          title: "ABAP",
          url: "/formacao/abap",
        },
        {
          title: "SD",
          url: "/formacao/sd",
        },
        {
          title: "MM",
          url: "/formacao/mm",
        },
      ],
    },
    {
      title: "Biblioteca de Conteúdo",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Capacitação ABAP",
          url: "/formacao/abap/workshops",
        },
        {
          title: "Capacitação de Negócios",
          url: "/formacao/sd/workshops/negocios",
        },
        {
          title: "Capacitação de Configurações",
          url: "/formacao/sd/workshops/config",
        },
        {
          title: "Capacitação MM",
          url: "/mm/workshops",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Team />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
