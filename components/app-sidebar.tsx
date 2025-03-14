"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Globe,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  LucideBitcoin,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Painel",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Criptomoedas",
      url: "/assets",
      icon: LucideBitcoin,
      isActive: false,
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Geral",
          url: "#",
        },
        {
          title: "Equipe",
          url: "#",
        },
        {
          title: "Cobrança",
          url: "#",
        },
        {
          title: "Limites",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Suporte",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  // projects: [
  //   {
  //     name: "Engenharia de Design",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Vendas e Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Viagem",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const navMain = data.navMain.map(item => ({
    ...item,
    isActive: item.url === "#" ? item.isActive : pathname === item.url
  }));

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  {/* <Globe className="size-4" /> */}
                  <Image src="/icon.png" alt="Orbt" width={32} height={32} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Orbt</span>
                  <span className="truncate text-xs">Versão Lite</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
