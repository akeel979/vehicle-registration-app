FROM node:alpine

EXPOSE 3001

WORKDIR /app

COPY package.json ./
COPY ./ ./
RUN npm install
CMD ["npm", "run", "start"]
