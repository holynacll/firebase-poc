
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AlvaraDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex items-center justify-center h-full">
            <Card>
                <CardHeader>
                    <CardTitle>Detalhes do Processo de Alvará</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Detalhes para o processo com ID {params.id} serão exibidos aqui.</p>
                </CardContent>
            </Card>
        </div>
    );
}
