#!/bin/sh


mysql_url="$DB_HOST:$DB_PORT"
while [[ "$(curl -s -o /dev/null -w '%{time_connect}' $mysql_url)" = "0.000" ]]; do
    echo "wait for mysql start"
    sleep 5
done


es_url=http://elasticsearch:9200
while [[ "$(curl -s -o /dev/null -w '%{http_code}' $es_url)" != "200" ]]; do
    echo "wait for elasticsearch start"
    sleep 5
done

/usr/local/bin/docker-entrypoint -f /configuration/logstash/logstash.conf

while true; do sleep 1d; done
