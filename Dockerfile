FROM node:alpine

WORKDIR /okta-auth-app

COPY ./package.json /okta-auth-app

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]