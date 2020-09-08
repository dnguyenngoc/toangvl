FROM node:latest

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

RUN mkdir -p /user/src/app

WORKDIR /user/src/app

COPY ./toangvl/ /user/src/app

RUN npm install --quiet

RUN npm run-script build

EXPOSE 4201

ENTRYPOINT ["node", "src/App.js"]