import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

const monitoredPeople = [
  { id: 1, name: "João da Silva", type: "Pessoa Física", connections: 12, risk: "Alto" },
  { id: 2, name: "Omega Soluções", type: "Pessoa Jurídica", connections: 45, risk: "Crítico" },
  { id: 3, name: "Maria Oliveira", type: "Pessoa Física", connections: 5, risk: "Baixo" },
  { id: 4, name: "Alfa Construções", type: "Pessoa Jurídica", connections: 28, risk: "Médio" },
  { id: 5, name: "Pedro Martins", type: "Sócio", connections: 8, risk: "Alto" },
  { id: 6, name: "Consultoria XYZ", type: "Fornecedor", connections: 15, risk: "Médio" },
];

export default function RedesPage() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 h-[calc(100vh-10rem)]">
      <Card className="md:col-span-1 lg:col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline">Pessoas Monitoradas</CardTitle>
          <div className="relative pt-2">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por nome ou CPF/CNPJ..." className="pl-8" />
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <ScrollArea className="h-full">
            <div className="space-y-2 p-4 pt-0">
              {monitoredPeople.map((person) => (
                <div key={person.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer">
                  <div>
                    <p className="font-semibold">{person.name}</p>
                    <p className="text-sm text-muted-foreground">{person.type} • {person.connections} conexões</p>
                  </div>
                  <Badge variant={person.risk === 'Alto' || person.risk === 'Crítico' ? 'destructive' : 'secondary'}>{person.risk}</Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <Card className="md:col-span-2 lg:col-span-3 flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline">Análise de Redes Financeiras e Societárias</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center border-2 border-dashed border-border">
            <p className="text-muted-foreground">Selecione uma pessoa para visualizar a rede de conexões.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
