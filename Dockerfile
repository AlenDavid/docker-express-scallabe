FROM node:16-alpine AS builder

EXPOSE 3000

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

FROM builder AS test

RUN npm run test

FROM builder AS prod

RUN npm run build

CMD npm run start

FROM builder AS dev

CMD npm run dev
