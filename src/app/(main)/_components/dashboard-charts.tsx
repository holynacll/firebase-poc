"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";

const arrecadacaoData = [
  { month: "Jan", arrecadacao: 8.5 },
  { month: "Fev", arrecadacao: 9.2 },
  { month: "Mar", arrecadacao: 11.3 },
  { month: "Abr", arrecadacao: 10.8 },
  { month: "Mai", arrecadacao: 12.1 },
  { month: "Jun", arrecadacao: 14.7 },
  { month: "Jul", arrecadacao: 13.9 },
  { month: "Ago", arrecadacao: 15.2, "previsao": 15.0 },
];

const inadimplenciaData = [
  { setor: "Serviços", inadimplencia: 12.5 },
  { setor: "Comércio", inadimplencia: 9.8 },
  { setor: "Indústria", inadimplencia: 7.2 },
  { setor: "Imobiliário", inadimplencia: 5.5 },
  { setor: "Outros", inadimplencia: 15.1 },
];

const iaDetectionsData = [
    { name: 'Omissão de Receita', value: 45, fill: 'hsl(var(--chart-1))' },
    { name: 'Crédito Indevido', value: 25, fill: 'hsl(var(--chart-2))' },
    { name: 'Cadastro Desatualizado', value: 18, fill: 'hsl(var(--chart-3))' },
    { name: 'Outros', value: 12, fill: 'hsl(var(--chart-4))' },
];

const chartConfig: ChartConfig = {
  arrecadacao: {
    label: "Arrecadação (R$ M)",
    color: "hsl(var(--chart-1))",
  },
  previsao: {
    label: "Previsão (R$ M)",
    color: "hsl(var(--chart-2))",
  },
  inadimplencia: {
    label: "Inadimplência (%)",
    color: "hsl(var(--chart-1))",
  }
};


export function ArrecadacaoChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolução da Arrecadação</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={arrecadacaoData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis strokeWidth={0} tickFormatter={(value) => `R$${value}M`} />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="arrecadacao" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 5, fill: 'hsl(var(--primary))' }} activeDot={{ r: 7 }}/>
                    <Line type="monotone" dataKey="previsao" stroke="hsl(var(--accent))" strokeDasharray="5 5" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function InadimplenciaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inadimplência por Setor</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={inadimplenciaData} layout="vertical" margin={{ right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <YAxis type="category" dataKey="setor" width={80} tickLine={false} axisLine={false} />
                <XAxis type="number" hide />
                <Tooltip cursor={{fill: 'hsl(var(--muted))'}} content={<ChartTooltipContent />} />
                <Bar dataKey="inadimplencia" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} barSize={24} />
            </BarChart>
            </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function IaDetectionsChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Detecções da IA</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Tooltip content={<ChartTooltipContent nameKey="name" />} />
                            <Pie
                                data={iaDetectionsData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
                                innerRadius={60}
                                labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                    const RADIAN = Math.PI / 180;
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                    
                                    if (percent < 0.05) return null;

                                    return (
                                    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className="text-xs font-bold">
                                        {`${(percent * 100).toFixed(0)}%`}
                                    </text>
                                    );
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
