FROM node:14.20-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm i && npm run build

# FROM nginx:latest

# Stage 2
FROM nginx:latest
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/dist/hms /usr/share/nginx/html

EXPOSE 443