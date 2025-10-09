
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LineChart,
  BarChart,
  TrendingUp,
  Target,
  Clock,
  ThumbsUp,
} from 'lucide-react';
import { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Bar,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';

const kpiData = {
  conservador: [
    { title: 'Aumento Receita', value: '+10.2%', icon: TrendingUp },
    { title: 'Receita Adicional', value: 'R$ 4.1M', icon: Target },
    { title: 'Prazo de Implementação', value: '36 meses', icon: Clock },
    { title: 'Confiabilidade', value: '95.8%', icon: ThumbsUp },
  ],
  moderado: [
    { title: 'Aumento Receita', value: '+14.5%', icon: TrendingUp },
    { title: 'Receita Adicional', value: 'R$ 5.8M', icon: Target },
    { title: 'Prazo de Implementação', value: '30 meses', icon: Clock },
    { title: 'Confiabilidade', value: '94.1%', icon: ThumbsUp },
  ],
  agressivo: [
    { title: 'Aumento Receita', value: '+18.7%', icon: TrendingUp },
    { title: 'Receita Adicional', value: 'R$ 7.2M', icon: Target },
    { title: 'Prazo de Implementação', value: '24 meses', icon: Clock },
    { title: 'Confiabilidade', value: '92.5%', icon: ThumbsUp },
  ],
};

const analysisData = {
  conservador: {
    impactosPositivos: [
      'Aumento da base tributária em 15%',
      'Melhoria na eficiência da cobrança',
      'Redução da sonegação em 8%',
    ],
    desafios: [
      'Resistência inicial dos contribuintes',
      'Necessidade de capacitação',
      'Longo período de adaptação',
    ],
    recomendacoes: [
      'Implementação gradual por setores',
      'Campanha de educação fiscal',
      'Monitoramento contínuo',
    ],
  },
  moderado: {
    impactosPositivos: [
      'Aumento da base tributária em 20%',
      'Melhoria na eficiência da cobrança em 12%',
      'Redução da sonegação em 12%',
      'Modernização dos processos',
    ],
    desafios: [
      'Resistência inicial dos contribuintes',
      'Necessidade de capacitação',
      'Investimento em tecnologia',
    ],
    recomendacoes: [
      'Implementação gradual por setores',
      'Campanha de educação fiscal',
      'Monitoramento contínuo',
      'Ajustes baseados em dados',
    ],
  },
  agressivo: {
    impactosPositivos: [
      'Aumento da base tributária em 23%',
      'Melhoria na eficiência da cobrança',
      'Redução da sonegação em 15%',
      'Modernização dos processos',
    ],
    desafios: [
      'Resistência inicial dos contribuintes',
      'Necessidade de capacitação',
      'Investimento em tecnologia',
      'Período de adaptação',
    ],
    recomendacoes: [
      'Implementação gradual por setores',
      'Campanha de educação fiscal',
      'Monitoramento contínuo',
      'Ajustes baseados em dados',
    ],
  },
};

const chartData = [
    { month: "Jan", arrecadacao: 12.5, projecao: 13.8, impacto: 1250 },
    { month: "Fev", arrecadacao: 12.2, projecao: 13.5, impacto: 1280 },
    { month: "Mar", arrecadacao: 12.3, projecao: 13.2, impacto: 1300 },
    { month: "Abr", arrecadacao: 12.8, projecao: 13.6, impacto: 1320 },
    { month: "Mai", arrecadacao: 13.1, projecao: 13.9, impacto: 1350 },
    { month: "Jun", arrecadacao: 13.7, projecao: 14.1, impacto: 1400 },
];

export default function SimulacaoPage() {
  const [selectedScenario, setSelectedScenario] = useState<keyof typeof kpiData | null>(null);
  const [simulatedScenario, setSimulatedScenario] = useState<keyof typeof kpiData | null>(null);
  
  const handleSimulate = () => {
    setSimulatedScenario(selectedScenario);
  }

  const selectedKpis = simulatedScenario ? kpiData[simulatedScenario] : [];
  const selectedAnalysis = simulatedScenario ? analysisData[simulatedScenario] : null;

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold font-headline">Simulação de Cenários Pós-Reforma</h1>
                <p className="text-muted-foreground">Modelagem preditiva dos impactos da reforma tributária</p>
            </div>
            <Button size="lg" onClick={handleSimulate} disabled={!selectedScenario}>Executar Simulação</Button>
        </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Configuração do Cenário</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div className="space-y-2 col-span-2">
                <Label htmlFor="tipo-reforma">Tipo de Cenário</Label>
                <Select onValueChange={(value) => setSelectedScenario(value as keyof typeof kpiData)}>
                  <SelectTrigger id="tipo-reforma">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservador">Conservador - Implementação gradual</SelectItem>
                    <SelectItem value="moderado">Moderado - Implementação padrão</SelectItem>
                    <SelectItem value="agressivo">Agressivo - Implementação acelerada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="variacao-iptu">Variação IPTU (%)</Label>
                <Input id="variacao-iptu" type="number" placeholder="Ex: 5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="variacao-iss">Variação ISS (%)</Label>
                <Input id="variacao-iss" type="number" placeholder="Ex: -2" />
              </div>
                <div className="space-y-2">
                <Label htmlFor="variacao-itbi">Variação ITBI (%)</Label>
                <Input id="variacao-itbi" type="number" placeholder="Ex: 12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prazo">Prazo (meses)</Label>
                <Input id="prazo" type="number" placeholder="Ex: 24" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Parâmetros Econômicos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="inflacao">Inflação Projetada (%)</Label>
                <Input id="inflacao" type="number" placeholder="Ex: 4.5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="crescimento-pib">Crescimento PIB (%)</Label>
                <Input id="crescimento-pib" type="number" placeholder="Ex: 2.8" />
              </div>
              <div className="space-y-2">
                <Label>Taxa de Desemprego (%)</Label>
                <Input type="number" placeholder="Ex: 8.2" />
              </div>
              <div className="space-y-2">
                <Label>Taxa de Compliance (%)</Label>
                <Input type="number" placeholder="Ex: 85" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {simulatedScenario && (
          <div className="space-y-6 animate-fade-in-up">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedKpis.map(kpi => (
                      <Card key={kpi.title} className="flex items-center p-4 gap-4">
                          <div className="bg-primary/10 text-primary p-3 rounded-lg">
                            <kpi.icon className="h-6 w-6"/>
                          </div>
                          <div>
                            <p className="text-2xl font-bold">{kpi.value}</p>
                            <p className="text-sm text-muted-foreground">{kpi.title}</p>
                          </div>
                      </Card>
                  ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><LineChart className="h-5 w-5 text-muted-foreground"/> Projeção de Receitas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-64 w-full">
                        <RechartsLineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} />
                            <YAxis strokeWidth={0} tickFormatter={(value) => `R$${value}M`} />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Line type="monotone" dataKey="arrecadacao" name="Arrecadação" stroke="hsl(var(--muted-foreground))" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="projecao" name="Projeção" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4, fill: 'hsl(var(--primary))' }} activeDot={{ r: 6 }}/>
                        </RechartsLineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BarChart className="h-5 w-5 text-muted-foreground"/> Impacto por Mês</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <ChartContainer config={{}} className="h-64 w-full">
                        <RechartsBarChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} />
                            <YAxis strokeWidth={0} axisLine={false} tickLine={false} tickFormatter={(value) => `${value/1000}K`} />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="impacto" name="Impacto" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </RechartsBarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
            </div>
             {selectedAnalysis && (
                <Card>
                    <CardHeader>
                        <CardTitle>Análise Detalhada</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-semibold mb-2 text-success">Impactos Positivos</h3>
                            <ul className="space-y-2 text-sm">
                                {selectedAnalysis.impactosPositivos.map((item, i) => <li key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0"/>{item}</li>)}
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-semibold mb-2 text-warning">Desafios</h3>
                            <ul className="space-y-2 text-sm">
                                {selectedAnalysis.desafios.map((item, i) => <li key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-warning mt-2 shrink-0"/>{item}</li>)}
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-semibold mb-2 text-primary">Recomendações</h3>
                            <ul className="space-y-2 text-sm">
                                {selectedAnalysis.recomendacoes.map((item, i) => <li key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"/>{item}</li>)}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            )}
          </div>
      )}
    </div>
  );
}
