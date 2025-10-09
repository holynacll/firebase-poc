import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, LineChart } from "lucide-react";

export default function SimulacaoPage() {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Simulação de Cenários Pós-Reforma</CardTitle>
                        <CardDescription>Configure os parâmetros para simular o impacto na arrecadação.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold">Configuração do Cenário</h3>
                            <div className="space-y-2">
                                <Label htmlFor="tipo-reforma">Tipo de Reforma</Label>
                                <Select>
                                    <SelectTrigger id="tipo-reforma"><SelectValue placeholder="Selecione o tipo" /></SelectTrigger>
                                    <SelectContent><SelectItem value="simplificada">Simplificada</SelectItem><SelectItem value="ampla">Ampla</SelectItem></SelectContent>
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
                                <Label htmlFor="prazo">Prazo da Simulação (anos)</Label>
                                <Input id="prazo" type="number" placeholder="Ex: 5" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold">Parâmetros Econômicos</h3>
                             <div className="space-y-2">
                                <Label htmlFor="inflacao">Inflação Anual Média (%)</Label>
                                <Input id="inflacao" type="number" placeholder="Ex: 4.5" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="crescimento-pib">Crescimento do PIB (%)</Label>
                                <Input id="crescimento-pib" type="number" placeholder="Ex: 2.2" />
                            </div>
                        </div>
                        <Button className="w-full">Simular Cenário</Button>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Resultado da Simulação</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-64 bg-muted rounded-lg border-2 border-dashed">
                        <p className="text-muted-foreground">Os resultados da simulação aparecerão aqui.</p>
                    </CardContent>
                </Card>
                <div className="grid grid-cols-2 gap-6">
                    <Card>
                        <CardHeader className="flex-row items-center justify-between"><CardTitle>Arrecadação Projetada</CardTitle><LineChart className="h-5 w-5 text-muted-foreground"/></CardHeader>
                        <CardContent><p className="text-3xl font-bold">+ R$ 250M</p><p className="text-sm text-muted-foreground">em 5 anos</p></CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex-row items-center justify-between"><CardTitle>Impacto por Setor</CardTitle><BarChart className="h-5 w-5 text-muted-foreground"/></CardHeader>
                        <CardContent><p className="text-lg font-bold">Serviços: +12%</p><p className="text-sm text-muted-foreground">Comércio: -3%</p></CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
