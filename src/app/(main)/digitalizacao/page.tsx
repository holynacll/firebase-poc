import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { File as FileIcon, FileText, Loader, Search, Upload, Cpu, Scan, FileBadge } from "lucide-react";

const docTypes = [
    { name: "Nota Fiscal", count: 16, icon: FileBadge, color: "text-blue-500" },
    { name: "Contrato", count: 33, icon: FileText, color: "text-green-500" },
    { name: "Nota de Empenho", count: 17, icon: FileBadge, color: "text-yellow-500" },
    { name: "Liquidação", count: 57, icon: FileBadge, color: "text-purple-500" },
    { name: "Relatório Financeiro", count: 13, icon: FileBadge, color: "text-red-500" },
    { name: "Alvará", count: 49, icon: FileBadge, color: "text-indigo-500" },
    { name: "Planta Baixa", count: 25, icon: FileBadge, color: "text-pink-500" },
];

const processedDocs = [
    { id: 'DOC-01', name: 'NF_Omega_Solucoes_1023.pdf', tags: ['Nota Fiscal', 'Serviço'], status: 'Processado' },
    { id: 'DOC-02', name: 'Contrato_Alfa_Constr.docx', tags: ['Contrato', 'Obra'], status: 'Processado' },
    { id: 'DOC-03', name: 'Alvara_Beta_Log.pdf', tags: ['Alvará', 'Logística'], status: 'Processado' },
    { id: 'DOC-04', name: 'IMG_2023_recibo.jpg', tags: ['Recibo'], status: 'Pendente' },
];

export default function DigitalizacaoPage() {
    return (
        <div className="space-y-6">
             <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold font-headline">Digitalização Inteligente</h1>
                    <p className="text-muted-foreground">OCR e IA para digitalizar, indexar e tornar documentos pesquisáveis</p>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="outline"><Scan className="mr-2 h-4 w-4 text-success"/>OCR Ativo</Badge>
                    <Badge variant="outline"><Cpu className="mr-2 h-4 w-4 text-primary animate-pulse"/>IA Processando</Badge>
                </div>
            </header>
            <Tabs defaultValue="upload" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="upload">Upload e Processamento</TabsTrigger>
                    <TabsTrigger value="busca">Busca e Indexação</TabsTrigger>
                    <TabsTrigger value="analise">Análise e Relatórios</TabsTrigger>
                </TabsList>
                <TabsContent value="upload">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upload de Documentos</CardTitle>
                                <CardDescription>Arraste arquivos ou clique para selecionar (PDF, DOC, JPG, PNG, TIFF)</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-border border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Solte os arquivos aqui</span></p>
                                            <p className="text-xs text-muted-foreground">Ou clique para selecionar arquivos</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                                <Button className="w-full" size="lg"><Cpu className="mr-2 h-4 w-4"/>Processar com IA</Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Tipos de Documentos</CardTitle>
                                <CardDescription>Categorias automaticamente identificadas pela IA.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {docTypes.map(type => (
                                    <div key={type.name} className="flex items-center justify-between p-3 rounded-md border hover:bg-muted transition-colors">
                                        <div className="flex items-center gap-3">
                                            <type.icon className={`h-6 w-6 ${type.color}`} />
                                            <div>
                                                <p className="font-semibold">{type.name}</p>
                                                <p className="text-xs text-muted-foreground">Auto-detectado por IA</p>
                                            </div>
                                        </div>
                                        <Badge variant="secondary">{type.count}</Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="busca">
                    <Card>
                        <CardHeader>
                            <CardTitle>Busca Inteligente de Documentos</CardTitle>
                            <div className="relative pt-2">
                                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <input placeholder="Busque por conteúdo, nome, tags, CNPJ..." className="w-full bg-background pl-8 pr-4 py-2 border rounded-lg" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome do Arquivo</TableHead>
                                        <TableHead>Tags</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Ação</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {processedDocs.map(doc => (
                                        <TableRow key={doc.id}>
                                            <TableCell className="font-medium flex items-center gap-2">
                                                <FileIcon className="h-4 w-4 text-muted-foreground"/> {doc.name}
                                            </TableCell>
                                            <TableCell>
                                                {doc.tags.map(tag => <Badge key={tag} variant="secondary" className="mr-1">{tag}</Badge>)}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    {doc.status === 'Processado' ? <div className="h-2 w-2 rounded-full bg-green-500" /> : <Loader className="h-4 w-4 animate-spin text-amber-500" />}
                                                    {doc.status}
                                                </div>
                                            </TableCell>
                                            <TableCell><Button variant="outline" size="sm">Visualizar</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="analise">
                    <Card>
                        <CardHeader>
                            <CardTitle>Análise e Relatórios</CardTitle>
                            <CardDescription>Extraia insights e gere relatórios a partir dos documentos processados.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center h-64 bg-muted rounded-lg border-2 border-dashed">
                                <p className="text-muted-foreground">Funcionalidade em desenvolvimento.</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
