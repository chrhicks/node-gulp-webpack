FROM node:5

ENV NODE_ENV production

RUN mkdir -p /opt/chrhicks/service/log

RUN npm install -g gulp forever

ADD . /opt/chrhicks/service

WORKDIR /opt/chrhicks/service

#
# Note: this is installing production modules. Assets won't be built. This image'
# assumes you've deployed your assets to a CDN and are properly referencing them
# in your views.
#
RUN npm install

#
# Use forever to keep this thing going in case it crashes in production.
# Hopefully there is alerting around the error log so you can monitor when it
# happens.
#
CMD forever -o ./log/node-gulp-webpack.log -e ./log/node-gulp-webpack.error.log dist/server.js

