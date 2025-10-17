
import React from 'react';
import {
  ListFilter,
  MoreHorizontal,
  File,
  Percent,
  Clock,
  XCircle,
  ThumbsUp
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
import { alvaraCases, type AlvaraCase } from '@/lib/alvaras-mock-data';


function AlvaraCaseRow({ caseItem }: { caseItem: AlvaraCase }) {
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Aprovado":
        return "default";
      case "Reprovado":
        return "destructive";
      case "Em Análise":
        return "outline";
      case "Pendente":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{caseItem.id}</TableCell>
      <TableCell>{caseItem.protocolo}</TableCell>
      <TableCell>{caseItem.solicitante}</TableCell>
      <TableCell>
        <Badge variant={getStatusBadgeVariant(caseItem.status)}>
          {caseItem.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{caseItem.localidade}</TableCell>
      <TableCell className="hidden md:table-cell text-right">
        {caseItem.valor}
      </TableCell>
      <TableCell className="hidden md:table-cell">{caseItem.data}</TableCell>
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
              <a href={`/alvaras/${caseItem.id}`}>Ver Relatório</a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Arquivar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

function CasesTable({ cases }: { cases: AlvaraCase[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Processos de Alvará de Habite-se</CardTitle>
        <CardDescription>
          Acompanhe e gerencie todas as solicitações de alvará.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Protocolo</TableHead>
              <TableHead>Solicitante</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Localidade</TableHead>
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
              <AlvaraCaseRow key={caseItem.id} caseItem={caseItem} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default function AlvarasPage() {
  return (
    <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-success/10 border-success/20">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-success">Taxa de Aprovação</CardTitle>
                <ThumbsUp className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold text-success">60%</div>
                <p className="text-xs text-muted-foreground">3 de 5 alvarás aprovados</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-warning/10 border-warning/20">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-warning">Alvarás Pendentes</CardTitle>
                <Percent className="h-4 w-4 text-warning" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold text-warning">40%</div>
                <p className="text-xs text-muted-foreground">2 de 5 casos pendentes</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-destructive/10 border-destructive/20">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-destructive">Taxa de Rejeição</CardTitle>
                <XCircle className="h-4 w-4 text-destructive" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold text-destructive">0%</div>
                <p className="text-xs text-muted-foreground">Nenhum alvará rejeitado</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Tempo Médio de Aprovação</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">26,5 dias</div>
                <p className="text-xs text-muted-foreground">Média para todo o processo</p>
                </CardContent>
            </Card>
        </div>
        <div className="flex items-center">
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
                    Status
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Localidade</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Exportar
                </span>
            </Button>
            </div>
        </div>
        <CasesTable cases={alvaraCases} />
    </div>
  );
}
