
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  FileSearch,
  Zap,
} from "lucide-react";
import { dashboardKpis, recentActivity } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { KpiCard } from "./_components/kpi-card";
import { ArrecadacaoChart, InadimplenciaChart, IaDetectionsChart } from "./_components/dashboard-charts";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {dashboardKpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-destructive/5 border-destructive/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-destructive">Alertas Críticos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">12</div>
            <p className="text-xs text-muted-foreground">Casos de alto risco pendentes</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-warning/5 border-warning/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-warning">Em Processamento</CardTitle>
            <Activity className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">87</div>
            <p className="text-xs text-muted-foreground">Casos e análises em andamento</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl bg-success/5 border-success/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-success">Concluídos</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">315</div>
            <p className="text-xs text-muted-foreground">Casos resolvidos neste mês</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ArrecadacaoChart />
        </div>
        <div className="lg:col-span-2">
          <InadimplenciaChart />
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle>Atividade Recente da IA</CardTitle>
            <CardDescription>Últimas ações e detecções do sistema.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={activity.id}>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <activity.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                {index < recentActivity.length -1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        <IaDetectionsChart />

        <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Atalhos para as tarefas mais comuns.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button variant="outline" className="justify-start gap-2 transition-all hover:bg-accent/80 hover:text-accent-foreground">
              <Zap className="h-4 w-4" /> Iniciar nova análise de fraude
            </Button>
            <Button variant="outline" className="justify-start gap-2 transition-all hover:bg-accent/80 hover:text-accent-foreground">
              <FileSearch className="h-4 w-4" /> Consultar Cadastro Único
            </Button>
            <Button variant="outline" className="justify-start gap-2 transition-all hover:bg-accent/80 hover:text-accent-foreground">
              <ArrowRight className="h-4 w-4" /> Gerar relatório de arrecadação
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
