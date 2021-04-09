FROM node:10

EXPOSE 3000

RUN apt-get update && apt-get -y install sudo && apt-get install nano

# General
RUN mkdir -p /app
WORKDIR /app
COPY /public /app/public
COPY /src /app/src
COPY /.env /app/
COPY /.gitignore /app/
COPY /docker-ui-entrypoint.sh /app/
COPY /package.json  /app/
COPY /package-lock.json  /app/

# NPM
RUN npm install serve -g
RUN npm install
RUN npm run build --no-cache

# Entry
COPY ./docker-ui-entrypoint.sh /app/docker-ui-entrypoint.sh
RUN chmod +x /app/docker-ui-entrypoint.sh
ENTRYPOINT ["/app/docker-ui-entrypoint.sh"]
