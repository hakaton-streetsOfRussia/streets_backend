FROM node:20.9.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install sharp
COPY . ./
RUN npm run build
CMD ["npm", "run", "start"]