import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, Bot, Building, CheckCircle, Clock, Search } from "lucide-react";

const companies = [
  { 
    id: 1, 
    name: "TechSoft Solutions Ltda", 
    cnpj: "12.345.678/0001-90",
    cnae: "6201-5/00",
    cnaeDescription: "Desenvolvimento de programas de computador sob encomenda", 
    status: "Pendente" 
  },
  { 
    id: 2, 
    name: "Consultoria ABC S/A", 
    cnpj: "98.765.432/0001-10",
    cnae: "7020-4/00",
    cnaeDescription: "Atividades de consultoria em gestão empresarial", 
    status: "Validado" 
  },
  { 
    id: 3, 
    name: "Distribuidora XYZ Ltda", 
    cnpj: "11.222.333/0001-44",
    cnae: "4691-5/00",
    cnaeDescription: "Comércio atacadista de mercadorias em geral", 
    status: "Divergência" 
  },
];

const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
        case 'Validado':
            return <Badge variant="default" className="bg-success text-success-foreground hover:bg-success/80"><CheckCircle className="h-3 w-3 mr-1" />{status}</Badge>;
        case 'Divergência':
            return <Badge variant="destructive"><AlertTriangle className="h-3 w-3 mr-1" />{status}</Badge>;
        case 'Pendente':
        default:
            return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" />{status}</Badge>;
    }
}


export default function CnaePage() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                <CardTitle>Empresas Cadastradas</CardTitle>
            </div>
            <div className="relative pt-2">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nome ou CNPJ..." className="pl-8" />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[35%]">Empresa</TableHead>
                        <TableHead className="w-[35%]">CNAE Declarado</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ação</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies.map(c => (
                        <TableRow key={c.id}>
                            <TableCell>
                                <p className="font-semibold">{c.name}</p>
                                <p className="text-xs text-muted-foreground">{c.cnpj}</p>
                            </TableCell>
                            <TableCell>
                                <p className="font-medium">{c.cnae}</p>
                                <p className="text-xs text-muted-foreground">{c.cnaeDescription}</p>
                            </TableCell>
                            <TableCell>
                                <StatusBadge status={c.status} />
                            </TableCell>
                            <TableCell className="text-right"><Button variant="outline" size="sm">Iniciar Pesquisa</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-1">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5"/> Análise de IA</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center h-48 bg-muted rounded-lg border-2 border-dashed">
                    <p className="text-sm text-center text-muted-foreground">Selecione uma empresa para iniciar a análise</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
