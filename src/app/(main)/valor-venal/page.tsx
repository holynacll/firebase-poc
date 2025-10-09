import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowDown, ArrowUp, Bot, Building, Check, Database, List, Scaling } from "lucide-react";

const properties = [
    { id: '1', address: 'Rua das Flores, 123', current: 450000, suggested: 520000, area: 150, type: 'Residencial', alert: true },
    { id: '2', address: 'Av. Principal, 456', current: 1200000, suggested: 1200000, area: 300, type: 'Comercial', alert: false },
    { id: '3', address: 'Travessa dos Pássaros, 78', current: 320000, suggested: 290000, area: 90, type: 'Residencial', alert: false },
    { id: '4', address: 'Alameda Central, 90', current: 800000, suggested: 950000, area: 220, type: 'Misto', alert: true },
];

export default function ValorVenalPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card><CardHeader><CardTitle>Total de Imóveis</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">1.2M</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Para Aumento</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">45.281</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Para Redução</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">12.910</p></CardContent></Card>
                <Card><CardHeader><CardTitle>Precisão da IA</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">96.4%</p></CardContent></Card>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Imóveis para Revisão de Valor Venal</CardTitle>
                            <CardDescription>Lista de imóveis com sugestões de alteração baseadas na análise da IA.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Endereço</TableHead>
                                        <TableHead>Valor Atual</TableHead>
                                        <TableHead>Valor Sugerido</TableHead>
                                        <TableHead>Área (m²)</TableHead>
                                        <TableHead>Tipo</TableHead>
                                        <TableHead>Ação</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {properties.map(p => (
                                        <TableRow key={p.id}>
                                            <TableCell>
                                                {p.address}
                                                {p.alert && <Badge variant="destructive" className="ml-2 animate-pulse">IA Detectou Alteração</Badge>}
                                            </TableCell>
                                            <TableCell>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.current)}</TableCell>
                                            <TableCell className={p.suggested > p.current ? "text-green-600" : "text-red-600"}>
                                                <span className="flex items-center">
                                                    {p.suggested > p.current ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.suggested)}
                                                </span>
                                            </TableCell>
                                            <TableCell>{p.area}</TableCell>
                                            <TableCell>{p.type}</TableCell>
                                            <TableCell><Button variant="outline" size="sm">Analisar</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Metodologia da Avaliação</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold flex items-center gap-2"><Database className="h-4 w-4 text-primary"/> Dados Considerados</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                                    <li>Transações recentes na região</li>
                                    <li>Características do imóvel</li>
                                    <li>Infraestrutura do bairro</li>
                                    <li>Dados de zoneamento</li>
                                </ul>
                            </div>
                             <div>
                                <h4 className="font-semibold flex items-center gap-2"><Bot className="h-4 w-4 text-primary"/> Tecnologias Utilizadas</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                                    <li>Machine Learning (Regressão)</li>
                                    <li>Análise de Imagens de Satélite</li>
                                    <li>Processamento de Linguagem Natural</li>
                                </ul>
                            </div>
                             <div>
                                <h4 className="font-semibold flex items-center gap-2"><Check className="h-4 w-4 text-primary"/> Indicadores de Qualidade</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                                    <li>Acurácia do Modelo: 96.4%</li>
                                    <li>Índice de Dispersão: 8.9%</li>
                                    <li>Viés Médio: -1.2%</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
