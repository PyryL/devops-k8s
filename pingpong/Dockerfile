FROM node:20-alpine

WORKDIR /app

ADD package.json .
ADD index.js .

RUN npm install --no-save

# disable this for now so we have permissions to PVC
# RUN chown node .
# USER node

ENTRYPOINT ["npm"]
CMD ["start"]
