# hub.docker.com/search
#Definição da imagem
FROM node

#Cria um diretorio onde será rodado a aplicação
WORKDIR /usr/app 

#Copia package.json para dentro do diretorio (acima)
COPY package.json ./

#Roda npm para baixar as denpedencias
RUN npm install 

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

#docker compose 
