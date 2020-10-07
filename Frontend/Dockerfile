# node build react
FROM node:latest as build

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

RUN mkdir -p /user/src/app

WORKDIR /user/src/app

COPY ./toangvl/package.json ./toangvl/package-lock.json /user/src/app/

COPY ./toangvl/ /user/src/app/

RUN npm install --quiet

RUN npm run-script build

# build to dict và load dict đến nginx -> 80, 443
FROM nginx:latest 

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

# RUN rm -v /etc/nginx/nginx.conf

# COPY ./nginx.conf /etc/nginx/

# RUN rm -v /etc/nginx/conf.d/default.conf

# COPY ./prod_nginx.conf /
# COPY ./local_nginx.conf /
# COPY ./custom-nginx.sh /
# RUN chmod +x /custom-nginx.sh
# RUN /custom-nginx.sh

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /user/src/app/build /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
