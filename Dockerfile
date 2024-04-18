FROM node:lts-alpine


WORKDIR /home/node

COPY .  ./

USER node

COPY --chown=node:node . .

RUN npm install

CMD [ "npm", "start" ]


EXPOSE 3000