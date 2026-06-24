FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json .  

RUN npm install

COPY . .

RUN npm run ng build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/angular/browser /usr/share/nginx/html
