
export type AlvaraCase = {
    id: string;
    protocolo: string;
    solicitante: string;
    status: "Em Análise" | "Pendente" | "Aprovado" | "Reprovado";
    localidade: string;
    valor: string;
    data: string;
};
  
export const alvaraCases: AlvaraCase[] = [
    {
      id: "ALV-001",
      protocolo: "152025023226",
      solicitante: "Construtora Solidez Ltda",
      status: "Aprovado",
      localidade: "São Paulo/SP",
      valor: "R$ 1.200.000,00",
      data: "2024-05-10",
    },
    {
      id: "ALV-002",
      protocolo: "152025023227",
      solicitante: "João da Silva",
      status: "Reprovado",
      localidade: "Rio de Janeiro/RJ",
      valor: "R$ 350.000,00",
      data: "2024-05-12",
    },
    {
      id: "ALV-003",
      protocolo: "152025023228",
      solicitante: "Shopping Center Plaza",
      status: "Em Análise",
      localidade: "Belo Horizonte/MG",
      valor: "R$ 15.800.000,00",
      data: "2024-05-15",
    },
    {
      id: "ALV-004",
      protocolo: "152025023229",
      solicitante: "Maria Oliveira",
      status: "Pendente",
      localidade: "Curitiba/PR",
      valor: "R$ 550.000,00",
      data: "2024-05-18",
    },
    {
      id: "ALV-005",
      protocolo: "152025023230",
      solicitante: "Indústria Metalúrgica Forte",
      status: "Pendente",
      localidade: "Porto Alegre/RS",
      valor: "R$ 4.250.000,00",
      data: "2024-05-20",
    },
];
