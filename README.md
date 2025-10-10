# SmartPrefeitura - Inteligência Fiscal

Este é um projeto Next.js que serve como uma Prova de Conceito (PoC) para um Sistema Web de Arrecadação Fiscal, utilizando Inteligência Artificial para otimizar processos e detectar anomalias.

## Funcionalidades

- **Dashboard Fiscal**: Visão geral da inteligência fiscal municipal.
- **Análise de Fraudes**: Detecção e gerenciamento de fraudes.
- **Cruzamento de Dados**: Análise inteligente de múltiplas fontes.
- **Análise de Redes**: Visualização de redes financeiras e societárias.
- **Georreferenciamento**: Análise de imagens e monitoramento geoespacial.
- **Valor Venal**: Revisão e atualização do valor venal de imóveis.
- **Digitalização**: Upload, busca e indexação de documentos.
- **Cadastro Único**: Gerenciamento centralizado de contribuintes.
- **Busca por CNAE**: Análise e correção de CNAE de empresas.
- **Simulação de Cenários**: Simulação de impacto de reformas fiscais.
- **Atendimento Virtual**: Assistente fiscal IA para atendimento 24/7.

## Tecnologias Utilizadas

- **Framework**: Next.js (com App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes UI**: ShadCN UI
- **Inteligência Artificial**: Genkit

---

## Pré-requisitos

- Node.js (versão 20.x ou superior)
- npm (geralmente vem com o Node.js)
- Docker e Docker Compose (para execução via contêiner)

## Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/holynacll/firebase-poc.git
   cd firebase-poc
   ```

2. **Crie o arquivo de variáveis de ambiente:**
   Copie o arquivo `.env.example` (se existir) para um novo arquivo chamado `.env` e preencha as variáveis necessárias, como as chaves de API para serviços de IA.
   ```bash
   cp .env.example .env
   ```
   Se `.env.example` não existir, crie um arquivo `.env` vazio. Você precisará adicionar sua `GEMINI_API_KEY` para as funcionalidades de GenAI.
   ```
   GEMINI_API_KEY=SUA_API_KEY_AQUI
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## Executando em Ambiente de Desenvolvimento

### Localmente

Para iniciar o servidor de desenvolvimento do Next.js e o servidor do Genkit (para as funcionalidades de IA):

1. **Inicie o servidor do Genkit:**
   Em um terminal, execute:
   ```bash
   npm run genkit:dev
   ```

2. **Inicie o servidor do Next.js:**
   Em um segundo terminal, execute:
   ```bash
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:9002`.

### Com Docker

Para executar a aplicação em modo de desenvolvimento usando Docker, o `docker-compose` irá gerenciar os serviços.

1. **Construa e inicie os contêineres:**
   ```bash
   docker-compose up --build
   ```

A aplicação estará disponível em `http://localhost:9002`. O Hot-reloading estará ativado, e as alterações no código serão refletidas automaticamente.

---

## Executando em Ambiente de Produção

### Build Local

Para criar uma versão otimizada para produção:

1. **Execute o comando de build:**
   ```bash
   npm run build
   ```

2. **Inicie o servidor de produção:**
   ```bash
   npm run start
   ```

A aplicação estará disponível em `http://localhost:3000`.

### Com Docker

O `docker-compose.prod.yml` é configurado para executar a aplicação em modo de produção.

1. **Construa e inicie o contêiner de produção:**
   ```bash
   docker-compose -f docker-compose.prod.yml up --build -d
   ```
   O `-d` executa o contêiner em modo "detached" (em segundo plano).

A aplicação estará disponível em `http://localhost:3000`.

Para parar o contêiner:
```bash
docker-compose -f docker-compose.prod.yml down
```
