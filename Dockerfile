# 1. Usar uma imagem oficial do Node.js como base
FROM node:18-alpine

# 2. Definir o diretório de trabalho dentro do container
WORKDIR /app

# 3. Copiar os arquivos de dependências
COPY package*.json ./

# 4. Instalar as dependências
RUN npm install

# 5. Copiar o restante do código da aplicação
COPY . .

# 6. Expor a porta que o React usa
EXPOSE 3000

# 7. Comando para rodar a aplicação
CMD ["npm", "start"]