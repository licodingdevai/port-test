FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY index.js .

EXPOSE 3000
EXPOSE 3001

CMD ["node", "index.js"]
