FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY index.js .

ENV PORT=4144

EXPOSE 4144

CMD ["node", "index.js"]
