FROM node:22-alpine3.18

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./app ./

RUN chown -R node:node /home/node/app

USER node

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]