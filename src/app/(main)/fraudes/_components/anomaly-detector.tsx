
'use client';

import { useState } from 'react';
import { Bot, Loader2, PlusCircle } from 'lucide-react';

import { simulateAnomalyAlerting } from '@/ai/flows/simulate-anomaly-alerting';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const exampleFinancialReport = `
Relatório Financeiro - Empresa Exemplo S.A. - Q3 2023

Receita: R$ 5.200.000,00
Custos Operacionais: R$ 2.100.000,00
Despesas com Vendas: R$ 1.500.000,00
Despesas Administrativas: R$ 1.800.000,00
Lucro antes de Impostos: -R$ 200.000,00

Observações:
- Aumento de 250% em 'Despesas Administrativas' comparado ao Q2 2023.
- Contratos de consultoria assinados com 'Consultoria XYZ', empresa recém-criada e com sócios relacionados à diretoria.
- Redução drástica da margem de lucro.
`;

export function AnomalyDetector() {
  const [open, setOpen] = useState(false);
  const [financialReportData, setFinancialReportData] = useState(exampleFinancialReport);
  const [isLoading, setIsLoading] = useState(false);
  const [anomalyResult, setAnomalyResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    setIsLoading(true);
    setAnomalyResult(null);
    try {
      const result = await simulateAnomalyAlerting({ financialReportData });
      setAnomalyResult(result.anomalyDescription);
      toast({
        title: "Análise Concluída",
        description: "Potencial anomalia detectada pela IA.",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Erro na Análise",
        description: "Não foi possível completar a análise. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setAnomalyResult(null);
      setFinancialReportData(exampleFinancialReport);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Analisar com IA</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Simulador de Detecção de Anomalia</DialogTitle>
          <DialogDescription>
            Cole os dados de um relatório financeiro para que a IA analise e busque por potenciais anomalias ou indícios de fraude.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Cole o relatório financeiro aqui..."
            className="h-48"
            value={financialReportData}
            onChange={(e) => setFinancialReportData(e.target.value)}
          />
          {anomalyResult && (
            <Alert>
              <Bot className="h-4 w-4" />
              <AlertTitle>Resultado da Análise da IA</AlertTitle>
              <AlertDescription>{anomalyResult}</AlertDescription>
            </Alert>
          )}
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleAnalyze} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analisando...
              </>
            ) : (
              'Analisar Relatório'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
