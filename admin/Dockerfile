FROM node:18-alpine

WORKDIR /admin

EXPOSE 4100

COPY package.json package-lock.json ./

RUN npm install 

COPY . ./

CMD ["npm", "start"]