"use client";
import React from 'react';
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  File,
  ListFilter,
  MoreHorizontal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fraudCases } from "@/lib/mock-data";
import { AnomalyDetector } from "./_components/anomaly-detector";
import Link from "next/link";

type FraudCase = (typeof fraudCases)[0];

function FraudCaseRow({ caseItem }: { caseItem: FraudCase }) {
  const getRiskBadgeVariant = (risk: string) => {
    if (risk === "Alto Risco") return "destructive";
    if (risk === "Médio Risco") return "secondary";
    return "outline";
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{caseItem.id}</TableCell>
      <TableCell>{caseItem.name}</TableCell>
      <TableCell>
        <Badge variant={getRiskBadgeVariant(caseItem.risk)}>
          {caseItem.risk}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="outline">{caseItem.status}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{caseItem.type}</TableCell>
      <TableCell className="hidden md:table-cell text-right">
        {caseItem.value}
      </TableCell>
      <TableCell className="hidden md:table-cell">{caseItem.date}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/fraudes/${caseItem.id}`}>Ver Detalhes</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Atribuir Analista</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Arquivar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

function CasesTable({ cases }: { cases: FraudCase[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Casos de Fraude</CardTitle>
        <CardDescription>
          Gerencie e analise os casos de fraude detectados.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Contribuinte</TableHead>
              <TableHead>Risco</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Tipo</TableHead>
              <TableHead className="hidden md:table-cell text-right">
                Valor
              </TableHead>
              <TableHead className="hidden md:table-cell">Data</TableHead>
              <TableHead>
                <span className="sr-only">Ações</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cases.map((caseItem) => (
              <FraudCaseRow key={caseItem.id} caseItem={caseItem} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default function FraudesPage() {
  const [activeTab, setActiveTab] = React.useState('all');

  const filteredCases = React.useMemo(() => {
    switch (activeTab) {
      case 'high-risk':
        return fraudCases.filter((c) => c.risk === "Alto Risco");
      case 'pending':
        return fraudCases.filter((c) => c.status === "Pendente" || c.status === 'Em Análise');
      case 'resolved':
        return fraudCases.filter((c) => c.status === "Resolvido");
      default:
        return fraudCases;
    }
  }, [activeTab]);

  return (
    <div className="grid flex-1 items-start gap-4">
      <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-destructive/10 border-destructive/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-destructive">
                Alertas Críticos
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">12</div>
              <p className="text-xs text-muted-foreground">
                Casos de alto risco pendentes
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-warning/10 border-warning/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-warning">
                Em Processamento
              </CardTitle>
              <Activity className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">87</div>
              <p className="text-xs text-muted-foreground">
                Casos e análises em andamento
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-success/10 border-success/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-success">
                Concluídos
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">315</div>
              <p className="text-xs text-muted-foreground">
                Casos resolvidos neste mês
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Valor Recuperado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">R$ 1.8M</p>
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="all" onValueChange={setActiveTab} value={activeTab}>
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="high-risk">Alto Risco</TabsTrigger>
              <TabsTrigger value="pending">Pendente</TabsTrigger>
              <TabsTrigger value="resolved" className="hidden sm:flex">
                Resolvido
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filtro
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Tipo de Fraude
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Status</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Exportar
                </span>
              </Button>
              <AnomalyDetector />
            </div>
          </div>
          <TabsContent value={activeTab}>
            <CasesTable cases={filteredCases} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
