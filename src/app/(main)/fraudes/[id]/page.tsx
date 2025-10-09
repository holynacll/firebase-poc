import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { fraudCaseDetails } from "@/lib/mock-data";
import { AlertTriangle, Banknote, Building2, Calendar, Car, Check, ChevronRight, Cpu, Database, File, Home, Landmark, ShieldCheck, User, Users } from "lucide-react";

const riskIndicators = [
    { name: "Inconsistência Patrimonial", value: 92, color: "bg-destructive" },
    { name: "Movimentação Atípica", value: 87, color: "bg-destructive" },
    { name: "Relacionamentos Suspeitos", value: 74, color: "bg-yellow-500" },
    { name: "Declarações Divergentes", value: 95, color: "bg-destructive" },
];

const evidences = [
    { type: 'Financeira', risk: 'Alta', description: 'Movimentação bancária 340% superior à renda declarada', source: 'Análise bancária BACEN' },
    { type: 'Patrimonial', risk: 'Alta', description: 'Aquisição de 3 imóveis de alto valor em 18 meses', source: 'Cruzamento cartorial' },
    { type: 'Comportamental', risk: 'Média', description: 'Operações triangulares entre empresas relacionadas', source: 'Análise de rede AI' },
];

const timeline = [
    { date: '09/01/2024', description: 'Primeira transação suspeita detectada pela IA.' },
    { date: '11/01/2024', description: 'Análise de rede identificou vínculos societários com empresas investigadas.' },
    { date: '13/01/2024', description: 'Cruzamento com base da Receita Federal confirmou divergência de faturamento.' },
    { date: '14/01/2024', description: 'Caso gerado automaticamente pela IA e atribuído para análise humana.' },
];

const nextSteps = [
    "Notificar contribuinte para esclarecimentos",
    "Solicitar documentação complementar (contratos, extratos)",
    "Agendar fiscalização presencial na sede da empresa",
    "Avaliar necessidade de autuação e lançamento de ofício"
];

export default function FraudDetailPage({ params }: { params: { id: string } }) {
    const { id, type, description, risk, value, detectionDate, confidence } = fraudCaseDetails;

    return (
        <div className="space-y-6 animate-fade-in-up">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold font-headline">Detalhes da Análise de Fraude - {id}</h1>
                    <p className="text-muted-foreground">{type}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline"><File className="mr-2"/>Gerar Relatório</Button>
                    <Button><ShieldCheck className="mr-2"/>Iniciar Fiscalização</Button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Main Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle>{description}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div>
                                <p className="text-sm text-muted-foreground">Risco</p>
                                <Badge variant="destructive" className="text-lg"><AlertTriangle className="mr-2"/> {risk}</Badge>
                            </div>
                             <div>
                                <p className="text-sm text-muted-foreground">Valor Envolvido</p>
                                <p className="text-lg font-bold">{value}</p>
                            </div>
                             <div>
                                <p className="text-sm text-muted-foreground">Data de Detecção</p>
                                <p className="text-lg font-bold">{detectionDate}</p>
                            </div>
                             <div>
                                <p className="text-sm text-muted-foreground">Confiança da IA</p>
                                <p className="text-lg font-bold text-primary">{confidence}</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contributor Data */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><User /> Dados do Contribuinte</CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                            <div><p className="text-sm text-muted-foreground">Nome/Razão Social</p><p>{fraudCaseDetails.contribuinte.nome}</p></div>
                            <div><p className="text-sm text-muted-foreground">CPF/CNPJ</p><p>{fraudCaseDetails.contribuinte.doc}</p></div>
                            <div><p className="text-sm text-muted-foreground">CNAE</p><p>{fraudCaseDetails.contribuinte.cnae}</p></div>
                            <div><p className="text-sm text-muted-foreground">Endereço</p><p>{fraudCaseDetails.contribuinte.endereco}</p></div>
                            <div><p className="text-sm text-muted-foreground">Patrimônio Declarado</p><p>{fraudCaseDetails.contribuinte.patrimonio}</p></div>
                            <div><p className="text-sm text-muted-foreground">Renda Declarada</p><p>{fraudCaseDetails.contribuinte.renda}</p></div>
                        </CardContent>
                    </Card>

                    {/* Evidences */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Evidências Identificadas</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Tipo</TableHead>
                                        <TableHead>Risco</TableHead>
                                        <TableHead className="w-[50%]">Descrição</TableHead>
                                        <TableHead>Fonte</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {evidences.map(e => (
                                        <TableRow key={e.type}>
                                            <TableCell>{e.type}</TableCell>
                                            <TableCell><Badge variant={e.risk === 'Alta' ? 'destructive' : 'secondary'}>{e.risk}</Badge></TableCell>
                                            <TableCell>{e.description}</TableCell>
                                            <TableCell>{e.source}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                           </Table>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    {/* AI Analysis */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Cpu />Análise da IA</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center text-sm"><span>Algoritmo:</span><span className="font-semibold">{fraudCaseDetails.analiseIA.algoritmo}</span></div>
                            <div className="flex justify-between items-center text-sm"><span>Processamento:</span><span className="font-semibold">{fraudCaseDetails.analiseIA.tempo}</span></div>
                            <div className="flex justify-between items-center text-sm"><span>Bases Consultadas:</span><span className="font-semibold">{fraudCaseDetails.analiseIA.bases}</span></div>
                            <div className="flex gap-2 items-center flex-wrap text-muted-foreground">
                                <Landmark className="h-4 w-4"/>
                                <Car className="h-4 w-4"/>
                                <Banknote className="h-4 w-4"/>
                                <Home className="h-4 w-4"/>
                                <Building2 className="h-4 w-4"/>
                            </div>
                        </CardContent>
                    </Card>
                    
                    {/* Risk Indicators */}
                    <Card>
                         <CardHeader><CardTitle>Indicadores de Risco</CardTitle></CardHeader>
                         <CardContent className="space-y-4">
                            {riskIndicators.map(i => (
                                <div key={i.name}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{i.name}</span>
                                        <span className="font-semibold">{i.value}%</span>
                                    </div>
                                    <Progress value={i.value} indicatorClassName={i.color} />
                                </div>
                            ))}
                         </CardContent>
                    </Card>

                    {/* Timeline */}
                    <Card>
                        <CardHeader><CardTitle>Timeline da Investigação</CardTitle></CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {timeline.map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-8 w-8">
                                                <Calendar className="h-4 w-4"/>
                                            </div>
                                            {index < timeline.length - 1 && <div className="w-px h-full bg-border my-2"/>}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{item.date}</p>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Next Steps */}
                     <Card>
                        <CardHeader><CardTitle>Próximos Passos Recomendados</CardTitle></CardHeader>
                        <CardContent className="space-y-3">
                            {nextSteps.map(step => (
                                <div key={step} className="flex items-start gap-3">
                                    <div className="flex items-center justify-center bg-muted rounded-full h-6 w-6 shrink-0 mt-1">
                                        <ChevronRight className="h-4 w-4 text-primary"/>
                                    </div>
                                    <p className="text-sm">{step}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    )
}
