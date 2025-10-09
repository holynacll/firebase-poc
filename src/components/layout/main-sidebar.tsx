"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Calculator,
  GitCompareArrows,
  Hexagon,
  Home,
  LayoutDashboard,
  LogOut,
  Map,
  MessageCircle,
  ScanLine,
  Share2,
  ShieldAlert,
  Users,
} from "lucide-react";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

const navItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/fraudes", label: "Análise de Fraudes", icon: ShieldAlert },
  { href: "/cruzamento", label: "Cruzamento de Dados", icon: GitCompareArrows },
  { href: "/redes", label: "Análise de Redes", icon: Share2 },
  { href: "/georreferenciamento", label: "Georreferenciamento", icon: Map },
  { href: "/valor-venal", label: "Valor Venal", icon: Home },
  { href: "/digitalizacao", label: "Digitalização", icon: ScanLine },
  { href: "/cadastro-unico", label: "Cadastro Único", icon: Users },
  { href: "/cnae", label: "Busca por CNAE", icon: Briefcase },
  { href: "/simulacao", label: "Simulação de Cenários", icon: Calculator },
  { href: "/atendimento", label: "Atendimento Virtual", icon: MessageCircle },
];

export default function MainSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-60 min-h-screen bg-card p-4 border-r">
      <div className="flex items-center gap-3 mb-8">
        <Hexagon className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-xl font-bold">SmartPrefeitura</h1>
          <p className="text-xs text-muted-foreground">Inteligência Fiscal</p>
        </div>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        <TooltipProvider>
          {navItems.map((item) => (
            <Tooltip key={item.href} delayDuration={100}>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3",
                       pathname === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="truncate">{item.label}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-background text-foreground">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>

      <div className="mt-auto">
        <div className="flex items-center gap-3 p-2 rounded-lg">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://picsum.photos/seed/user/40/40" />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>
          <div className="flex-1 truncate">
            <p className="font-semibold text-sm">Ana Fiscal</p>
            <p className="text-xs text-muted-foreground">Auditora Fiscal</p>
          </div>
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <LogOut className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-background text-foreground">
                <p>Sair</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </aside>
  );
}
