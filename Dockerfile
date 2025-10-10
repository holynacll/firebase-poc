# Etapa 1: Base - Instalação de dependências
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install

# Etapa 2: Builder - Construção da aplicação
FROM base AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
# A chave de API do Gemini é necessária durante o build se houver flows de Genkit
ARG GEMINI_API_KEY
ENV GEMINI_API_KEY=${GEMINI_API_KEY}
RUN npm run build

# Etapa 3: Runner - Execução da aplicação em produção
FROM node:20-alpine AS runner
WORKDIR /app

# Variáveis de ambiente
ENV NODE_ENV=production
# Você pode expor uma porta diferente se necessário
ENV PORT=3000

# Copiar dependências de produção
COPY --from=base /app/package.json ./package.json
RUN npm install --omit=dev

# Copiar os artefatos do build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expor a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
