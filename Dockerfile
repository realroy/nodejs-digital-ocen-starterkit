FROM node:18.4.0-alpine3.16

COPY . /usr/app
WORKDIR /usr/app
RUN npm i --omit=dev
EXPOSE 3000

CMD ["npm", "run", "start"]
