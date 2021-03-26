FROM php:7.3-fpm-alpine

RUN apk add --no-cache \
    git \
    icu-dev \
    libzip-dev \
    zip

RUN docker-php-ext-install \
    bcmath \
    intl \
    opcache \
    pdo \
    pdo_mysql \
    pcntl \
    zip

COPY --from=composer /usr/bin/composer /usr/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_MEMORY_LIMIT -1
RUN composer global require hirak/prestissimo --no-plugins --no-scripts

ARG HOST_UID

RUN if [ ! -z "${HOST_UID}" ]; then \
        deluser www-data \
        && addgroup www-data \
        && adduser -u "${HOST_UID}" -G www-data -H -s /bin/sh -D www-data; \
    fi

ENV WWW_DATA_UID ${HOST_UID}

COPY ./php.ini /usr/local/etc/php/conf.d/
COPY ./php.pool.conf /usr/local/etc/php-fpm.d/