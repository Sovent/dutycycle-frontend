FROM node:14.14.0-alpine as builder
WORKDIR /usr/app
COPY ./package.json ./
RUN yarn install
COPY . .
ENV REACT_APP_API_URL=api
RUN yarn build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html