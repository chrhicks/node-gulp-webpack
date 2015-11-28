FROM node:5

ENV NODE_ENV production

RUN mkdir -p /opt/chrhicks/service/log

RUN npm install -g gulp forever

ADD . /opt/chrhicks/service

WORKDIR /opt/chrhicks/service

RUN npm install

CMD forever -o ./log/ndoe-gulp-webpack.log -e ./log/ndoe-gulp-webpack.error.log server.js

