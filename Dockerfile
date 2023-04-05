FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm i && npm run build

FROM nginx:alpine
COPY --from=build /app/dist/hms /usr/share/nginx/html/
EXPOSE 80