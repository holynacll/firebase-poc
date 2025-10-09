
'use client';

import {
  Users,
  Search,
  User,
  Building,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Cpu,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const taxpayers = [
  {
    id: 1,
    name: 'João Silva Santos',
    doc: '123.456.789-00',
    type: 'PF',
    status: 'valid',
    risk: 'low',
    issues: [],
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123 - São Paulo/SP',
    totalDebts: 1250.5,
    processing: {
      hygienized: true,
      addressValidated: true,
      incomeEstimated: true,
    },
  },
  {
    id: 2,
    name: 'Empresa XYZ Ltda',
    doc: '12.345.678/0001-90',
    type: 'PJ',
    status: 'invalid',
    risk: 'high',
    issues: ['Duplicata'],
    email: 'contato@xyz.com',
    phone: '(21) 88888-8888',
    address: 'Av. Principal, 456 - Rio de Janeiro/RJ',
    totalDebts: 15320.0,
    processing: {
      hygienized: true,
      addressValidated: false,
      incomeEstimated: true,
    },
  },
  {
    id: 3,
    name: 'Maria Oliveira Costa',
    doc: '987.654.321-00',
    type: 'PF',
    status: 'valid',
    risk: 'medium',
    issues: [],
    email: 'maria.costa@email.com',
    phone: '(31) 77777-7777',
    address: 'Praça da Liberdade, 789 - Belo Horizonte/MG',
    totalDebts: 0.0,
    processing: {
      hygienized: true,
      addressValidated: true,
      incomeEstimated: false,
    },
  },
];

type Taxpayer = (typeof taxpayers)[0];

export default function CadastroUnicoPage() {
  const [selectedTaxpayer, setSelectedTaxpayer] = useState<Taxpayer>(
    taxpayers[0]
  );

  const getRiskVariant = (risk: string) => {
    if (risk === 'high') return 'destructive';
    if (risk === 'medium') return 'secondary';
    return 'default';
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-headline">Cadastro Único</h1>
          <p className="text-muted-foreground">
            Plataforma centralizada para validação e higienização de dados dos
            contribuintes
          </p>
        </div>
        <Button>
          <Cpu className="mr-2 h-4 w-4" />
          Processar com IA
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        <Card className="lg:col-span-1 flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Contribuintes</CardTitle>
            </div>
            <CardDescription>3 registros encontrados</CardDescription>
            <div className="relative pt-2">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome ou documento..."
                className="pl-8"
              />
            </div>
            <Tabs defaultValue="all" className="pt-2">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="pf">PF</TabsTrigger>
                <TabsTrigger value="pj">PJ</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="flex-1 p-2">
            <ScrollArea className="h-full px-2">
              <div className="space-y-2">
                {taxpayers.map(t => (
                  <Card
                    key={t.id}
                    className={cn(
                      'cursor-pointer transition-all hover:shadow-md',
                      selectedTaxpayer.id === t.id &&
                        'border-primary shadow-lg'
                    )}
                    onClick={() => setSelectedTaxpayer(t)}
                  >
                    <CardContent className="p-3">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          {t.type === 'PF' ? (
                            <User className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Building className="h-4 w-4 text-muted-foreground" />
                          )}
                          <p className="font-semibold">{t.name}</p>
                          {t.status === 'valid' ? (
                            <CheckCircle className="h-4 w-4 text-success" />
                          ) : (
                            <XCircle className="h-4 w-4 text-destructive" />
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">
                        {t.doc}
                      </p>
                      <div className="flex items-center gap-2 mt-2 ml-6">
                        <Badge variant={getRiskVariant(t.risk)}>{t.risk}</Badge>
                        {t.issues.map(issue => (
                          <Badge key={issue} variant="destructive">
                            {issue}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 text-xl">
                    <AvatarFallback>
                      {selectedTaxpayer.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl font-headline">
                      {selectedTaxpayer.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{selectedTaxpayer.type}</span>
                      <span>•</span>
                      <span>{selectedTaxpayer.doc}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge>
                        <CheckCircle className="mr-1 h-3 w-3" /> Validado
                      </Badge>
                      <Badge variant="outline">active</Badge>
                      <Badge variant={getRiskVariant(selectedTaxpayer.risk)}>
                        Risco: {selectedTaxpayer.risk}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Débitos totais</p>
                  <p className="text-2xl font-bold text-destructive">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(selectedTaxpayer.totalDebts)}
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Cpu className="h-5 w-5" /> Processamento IA
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <Badge
                variant={
                  selectedTaxpayer.processing.hygienized
                    ? 'default'
                    : 'secondary'
                }
              >
                dados higienizados
              </Badge>
              <Badge
                variant={
                  selectedTaxpayer.processing.addressValidated
                    ? 'default'
                    : 'secondary'
                }
              >
                endereço validado
              </Badge>
              <Badge
                variant={
                  selectedTaxpayer.processing.incomeEstimated
                    ? 'default'
                    : 'secondary'
                }
              >
                renda estimada
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <Tabs defaultValue="dados">
                <TabsList className="px-6 border-b rounded-none w-full justify-start bg-transparent">
                  <TabsTrigger value="dados">Dados Básicos</TabsTrigger>
                  <TabsTrigger value="contatos">Contatos</TabsTrigger>
                  <TabsTrigger value="enriquecimento">Enriquecimento</TabsTrigger>
                  <TabsTrigger value="historico">Histórico</TabsTrigger>
                </TabsList>
                <TabsContent value="dados" className="p-6">
                  <h3 className="font-semibold mb-4">Informações Pessoais</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedTaxpayer.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedTaxpayer.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedTaxpayer.address}</span>
                    </div>
                  </div>
                </TabsContent>
                 <TabsContent value="contatos" className="p-6">
                     <div className="flex items-center justify-center h-24 bg-muted rounded-lg border-2 border-dashed">
                        <p className="text-muted-foreground">Nenhuma informação de contato adicional.</p>
                    </div>
                 </TabsContent>
                 <TabsContent value="enriquecimento" className="p-6">
                     <div className="flex items-center justify-center h-24 bg-muted rounded-lg border-2 border-dashed">
                        <p className="text-muted-foreground">Nenhum dado de enriquecimento disponível.</p>
                    </div>
                 </TabsContent>
                  <TabsContent value="historico" className="p-6">
                     <div className="flex items-center justify-center h-24 bg-muted rounded-lg border-2 border-dashed">
                        <p className="text-muted-foreground">Nenhum histórico encontrado.</p>
                    </div>
                 </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
