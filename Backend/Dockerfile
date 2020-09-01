FROM node:6
LABEL maintainer "Muhammad Dadu <muhammad@dadu.co>"

RUN apt-get update

# Update npm
RUN yarn global add npm@lts

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json

RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Install packages dependencies
RUN npm install -g sequelize-cli
RUN npm install -g nodemon

WORKDIR /src
ADD . /src
RUN mkdir -p ./data && touch ./data/test-db.sqlite3 ./data/development-db.sqlite3

ENV PORT=80
ENV HOSTNAME=0.0.0.0

EXPOSE 80