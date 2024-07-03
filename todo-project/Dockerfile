FROM node:20-alpine

WORKDIR /app

ADD package.json index.js image.js page.html ./

RUN npm install --no-save

# disable for now in order to have permissions to the volume
# RUN chown node .
# USER node

ENTRYPOINT ["npm"]
CMD ["start"]
