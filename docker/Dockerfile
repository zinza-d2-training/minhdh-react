FROM node:18.0-alpine

WORKDIR /app
COPY ./docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

CMD ["sh", "/docker-entrypoint.sh"]
