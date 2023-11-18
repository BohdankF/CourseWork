FROM node:19-alpine3.16 as build_stage
WORKDIR /app/kholiavka
COPY . .
RUN npm i && npm run build

FROM nginx:1.23.3
COPY --from=build_stage /app/kholiavka/dist /usr/share/nginx/html
COPY default_nginx.conf /etc/nginx/conf.d/default.conf
