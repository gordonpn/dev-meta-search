FROM node:14-alpine AS builder
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY --chown=node:node package*.json ./
USER node
RUN npm ci
RUN npm cache clean --force --loglevel=error
COPY --chown=node:node . .
RUN npm run export

FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/out /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
