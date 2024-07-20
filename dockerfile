
FROM node:14
WORKDIR /app


COPY package*.json ./


RUN npm install

COPY . .


EXPOSE 5008

# Comando para iniciar la aplicación
CMD ["node", "server.js"]