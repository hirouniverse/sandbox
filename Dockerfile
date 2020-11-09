FROM node:12-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn install --production

ENV HOST 0.0.0.0

CMD ["yarn", "start"]
