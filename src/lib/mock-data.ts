import {
  TrendingUp,
  TrendingDown,
  ShieldAlert,
  Building,
  Users,
  Bot,
  Activity,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  FileText,
} from "lucide-react";
import type { Kpi } from "./types";

export const dashboardKpis: Kpi[] = [
  {
    label: "Arrecadação Mensal",
    value: "R$ 15.2M",
    icon: TrendingUp,
    change: "+12.5%",
    changeType: "increase",
  },
  {
    label: "Taxa de Inadimplência",
    value: "8.3%",
    icon: TrendingDown,
    change: "-1.2%",
    changeType: "decrease",
  },
  {
    label: "Casos de Fraude",
    value: "42",
    icon: ShieldAlert,
    change: "+5",
    changeType: "increase",
  },
  {
    label: "Imóveis Atualizados",
    value: "1,280",
    icon: Building,
    change: "+210",
    changeType: "increase",
  },
  {
    label: "Contribuintes Ativos",
    value: "245K",
    icon: Users,
    change: "+1.5K",
    changeType: "increase",
  },
  {
    label: "Eficiência da IA",
    value: "92.8%",
    icon: Bot,
    change: "+0.5%",
    changeType: "increase",
  },
];

export const recentActivity = [
    {
      id: "1",
      icon: ShieldAlert,
      description: "Novo caso de fraude de alto risco detectado para a empresa 'Omega Soluções'.",
      time: "2 min atrás",
    },
    {
      id: "2",
      icon: Building,
      description: "Alteração estrutural detectada no imóvel com inscrição '123.456.789-0'.",
      time: "15 min atrás",
    },
    {
      id: "3",
      icon: Users,
      description: "Cadastro do contribuinte 'João da Silva' atualizado com dados da Receita Federal.",
      time: "1 hora atrás",
    },
    {
      id: "4",
      icon: Bot,
      description: "Modelo de 'Valor Venal' re-treinado com 95% de acurácia.",
      time: "3 horas atrás",
    },
     {
      id: "5",
      icon: FileText,
      description: "Lote de 500 notas fiscais digitalizado e indexado com sucesso.",
      time: "5 horas atrás",
    },
];

export const fraudCases = [
  {
    id: "FRA-001",
    name: "Empresa Fantasma S.A.",
    risk: "Alto Risco",
    status: "Em Análise",
    type: "Omissão de Receita",
    value: "R$ 2.500.000,00",
    date: "2023-10-26",
    confidence: "97%",
    description: "Divergência significativa entre faturamento declarado e movimentação financeira.",
    contribuinte: {
      nome: "Empresa Fantasma S.A.",
      doc: "11.222.333/0001-44",
      endereco: "Endereço Fictício, 123 - Centro",
      patrimonio: "R$ 50.000,00",
      renda: "R$ 1.200.000,00",
      cnae: "8299-7/99 - Outras atividades de serviços prestados principalmente às empresas"
    },
    analiseIA: {
      algoritmo: "DeepFraud AI v2.1",
      tempo: "3.2 segundos",
      bases: 5
    }
  },
  {
    id: "FRA-002",
    name: "Comércio de Papel Ltda.",
    risk: "Médio Risco",
    status: "Resolvido",
    type: "Crédito Indevido de ICMS",
    value: "R$ 450.000,00",
    date: "2023-10-24",
    confidence: "85%",
    description: "Utilização de créditos de ICMS de notas fiscais canceladas.",
    contribuinte: {
      nome: "Comércio de Papel Ltda.",
      doc: "22.333.444/0001-55",
      endereco: "Rua do Comércio, 456 - Bairro Industrial",
      patrimonio: "R$ 1.200.000,00",
      renda: "R$ 8.500.000,00",
      cnae: "4647-8/01 - Comércio atacadista de artigos de escritório e de papelaria"
    },
     analiseIA: {
      algoritmo: "TaxCredit Validator v1.5",
      tempo: "1.8 segundos",
      bases: 3
    }
  },
  {
    id: "FRA-003",
    name: "Alpha Importações",
    risk: "Baixo Risco",
    status: "Em Análise",
    type: "Subfaturamento",
    value: "R$ 120.000,00",
    date: "2023-10-22",
    confidence: "78%",
    description: "Importação de mercadorias com valor declarado abaixo do valor de mercado.",
    contribuinte: {
      nome: "Alpha Importações e Exportações Ltda.",
      doc: "33.444.555/0001-66",
      endereco: "Avenida das Nações, 789 - Porto Seco",
      patrimonio: "R$ 5.800.000,00",
      renda: "R$ 22.000.000,00",
      cnae: "4693-1/00 - Comércio atacadista de mercadorias em geral, sem predominância de alimentos ou de insumos agropecuários"
    },
     analiseIA: {
      algoritmo: "ImportGuard AI v3.0",
      tempo: "4.1 segundos",
      bases: 6
    }
  },
  {
    id: "FRA-004",
    name: "Serviços Digitais Web",
    risk: "Alto Risco",
    status: "Pendente",
    type: "Não Emissão de NFS-e",
    value: "R$ 890.000,00",
    date: "2023-10-21",
    confidence: "92%",
    description: "Recebimentos via PIX e cartões de crédito incompatíveis com as notas de serviço emitidas.",
    contribuinte: {
      nome: "Serviços Digitais Web ME",
      doc: "44.555.666/0001-77",
      endereco: "Rua da Tecnologia, 101 - Hub Digital",
      patrimonio: "R$ 150.000,00",
      renda: "R$ 3.200.000,00",
      cnae: "6209-1/00 - Suporte técnico, manutenção e outros serviços em tecnologia da informação"
    },
    analiseIA: {
      algoritmo: "DeepFraud AI v2.1",
      tempo: "2.9 segundos",
      bases: 4
    }
  },
    {
    id: "FRA-005",
    name: "Beta Logística Express",
    risk: "Médio Risco",
    status: "Resolvido",
    type: "Apropriação Indébita",
    value: "R$ 310.000,00",
    date: "2023-10-20",
    confidence: "88%",
    description: "Retenção indevida de tributos de transporte (ICMS-ST).",
     contribuinte: {
      nome: "Beta Logística Express Ltda.",
      doc: "55.666.777/0001-88",
      endereco: "Rodovia de Transporte, Km 50 - Distrito Logístico",
      patrimonio: "R$ 3.500.000,00",
      renda: "R$ 15.000.000,00",
      cnae: "4930-2/02 - Transporte rodoviário de carga, exceto produtos perigosos e mudanças, intermunicipal, interestadual e internacional"
    },
     analiseIA: {
      algoritmo: "TaxFlow Analyzer v1.9",
      tempo: "2.2 segundos",
      bases: 4
    }
  },
];

export const fraudCaseDetails = {
    id: "FR001",
    type: "Subfaturamento ITBI",
    description: "Divergência significativa entre valor declarado e valor de mercado em transações imobiliárias",
    risk: "Alto Risco",
    value: "R$ 2.500.000",
    detectionDate: "14/01/2024",
    confidence: "97%",
    contribuinte: {
        nome: "Construtora Alpha Ltda",
        doc: "12.345.678/0001-90",
        telefone: "(11) 99999-9999",
        email: "contato@exemplo.com.br",
        endereco: "Rua das Empresas, 123 - Centro",
        patrimonio: "R$ 2.500.000",
        renda: "R$ 480.000",
        cnae: "4711-3/02 - Comércio varejista de mercadorias em geral"
    },
    analiseIA: {
        algoritmo: "DeepFraud AI v2.1",
        tempo: "3.2 segundos",
        bases: 5
    }
};
