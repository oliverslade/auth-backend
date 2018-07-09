FROM node:9
WORKDIR /auth-backend
COPY package.json /auth-backend
RUN npm install
COPY . /app-backend
CMD node server.js
EXPOSE 8090
