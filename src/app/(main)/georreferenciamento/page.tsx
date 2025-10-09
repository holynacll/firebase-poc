
"use client";

import Image from "next/image";
import { useState } from "react";
import { AreaChart, Bot, Building, Calendar, Check, Satellite, Upload, Wind, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function GeorreferenciamentoPage() {
  const [analysisState, setAnalysisState] = useState<"idle" | "loading" | "success">("idle");

  const handleAnalysis = () => {
    setAnalysisState("loading");
    setTimeout(() => {
      setAnalysisState("success");
    }, 2000);
  };
  
  const currentImage = PlaceHolderImages.find(img => img.id === 'current-image');

  return (
    <div className="space-y-6">
      <Tabs defaultValue="analise">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analise">Análise de Imagens</TabsTrigger>
          <TabsTrigger value="resultados">Resultados Detectados</TabsTrigger>
          <TabsTrigger value="monitoramento">Monitoramento</TabsTrigger>
        </TabsList>
        <TabsContent value="analise">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-1 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Upload de Imagens</CardTitle>
                <CardDescription>Envie imagens para análise e detecção de alterações.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full h-20 flex-col gap-1 transition-all hover:bg-accent/80 hover:text-accent-foreground">
                    <Satellite className="h-6 w-6 text-primary" />
                    <span>Imagem de Satélite</span>
                </Button>
                <Button variant="outline" className="w-full h-20 flex-col gap-1 transition-all hover:bg-accent/80 hover:text-accent-foreground">
                    <Wind className="h-6 w-6 text-primary" />
                    <span>Imagem de Drone</span>
                </Button>
                <Button variant="outline" className="w-full h-20 flex-col gap-1 transition-all hover:bg-accent/80 hover:text-accent-foreground">
                    <Upload className="h-6 w-6 text-primary" />
                    <span>Aerofotogrametria</span>
                </Button>
                 <Button onClick={handleAnalysis} className="w-full" disabled={analysisState !== "idle"}>
                    {analysisState === 'idle' && 'Iniciar Análise'}
                    {analysisState === 'loading' && 'Analisando...'}
                    {analysisState === 'success' && 'Análise Concluída'}
                </Button>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Visualização e Comparação</CardTitle>
                <CardDescription>Compare imagens temporais para identificar mudanças</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Imagem Base (2023)</h3>
                  <div className="rounded-lg aspect-video bg-muted/50 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="h-10 w-10" />
                    <span>Imagem Base 2023</span>
                  </div>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Imagem Atual (2024)</h3>
                  <div className="rounded-lg aspect-video bg-muted/50 flex flex-col items-center justify-center gap-2 text-muted-foreground border-2 border-dashed border-primary">
                    <Calendar className="h-10 w-10 text-primary" />
                    <span className="text-primary">Imagem Atual 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      {analysisState === "success" && (
        <Card className="bg-primary/10 border-primary animate-fade-in-up shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Check className="text-success" /> Análise Concluída com Sucesso!
                </CardTitle>
                 <CardDescription>Foram detectadas as seguintes alterações automáticas:</CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                    <Building className="h-8 w-8 text-primary" />
                    <div>
                        <p className="font-bold text-2xl">1,254</p>
                        <p className="text-sm text-muted-foreground">Imóveis analisados</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <AreaChart className="h-8 w-8 text-primary" />
                    <div>
                        <p className="font-bold text-2xl">87</p>
                        <p className="text-sm text-muted-foreground">Alterações detectadas</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Bot className="h-8 w-8 text-primary" />
                    <div>
                        <p className="font-bold text-2xl">98.2%</p>
                        <p className="text-sm text-muted-foreground">Precisão da IA</p>
                    </div>
                </div>
                 <div className="flex items-center gap-3">
                    <Map className="h-8 w-8 text-primary" />
                    <div>
                        <p className="font-bold text-2xl">15.7 km²</p>
                        <p className="text-sm text-muted-foreground">Área total analisada</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      )}

    </div>
  );
}
