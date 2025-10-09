import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Loader, Search, Upload } from "lucide-react";

const docTypes = [
  "Nota Fiscal", "Contrato Social", "Alvará", "Certidão Negativa", "Guia de Recolhimento", "Outros"
];

const processedDocs = [
    { id: 'DOC-01', name: 'NF_Omega_Solucoes_1023.pdf', tags: ['Nota Fiscal', 'Serviço'], status: 'Processado' },
    { id: 'DOC-02', name: 'Contrato_Alfa_Constr.docx', tags: ['Contrato', 'Obra'], status: 'Processado' },
    { id: 'DOC-03', name: 'Alvara_Beta_Log.pdf', tags: ['Alvará', 'Logística'], status: 'Processado' },
    { id: 'DOC-04', name: 'IMG_2023_recibo.jpg', tags: ['Recibo'], status: 'Pendente' },
];

export default function DigitalizacaoPage() {
    return (
        <Tabs defaultValue="upload" className="space-y-4">
            <TabsList>
                <TabsTrigger value="upload">Upload de Documentos</TabsTrigger>
                <TabsTrigger value="busca">Busca e Indexação</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upload de Documentos</CardTitle>
                            <CardDescription>Arraste e solte seus arquivos ou clique para selecionar.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-border border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Clique para enviar</span> ou arraste e solte</p>
                                        <p className="text-xs text-muted-foreground">PDF, DOCX, JPG, PNG (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Tipos de Documentos Suportados</CardTitle>
                             <CardDescription>Marque os tipos de documentos para extração otimizada.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {docTypes.map(type => (
                                <div key={type} className="flex items-center space-x-2">
                                    <Checkbox id={type.toLowerCase()} />
                                    <label htmlFor={type.toLowerCase()} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {type}
                                    </label>
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
                            <Input placeholder="Busque por conteúdo, nome, tags, CNPJ..." className="pl-8" />
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
                                            <FileText className="h-4 w-4 text-muted-foreground"/> {doc.name}
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
        </Tabs>
    )
}
