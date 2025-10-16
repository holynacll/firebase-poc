
"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  Hexagon,
  Menu,
  Search,
  LayoutDashboard,
  ShieldAlert,
  GitCompareArrows,
  Share2,
  Map,
  Home,
  ScanLine,
  Users,
  Briefcase,
  Calculator,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useAuth } from "@/firebase";
import { signOut } from "firebase/auth";

const navItems: NavItem[] = [
  { href: "/", label: "Dashboard Fiscal", icon:LayoutDashboard, description: "Visão geral da inteligência fiscal municipal" },
  { href: "/fraudes", label: "Análise de Fraudes", icon: ShieldAlert, description: "Detecção e gerenciamento de fraudes." },
  { href: "/cruzamento", label: "Cruzamento de Dados", icon: GitCompareArrows, description: "Análise inteligente de múltiplas fontes." },
  { href: "/redes", label: "Análise de Redes", icon: Share2, description: "Visualização de redes financeiras e societárias." },
  { href: "/georreferenciamento", label: "Georreferenciamento", icon: Map, description: "Análise de imagens e monitoramento geoespacial." },
  { href: "/valor-venal", label: "Valor Venal", icon: Home, description: "Revisão e atualização do valor venal de imóveis." },
  { href: "/digitalizacao", label: "Digitalização", icon: ScanLine, description: "Upload, busca e indexação de documentos." },
  { href: "/cadastro-unico", label: "Cadastro Único", icon: Users, description: "Gerenciamento centralizado de contribuintes." },
  { href: "/cnae", label: "Busca por CNAE", icon: Briefcase, description: "Análise e correção de CNAE de empresas." },
  { href: "/simulacao", label: "Simulação de Cenários", icon: Calculator, description: "Simulação de impacto de reformas fiscais." },
  { href: "/atendimento", label: "Atendimento Virtual", icon: MessageCircle, description: "Assistente fiscal IA para atendimento 24/7." },
];

export default function MainHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const auth = useAuth();
  const pageInfo = navItems.find((item) => item.href === pathname) || { label: "Dashboard Fiscal", description: "Visão geral da inteligência fiscal municipal"};

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };


  return (
    <header className="flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col bg-card text-card-foreground border-r p-0">
             <SheetHeader className="p-4 border-b">
                <SheetTitle className="sr-only">Navegação</SheetTitle>
                 <div className="flex items-center gap-3">
                    <Hexagon className="h-8 w-8 text-primary" />
                    <div>
                      <h1 className="text-xl font-bold">SmartPrefeitura</h1>
                      <p className="text-xs text-muted-foreground">Inteligência Fiscal</p>
                    </div>
                </div>
            </SheetHeader>
            <nav className="grid gap-2 text-lg font-medium p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted", pathname === item.href ? 'bg-muted text-primary' : 'text-muted-foreground' )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex flex-col">
            <h1 className="text-xl font-semibold leading-none">{pageInfo.label}</h1>
            <p className="text-sm text-muted-foreground mt-1 whitespace-nowrap">{pageInfo.description}</p>
        </div>
      </div>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial" />
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/seed/user/32/32" />
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuItem>Suporte</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
