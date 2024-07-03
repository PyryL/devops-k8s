FROM node:20-alpine

WORKDIR /app

ADD loginput.js .

RUN chown node .
USER node

ENTRYPOINT ["node"]
CMD ["loginput.js"]
