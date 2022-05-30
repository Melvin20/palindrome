FROM node:lts-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./
RUN npm  install
RUN npm install -g @nestjs/cli
RUN npm install -g nodemon
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
