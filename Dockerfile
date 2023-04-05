FROM node:latest AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/hms /usr/share/nginx/html/
EXPOSE 80