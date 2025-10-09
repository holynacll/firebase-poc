import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

const taxpayers = [
    { id: 1, name: 'João da Silva', doc: '123.456.789-00', type: 'PF' },
    { id: 2, name: 'Omega Soluções', doc: '12.345.678/0001-99', type: 'PJ' },
    { id: 3, name: 'Maria Oliveira', doc: '987.654.321-11', type: 'PF' },
    { id: 4, name: 'Alfa Construções', doc: '98.765.432/0001-22', type: 'PJ' },
];

export default function CadastroUnicoPage() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 h-[calc(100vh-10rem)]">
      <Card className="md:col-span-1 lg:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>Contribuintes</CardTitle>
          <div className="relative pt-2">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar contribuinte..." className="pl-8" />
          </div>
          <Tabs defaultValue="all" className="pt-2">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="pf">PF</TabsTrigger>
              <TabsTrigger value="pj">PJ</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <ScrollArea className="h-full">
            <div className="space-y-1 p-4 pt-0">
              {taxpayers.map(t => (
                <div key={t.id} className="p-3 rounded-lg hover:bg-muted cursor-pointer">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.doc}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <div className="md:col-span-2 lg:col-span-3">
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-2xl font-headline">Omega Soluções LTDA</CardTitle>
                        <CardDescription>CNPJ: 12.345.678/0001-99</CardDescription>
                    </div>
                    <Badge variant="destructive">Alto Risco Fiscal</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="dados">
                    <TabsList>
                        <TabsTrigger value="dados">Dados Básicos</TabsTrigger>
                        <TabsTrigger value="contatos">Contatos</TabsTrigger>
                        <TabsTrigger value="enderecos">Endereços</TabsTrigger>
                        <TabsTrigger value="processos">Processos</TabsTrigger>
                        <TabsTrigger value="dividas">Dívida Ativa</TabsTrigger>
                    </TabsList>
                    <TabsContent value="dados" className="mt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div><p className="text-sm text-muted-foreground">Razão Social</p><p>Omega Soluções em Tecnologia LTDA</p></div>
                            <div><p className="text-sm text-muted-foreground">Nome Fantasia</p><p>Omega Soluções</p></div>
                            <div><p className="text-sm text-muted-foreground">Data de Abertura</p><p>15/03/2018</p></div>
                            <div><p className="text-sm text-muted-foreground">Situação Cadastral</p><Badge>Ativa</Badge></div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
         <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle>Processamento IA</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                        <Badge variant="destructive">ALERTA</Badge> Inconsistência entre faturamento declarado e movimentação financeira.
                    </li>
                    <li className="flex items-center gap-2">
                        <Badge variant="secondary">INFO</Badge> Quadro societário cruzado com 3 outras empresas sob investigação.
                    </li>
                    <li className="flex items-center gap-2">
                        <Badge>OK</Badge> Endereço fiscal validado com imagens de satélite.
                    </li>
                </ul>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
