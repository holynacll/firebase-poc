
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Building2, Car, HomeIcon, Landmark, Scale, Search, Users, CheckCircle, Database, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DataSource = { 
  title: string; 
  description: string; 
  icon: LucideIcon,
  records: string;
}

const dataSources: DataSource[] = [
  { title: "Receita Federal", description: "Dados de CPF/CNPJ, declarações e faturamento.", icon: Landmark, records: "2.3M registros" },
  { title: "DETRAN", description: "Informações sobre veículos e proprietários.", icon: Car, records: "1.8M registros" },
  { title: "Juntas Comerciais", description: "Registros de empresas, sócios e capital social.", icon: Building2, records: "450K registros" },
  { title: "Instituições Financeiras", description: "Movimentações financeiras e extratos.", icon: Banknote, records: "3.1M registros" },
  { title: "Cartórios de Imóveis", description: "Registros de propriedades e transações.", icon: HomeIcon, records: "890K registros" },
  { title: "IBGE", description: "Dados demográficos e estatísticos.", icon: Users, records: "5.2M registros" },
];

export default function CruzamentoPage() {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const toggleSelection = (title: string) => {
    setSelectedSources(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline">Cruzamento Inteligente de Dados</h1>
          <p className="text-muted-foreground">
            Análise inteligente através do cruzamento de múltiplas bases de dados.
          </p>
        </div>
        <Button size="lg" disabled={selectedSources.length === 0}>
          <Zap className="mr-2 h-4 w-4" />
          Executar Cruzamento
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary"/>
            <CardTitle>Bases de Dados Disponíveis</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dataSources.map((source) => {
              const isSelected = selectedSources.includes(source.title);
              return (
                <Card 
                  key={source.title} 
                  className={cn(
                    "group cursor-pointer transition-all duration-200 border-2",
                    isSelected ? "border-primary shadow-lg scale-[1.02]" : "border-border hover:border-primary/50 hover:shadow-md"
                  )}
                  onClick={() => toggleSelection(source.title)}
                >
                  <CardContent className="p-4 flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base font-semibold">{source.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{source.records}</p>
                    </div>
                     <div className="flex items-center gap-2">
                       <div className="flex items-center gap-1 text-xs text-success">
                          <div className="w-2 h-2 rounded-full bg-success"/> Online
                       </div>
                       {isSelected && <CheckCircle className="h-5 w-5 text-primary transition-all scale-100 animate-in zoom-in-50" />}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
           <p className="text-sm text-muted-foreground mt-4">
            {selectedSources.length} de {dataSources.length} bases selecionadas
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
