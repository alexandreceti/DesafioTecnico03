FROM node:8

WORKDIR /usr/app

COPY packag*.json ./
COPY . .
RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
