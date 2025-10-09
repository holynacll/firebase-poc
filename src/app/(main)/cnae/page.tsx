import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bot, Search } from "lucide-react";

const companies = [
  { id: 1, name: "Soluções Web Criativas", declared: "6201-5/01", suggested: "6203-1/00", status: "Inconsistente" },
  { id: 2, name: "Consultoria Delta", declared: "7020-4/00", suggested: "7020-4/00", status: "OK" },
  { id: 3, name: "Comércio Varejista Alfa", declared: "4711-3/02", suggested: "4712-1/00", status: "Requer Análise" },
  { id: 4, name: "Indústria Metalúrgica Gama", declared: "2599-3/99", suggested: "2599-3/99", status: "OK" },
];

export default function CnaePage() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Classificação CNAE de Empresas</CardTitle>
            <CardDescription>Análise da IA para correção e adequação do CNAE declarado.</CardDescription>
            <div className="relative pt-2">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar empresa..." className="pl-8" />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Empresa</TableHead>
                        <TableHead>CNAE Declarado</TableHead>
                        <TableHead>CNAE Sugerido (IA)</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ação</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies.map(c => (
                        <TableRow key={c.id}>
                            <TableCell className="font-semibold">{c.name}</TableCell>
                            <TableCell>{c.declared}</TableCell>
                            <TableCell>{c.suggested}</TableCell>
                            <TableCell>
                                <Badge variant={c.status === 'Inconsistente' ? 'destructive' : c.status === 'OK' ? 'default' : 'secondary'}>{c.status}</Badge>
                            </TableCell>
                            <TableCell><Button variant="outline" size="sm">Analisar</Button></TableCell>
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
                <CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5"/> Análise da IA</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <p className="text-sm font-semibold">Análise de 'Soluções Web Criativas':</p>
                    <p className="text-sm text-muted-foreground">
                        A análise do site da empresa, notas fiscais emitidas e descrição de serviços indica que a atividade principal é "Desenvolvimento de programas de computador sob encomenda" (6201-5/01), mas também há forte evidência de "Consultoria em tecnologia da informação" (6204-0/00), que não está declarado. A atividade declarada corresponde parcialmente. Sugestão: Reclassificar para CNAE principal 6203-1/00 e adicionar secundário 6204-0/00.
                    </p>
                    <Button className="w-full">Aceitar Sugestão</Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
