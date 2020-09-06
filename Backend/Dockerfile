FROM node:latest

RUN mkdir -p /user/src/app

WORKDIR /user/src/app

COPY ./package*.json ./

RUN npm install --quiet

COPY . ./

RUN npm run build:prod

EXPOSE 4201

ENTRYPOINT ["node", "build/App.js"]