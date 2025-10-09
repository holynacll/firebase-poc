import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Building2, Car, Landmark, Scale, Search, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const dataSources: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Receita Federal", description: "Dados de CPF/CNPJ, declarações e faturamento.", icon: Landmark },
  { title: "DETRAN", description: "Informações sobre veículos e proprietários.", icon: Car },
  { title: "Juntas Comerciais", description: "Registros de empresas, sócios e capital social.", icon: Building2 },
  { title: "Instituições Financeiras", description: "Movimentações financeiras e extratos.", icon: Banknote },
  { title: "Cartórios de Imóveis", description: "Registros de propriedades e transações.", icon: Home },
  { title: "Tribunais de Justiça", description: "Processos judiciais e pendências.", icon: Scale },
  { title: "Bases de Terceiros", description: "Fontes de dados de parceiros e bureaus de crédito.", icon: Users },
  { title: "Busca Inteligente", description: "Realize uma busca customizada em todas as bases.", icon: Search },
];

export default function CruzamentoPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Cruzamento de Dados</h1>
        <p className="text-muted-foreground">
          Selecione as bases de dados para iniciar a análise e encontrar correlações.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dataSources.map((source) => (
          <Card key={source.title} className="group flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                  <source.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg">{source.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">{source.description}</p>
            </CardContent>
             <div className="p-6 pt-0">
                <Button className="w-full transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    Consultar
                </Button>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
