import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Kpi } from "@/lib/types";
import { TrendingDown, TrendingUp } from "lucide-react";

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const isIncrease = kpi.changeType === "increase";
  const changeColor = isIncrease ? "text-success" : "text-destructive";
  const ChangeIcon = isIncrease ? TrendingUp : TrendingDown;

  return (
    <Card className="transition-transform duration-300 hover:scale-[1.03] hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.label}</CardTitle>
        <kpi.icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{kpi.value}</div>
        {kpi.change && (
          <p className={cn("text-xs text-muted-foreground flex items-center", changeColor)}>
            <ChangeIcon className="h-4 w-4 mr-1" />
            {kpi.change} desde o mês passado
          </p>
        )}
      </CardContent>
    </Card>
  );
}
