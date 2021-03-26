#!/bin/bash

rm -f /etc/nginx/sites-available/symfony.conf

APP_HOSTS_CONFIG="try_files \$uri /index.html =404;"

if [[ "${APP_ENV}" == "local" ]] ; then
    APP_HOSTS_CONFIG="
        proxy_pass         http://nodejs.app.local:3000;
        proxy_redirect     off;
        proxy_set_header   Host \$host;
        proxy_set_header   X-Real-IP \$remote_addr;
        proxy_set_header   X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Host \$server_name;
    "
fi


REACT_SERVER_CONFIG="
server {
    listen 80 default_server;
    listen 443 ssl http2;

    ssl_certificate     /etc/nginx/ssl/app.local.crt;
    ssl_certificate_key /etc/nginx/ssl/app.local.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;

    root /var/www/app/frontend/public;

    index index.html index.htm index.php;

    charset utf-8;

    client_max_body_size 100M;

    # Main
    location / {
        if (\$request_method = \"OPTIONS\") {
            add_header \"Access-Control-Allow-Origin\" \"\$http_origin\" always;
            add_header \"Access-Control-Allow-Credentials\" true always;
            add_header \"Access-Control-Allow-Headers\" \"Cache-Control, X-Requested-With, X-Session-ID\" always;

            add_header \"Access-Control-Max-Age\" 1728000;
            add_header \"Content-Type\" \"text/plain charset=UTF-8\";
            add_header \"Content-Length\" 0;

            return 204;
        }

        ${APP_HOSTS_CONFIG}

    }

    if (!-d \$request_filename) {
        rewrite ^/(.*)/\$ /\$1 permanent;
    }

    error_log /var/log/nginx/nginx_error.log;
    access_log /var/log/nginx/nginx_access.log;
}
"

FILE="/etc/nginx/sites-available/react.conf"

echo "${REACT_SERVER_CONFIG}" > $FILE

service nginx start
while true; do sleep 1d; done
