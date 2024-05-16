FROM node:22-alpine3.18

WORKDIR /app

COPY . .

RUN npm ci

USER nobody

ENV NODE_ENV=production

CMD ["index.js"]