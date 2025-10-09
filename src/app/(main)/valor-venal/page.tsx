import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ArrowDown, ArrowUp, BarChart, Check, CheckCircle, List, MapPin, TrendingDown, TrendingUp } from "lucide-react";

const properties = [
    { id: '1', address: 'Rua das Flores, 123 - Centro', current: 450000, suggested: 680000, area: 250, type: 'Residencial', alert: true, change: 51.1 },
    { id: '2', address: 'Av. Paulista, 1500 - Bela Vista', current: 2800000, suggested: 3200000, area: 800, type: 'Comercial', alert: true, change: 14.3 },
    { id: '3', address: 'Rua Augusta, 456 - Consolação', current: 1200000, suggested: 1150000, area: 180, type: 'Apartamento', alert: false, change: -4.2 },
];

const kpis = [
    { title: "Total de Imóveis", value: "3", icon: MapPin, color: "text-blue-500", bgColor: "bg-blue-50" },
    { title: "Para Aumento", value: "2", icon: TrendingUp, color: "text-success", bgColor: "bg-success/10" },
    { title: "Para Redução", value: "1", icon: TrendingDown, color: "text-destructive", bgColor: "bg-destructive/10" },
    { title: "Precisão IA", value: "94.2%", icon: CheckCircle, color: "text-primary", bgColor: "bg-primary/10" }
]

export default function ValorVenalPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold font-headline">Atualização do Valor Venal</h1>
                    <p className="text-muted-foreground">IA para análise automática e sugestão de valores venais</p>
                </div>
                <Button><List className="mr-2 h-4 w-4" /> Analisar Valores</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {kpis.map(kpi => (
                    <Card key={kpi.title} className={`${kpi.bgColor} border-0`}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                            <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">{kpi.value}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <h2 className="text-xl font-semibold">Análise por Imóvel</h2>
            
            <div className="space-y-4">
                {properties.map(p => {
                    const isIncrease = p.change > 0;
                    const isDecrease = p.change < 0;
                    
                    return (
                        <Card key={p.id} className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                            <CardContent className="p-6 grid md:grid-cols-5 lg:grid-cols-6 gap-y-4 gap-x-6 items-center">
                                <div className="md:col-span-3 lg:col-span-4">
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                        <h3 className="text-lg font-semibold">{p.address}</h3>
                                        {isIncrease && <Badge variant="default" className="bg-green-100 text-green-800"><TrendingUp className="h-4 w-4 mr-1"/> +{p.change.toFixed(1)}%</Badge>}
                                        {isDecrease && <Badge variant="destructive"> <TrendingDown className="h-4 w-4 mr-1"/> {p.change.toFixed(1)}%</Badge>}
                                        {!isIncrease && !isDecrease && <Badge variant="secondary">Manter Valor</Badge>}
                                    </div>
                                     <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div><p className="text-sm text-muted-foreground">Valor Atual</p><p className="font-medium">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.current)}</p></div>
                                        <div><p className="text-sm text-muted-foreground">Valor Sugerido</p><p className={`font-bold ${isIncrease ? 'text-green-600' : isDecrease ? 'text-red-600' : ''}`}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.suggested)}</p></div>
                                        <div><p className="text-sm text-muted-foreground">Área</p><p>{p.area}m²</p></div>
                                        <div><p className="text-sm text-muted-foreground">Tipo</p><p>{p.type}</p></div>
                                    </div>
                                    {p.alert && 
                                        <div className="mt-4 bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-md p-2 flex items-center gap-2">
                                            <AlertTriangle className="h-4 w-4"/>
                                            Alteração estrutural detectada por IA
                                        </div>
                                    }
                                </div>
                                <div className="md:col-span-2 lg:col-span-2 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-end gap-2">
                                    <Button variant="outline" className="w-full sm:w-auto md:w-full lg:w-auto"><MapPin className="mr-2"/>Ver no Mapa</Button>
                                    <Button className="w-full sm:w-auto md:w-full lg:w-auto" disabled={!isIncrease && !isDecrease}><Check className="mr-2"/>Aplicar Sugestão</Button>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
