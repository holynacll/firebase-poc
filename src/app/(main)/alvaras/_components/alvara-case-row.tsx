"use client";

import React from 'react';
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { type AlvaraCase } from '@/lib/alvaras-mock-data';

export function AlvaraCaseRow({ caseItem }: { caseItem: AlvaraCase }) {
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

  const handleReportClick = () => {
    if (caseItem.status === "Aprovado") {
      window.open("/reports/processo_152025023226.pdf", "_blank")
    }
    else if (caseItem.status === "Reprovado") {
      window.open("/reports/processo_152025023227.pdf", "_blank")
    }
    else if (caseItem.status === "Pendente") {
      alert("O processo ainda está pendente.");
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
            <DropdownMenuItem onClick={handleReportClick}>Ver Relatório</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Arquivar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}