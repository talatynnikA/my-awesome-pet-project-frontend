FROM node:20.12.1-slim

WORKDIR /app

COPY package*.json ./

COPY . .
#RUN cd frontend
RUN pwd
RUN npm install
RUN npm run build

CMD ["npm", "start"]
