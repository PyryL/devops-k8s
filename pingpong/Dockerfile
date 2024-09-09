FROM node:20-alpine

WORKDIR /app

ADD package.json .
ADD index.js .
ADD database.js .

RUN npm install --no-save

RUN chown node .
USER node

ENTRYPOINT ["npm"]
CMD ["start"]
