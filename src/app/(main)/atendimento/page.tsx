import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Bot, FileText, Send, User, CheckCircle, Clock, Search, List, BarChart, Percent, Smile, Users } from "lucide-react";

const quickActions = [
    { label: "Consultar Débitos", icon: Search },
    { label: "Segunda Via IPTU", icon: FileText },
    { label: "Parcelamento", icon: Percent },
    { label: "Certidão Negativa", icon: CheckCircle },
];

const recentProtocols = [
    { id: "PROT-2024-001", subject: "Consulta sobre IPTU", status: "Resolvido", risk: "Baixa", date: "14/01/2024" },
    { id: "PROT-2024-002", subject: "Parcelamento de débitos", status: "Em Andamento", risk: "Média", date: "15/01/2024" },
    { id: "PROT-2024-003", subject: "Certidão negativa", status: "Aberto", risk: "Alta", date: "15/01/2024" },
];

const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
        case 'Alta': return 'destructive';
        case 'Média': return 'secondary';
        default: return 'default';
    }
}
const getStatusBadgeVariant = (status: string) => {
    switch (status) {
        case 'Resolvido': return 'default';
        case 'Em Andamento': return 'secondary';
        case 'Aberto':
        default: return 'outline';
    }
}


export default function AtendimentoPage() {
    return (
        <div className="space-y-4">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold font-headline">Atendimento Virtual 24/7</h1>
                    <p className="text-muted-foreground">Assistente inteligente para suporte aos contribuintes</p>
                </div>
                 <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-success border-success"><div className="w-2 h-2 mr-2 rounded-full bg-success"/>IA Online</Badge>
                    <Badge variant="secondary"><Clock className="h-3 w-3 mr-1.5"/>24h Disponível</Badge>
                </div>
            </header>
            <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-14rem)]">
                <Card className="lg:col-span-2 flex flex-col shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle className="font-headline">Assistente Fiscal IA</CardTitle>
                            <CardDescription className="flex items-center gap-1.5 text-success"><div className="w-2 h-2 rounded-full bg-success"/>Online</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                        <ScrollArea className="flex-1 -mx-6 px-6">
                            <div className="space-y-6 pr-4">
                                {/* Chat messages */}
                                <div className="flex items-start gap-3">
                                    <Avatar className="w-8 h-8 border-2 border-primary">
                                        <AvatarFallback><Bot className="w-4 h-4" /></AvatarFallback>
                                    </Avatar>
                                    <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[75%]">
                                        <p className="font-semibold text-sm">Assistente Fiscal IA</p>
                                        <p className="text-sm">Olá! Sou o assistente virtual da Secretaria da Fazenda. Como posso ajudá-lo hoje?</p>
                                        <p className="text-xs text-muted-foreground mt-1">08:36</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 justify-end">
                                    <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none max-w-[75%]">
                                        <p className="font-semibold text-sm">Você</p>
                                        <p className="text-sm">teste 1</p>
                                        <p className="text-xs text-primary-foreground/70 mt-1 text-right">08:50</p>
                                    </div>
                                     <Avatar className="w-8 h-8">
                                        <AvatarFallback><User className="w-4 h-4"/></AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Avatar className="w-8 h-8 border-2 border-primary">
                                        <AvatarFallback><Bot className="w-4 h-4" /></AvatarFallback>
                                    </Avatar>
                                    <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[75%]">
                                        <p className="font-semibold text-sm">Assistente Fiscal IA</p>
                                        <p className="text-sm">Para consultar débitos, você pode usar seu CPF/CNPJ no sistema online.</p>
                                         <p className="text-xs text-muted-foreground mt-1">08:51</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-3 justify-end">
                                    <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none max-w-[75%]">
                                        <p className="font-semibold text-sm">Você</p>
                                        <p className="text-sm">teste 2</p>
                                        <p className="text-xs text-primary-foreground/70 mt-1 text-right">08:51</p>
                                    </div>
                                     <Avatar className="w-8 h-8">
                                        <AvatarFallback><User className="w-4 h-4"/></AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>
                        </ScrollArea>
                        <div className="mt-4 flex items-center gap-2">
                            <Input placeholder="Digite sua mensagem..." />
                            <Button size="icon"><Send className="h-4 w-4"/></Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="lg:col-span-1 space-y-6">
                    <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                        <CardHeader><CardTitle>Ações Rápidas</CardTitle></CardHeader>
                        <CardContent className="grid grid-cols-1 gap-2">
                            {quickActions.map(action => <Button key={action.label} variant="outline" className="h-auto text-wrap justify-start py-3"><action.icon className="h-4 w-4 mr-2"/>{action.label}</Button>)}
                        </CardContent>
                    </Card>
                     <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                        <CardHeader><CardTitle>Protocolos Recentes</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            {recentProtocols.map(p => (
                                <div key={p.id} className="text-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold">{p.subject}</p>
                                        <Badge variant={getStatusBadgeVariant(p.status) as any}>{p.status}</Badge>
                                    </div>
                                    <div className="flex items-center justify-between text-muted-foreground mt-1">
                                        <span>{p.id}</span>
                                        <Badge variant={getRiskBadgeVariant(p.risk) as any}>{p.risk}</Badge>
                                    </div>
                                     <p className="text-xs text-muted-foreground mt-1">{p.date}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                     <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                        <CardHeader><CardTitle>Estatísticas do Atendimento</CardTitle></CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex justify-between text-sm"><span>Tempo médio de resposta</span><span className="font-bold">45 segundos</span></div>
                            <div className="flex justify-between text-sm"><span>Taxa de resolução</span><span className="font-bold">94.2%</span></div>
                            <div className="flex justify-between text-sm"><span>Satisfação</span><span className="font-bold">4.8/5.0</span></div>
                            <div className="flex justify-between text-sm"><span>Atendimentos hoje</span><span className="font-bold">1.247</span></div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
