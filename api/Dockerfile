FROM node:alpine

EXPOSE 4000

WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN npm install
CMD ["npm", "run", "build"]
CMD ["node", "build/app.js"]