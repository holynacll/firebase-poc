import type { LucideIcon } from "lucide-react";

export type Kpi = {
  label: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  changeType?: "increase" | "decrease";
};

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  description: string;
};
