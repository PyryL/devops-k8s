FROM node:20-alpine

WORKDIR /app

COPY job.js ./

ENTRYPOINT [ "node" ]
CMD [ "job.js" ]
