FROM node:alpine3.11
RUN echo http://dl-cdn.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories
RUN apk update && \
    apk upgrade --no-cache && \
    apk add --no-cache \
        git \
        yarn
RUN yarn config set strict-ssl false && \
    git config --global http.sslVerify false
WORKDIR /app