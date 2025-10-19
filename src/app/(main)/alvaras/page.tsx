"use client"

import React, { useState, useEffect } from 'react';
import {
  ListFilter,
  File,
  Percent,
  Clock,
  XCircle,
  ThumbsUp,
  BrainCircuit
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
import { Progress } from "@/components/ui/progress";


import { AlvaraCaseRow } from './_components/alvara-case-row';

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
    const [cases, setCases] = useState<AlvaraCase[]>(alvaraCases);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState("");

    const handleRunIA = () => {
        setIsAnalyzing(true);
        setProgress(0);
        setProgressMessage("Analisando padrões de alvarás e cruzando bases de dados...");

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        setTimeout(() => {
            setProgressMessage("Processando alvarás...");
        }, 1000);

        setTimeout(() => {
            setIsAnalyzing(false);
            const newCase: AlvaraCase = {
                id: "ALV-006",
                protocolo: "152025023232",
                solicitante: "Construtora Garcia Ltda",
                status: "Aprovado",
                localidade: "Camaçari/BA",
                valor: "R$ 1.500.000,00",
                data: new Date().toLocaleDateString('pt-BR'),
            };
            setCases(prevCases => [newCase, ...prevCases]);
        }, 2000);
    };

    return (
        <div className="space-y-6">
            {isAnalyzing && (
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-semibold">{progressMessage}</p>
                            <p className="text-sm text-muted-foreground">{progress}% concluído</p>
                        </div>
                    </div>
                    <Progress value={progress} />
                </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-success/10 border-success/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-success">Taxa de Aprovação</CardTitle>
                    <ThumbsUp className="h-4 w-4 text-success" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold text-success">20%</div>
                    <p className="text-xs text-muted-foreground">1 de 5 alvarás aprovados</p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-warning/10 border-warning/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-warning">Alvarás Pendentes</CardTitle>
                    <Percent className="h-4 w-4 text-warning" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold text-warning">60%</div>
                    <p className="text-xs text-muted-foreground">3 de 5 casos pendentes</p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-destructive/10 border-destructive/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-destructive">Taxa de Reprovação</CardTitle>
                    <XCircle className="h-4 w-4 text-destructive" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold text-destructive">20%</div>
                    <p className="text-xs text-muted-foreground">1 de 5 alvarás reprovados</p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Tempo Médio de Aprovação</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-xl font-bold">1 minuto e 20 segundos</div>
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
                    <span className="sr-only sm:not-sr-only sm:whitespace-rap">
                    Exportar
                    </span>
                </Button>
                <Button size="sm" className="h-8 gap-1" onClick={handleRunIA} disabled={isAnalyzing}>
                    <BrainCircuit className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        {isAnalyzing ? "Analisando..." : "Rodar IA Agora"}
                    </span>
                </Button>
                </div>
            </div>
            <CasesTable cases={cases} />
        </div>
    );
}
