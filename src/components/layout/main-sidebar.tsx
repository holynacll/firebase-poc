
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
  Library,
  University,
  FileText
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const navItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard, description: "Visão geral da inteligência fiscal municipal" },
  { href: "/fraudes", label: "Análise de Fraudes", icon: ShieldAlert, description: "Detecção e gerenciamento de fraudes." },
  { href: "/cruzamento", label: "Cruzamento de Dados", icon: GitCompareArrows, description: "Análise inteligente de múltiplas fontes." },
  { href: "/redes", label: "Análise de Redes", icon: Share2, description: "Visualização de redes financeiras e societárias." },
];

const cadastroImobiliarioItems: NavItem[] = [
    { href: "/georreferenciamento", label: "Georreferenciamento", icon: Map, description: "Análise de imagens e monitoramento geoespacial." },
    { href: "/valor-venal", label: "Valor Venal", icon: Home, description: "Revisão e atualização do valor venal de imóveis." },
    { href: "/digitalizacao", label: "Digitalização", icon: ScanLine, description: "Upload, busca e indexação de documentos." },
]

const contribuintesItems: NavItem[] = [
    { href: "/cadastro-unico", label: "Cadastro Único", icon: Users, description: "Gerenciamento centralizado de contribuintes." },
    { href: "/cnae", label: "Classificação CNAE", icon: Briefcase, description: "Análise e correção de CNAE de empresas." },
]

const transicaoTributariaItems: NavItem[] = [
    { href: "/simulacao", label: "Simulação de Cenários", icon: Calculator, description: "Simulação de impacto de reformas fiscais." },
    { href: "/educacao-fiscal", label: "Educação Fiscal", icon: Library, description: "Portal com informações sobre a reforma tributária." },
]

const arrecadacaoItems: NavItem[] = [
    { href: "/arrecadacao", label: "Arrecadação", icon: University, description: "Acompanhamento da arrecadação de tributos." },
    { href: "/previsao-inadimplencia", label: "Previsão Inadimplência", icon: FileText, description: "Modelos preditivos de inadimplência." },
]

const atendimentoItems: NavItem[] = [
    { href: "/atendimento", label: "Atendimento Virtual", icon: MessageCircle, description: "Assistente fiscal IA para atendimento 24/7." },
]

const allNavItems = [...navItems, ...cadastroImobiliarioItems, ...contribuintesItems, ...transicaoTributariaItems, ...arrecadacaoItems, ...atendimentoItems];


export default function MainSidebar() {
  const pathname = usePathname();

  const isChildActive = (items: NavItem[]) => items.some(item => pathname === item.href);

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
                       pathname === item.href ? "" : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="truncate">{item.label}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-background text-foreground">
                <p>{item.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}

          <Accordion type="multiple" defaultValue={ isChildActive(cadastroImobiliarioItems) ? ['cadastro-imobiliario'] : isChildActive(contribuintesItems) ? ['contribuintes'] : isChildActive(transicaoTributariaItems) ? ['transicao-tributaria'] : isChildActive(arrecadacaoItems) ? ['arrecadacao'] : [] } className="w-full">
            <AccordionItem value="cadastro-imobiliario" className="border-none">
              <AccordionTrigger className="py-2 text-muted-foreground hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5" />
                  Cadastro Imobiliário
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-4 border-l ml-4">
                {cadastroImobiliarioItems.map((item) => (
                  <Tooltip key={item.href} delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        <Button
                          variant={pathname === item.href ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-3 my-1",
                            pathname === item.href ? "" : "text-muted-foreground"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="truncate">{item.label}</span>
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-background text-foreground">
                      <p>{item.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contribuintes" className="border-none">
              <AccordionTrigger className="py-2 text-muted-foreground hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                 <div className="flex items-center gap-3">
                    <Users className="h-5 w-5" />
                    Contribuintes
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-4 border-l ml-4">
                 {contribuintesItems.map((item) => (
                  <Tooltip key={item.href} delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        <Button
                          variant={pathname === item.href ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-3 my-1",
                             pathname === item.href ? "" : "text-muted-foreground"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="truncate">{item.label}</span>
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-background text-foreground">
                      <p>{item.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="transicao-tributaria" className="border-none">
              <AccordionTrigger className="py-2 text-muted-foreground hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                 <div className="flex items-center gap-3">
                    <GitCompareArrows className="h-5 w-5" />
                    Transição Tributária
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-4 border-l ml-4">
                 {transicaoTributariaItems.map((item) => (
                  <Tooltip key={item.href} delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        <Button
                          variant={pathname === item.href ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-3 my-1",
                             pathname === item.href ? "" : "text-muted-foreground"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="truncate">{item.label}</span>
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-background text-foreground">
                      <p>{item.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </AccordionContent>
            </AccordionItem>

             <AccordionItem value="arrecadacao" className="border-none">
              <AccordionTrigger className="py-2 text-muted-foreground hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                 <div className="flex items-center gap-3">
                    <University className="h-5 w-5" />
                    Arrecadação
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-4 border-l ml-4">
                 {arrecadacaoItems.map((item) => (
                  <Tooltip key={item.href} delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        <Button
                          variant={pathname === item.href ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-3 my-1",
                             pathname === item.href ? "" : "text-muted-foreground"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="truncate">{item.label}</span>
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-background text-foreground">
                      <p>{item.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

            {atendimentoItems.map((item) => (
                <Tooltip key={item.href} delayDuration={100}>
                <TooltipTrigger asChild>
                    <Link href={item.href}>
                    <Button
                        variant={pathname === item.href ? "secondary" : "ghost"}
                        className={cn(
                        "w-full justify-start gap-3",
                        pathname === item.href ? "" : "text-muted-foreground"
                        )}
                    >
                        <item.icon className="h-5 w-5" />
                        <span className="truncate">{item.label}</span>
                    </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-background text-foreground">
                    <p>{item.description}</p>
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
