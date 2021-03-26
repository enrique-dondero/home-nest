#!/bin/bash

cd /var/www/app/frontend
yarn
if [[ "local" == "${APP_ENV}" ]]; then
    yarn start
else
    yarn build
fi
