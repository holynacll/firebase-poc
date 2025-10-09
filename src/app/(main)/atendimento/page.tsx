import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, FileText, Send, User } from "lucide-react";

const quickActions = [
    "Consultar débitos de IPTU",
    "Emitir 2ª via de boleto",
    "Informações sobre isenção",
    "Abrir processo administrativo"
];

const recentProtocols = [
    { id: "PROT-12345", subject: "Consulta de débitos", status: "Concluído" },
    { id: "PROT-12346", subject: "2ª via IPTU", status: "Concluído" },
    { id: "PROT-12347", subject: "Isenção para aposentado", status: "Em andamento" },
];

export default function AtendimentoPage() {
    return (
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-10rem)]">
            <Card className="lg:col-span-2 flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline">Assistente Fiscal IA</CardTitle>
                    <CardDescription>Seu canal de atendimento virtual 24/7.</CardDescription>
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
                                    <p className="text-sm">Olá! Sou seu assistente fiscal. Como posso ajudar hoje? Você pode usar uma das ações rápidas ou digitar sua dúvida.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none max-w-[75%]">
                                    <p className="font-semibold text-sm">Você</p>
                                    <p className="text-sm">Gostaria de consultar meus débitos de IPTU.</p>
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
                <Card>
                    <CardHeader><CardTitle>Ações Rápidas</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-2 gap-2">
                        {quickActions.map(action => <Button key={action} variant="outline" className="h-auto text-wrap text-center">{action}</Button>)}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Protocolos Recentes</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                        {recentProtocols.map(p => (
                            <div key={p.id} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-muted-foreground"/>
                                    <div>
                                        <p className="font-semibold">{p.id}</p>
                                        <p className="text-muted-foreground">{p.subject}</p>
                                    </div>
                                </div>
                                <p className={p.status === 'Concluído' ? 'text-green-500' : 'text-amber-500'}>{p.status}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Estatísticas do Atendimento</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between text-sm"><span>Atendimentos hoje:</span><span className="font-bold">287</span></div>
                        <div className="flex justify-between text-sm"><span>Tempo médio:</span><span className="font-bold">3m 15s</span></div>
                        <div className="flex justify-between text-sm"><span>Nível de satisfação:</span><span className="font-bold">92%</span></div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
