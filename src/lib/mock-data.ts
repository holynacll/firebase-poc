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
  },
  {
    id: "FRA-002",
    name: "Comércio de Papel Ltda.",
    risk: "Médio Risco",
    status: "Resolvido",
    type: "Crédito Indevido de ICMS",
    value: "R$ 450.000,00",
    date: "2023-10-24",
  },
  {
    id: "FRA-003",
    name: "Alpha Importações",
    risk: "Baixo Risco",
    status: "Em Análise",
    type: "Subfaturamento",
    value: "R$ 120.000,00",
    date: "2023-10-22",
  },
  {
    id: "FRA-004",
    name: "Serviços Digitais Web",
    risk: "Alto Risco",
    status: "Pendente",
    type: "Não Emissão de NFS-e",
    value: "R$ 890.000,00",
    date: "2023-10-21",
  },
    {
    id: "FRA-005",
    name: "Beta Logística Express",
    risk: "Médio Risco",
    status: "Resolvido",
    type: "Apropriação Indébita",
    value: "R$ 310.000,00",
    date: "2023-10-20",
  },
];
