FROM node:24 AS builder

RUN mkdir -p /app
WORKDIR /app

COPY /package.json  /app/
COPY /package-lock.json  /app/

RUN npm install

COPY /public /app/public
COPY /src /app/src
COPY /.env /app/
COPY /index.html /app/

RUN npm run build


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]


