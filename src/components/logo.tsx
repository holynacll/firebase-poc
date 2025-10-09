import { Hexagon } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Hexagon className="h-8 w-8 text-primary" />
      <h1 className="text-xl font-bold font-headline text-sidebar-foreground">
        Fiscal Flow
      </h1>
    </div>
  );
}
