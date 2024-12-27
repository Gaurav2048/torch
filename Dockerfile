# Base image
FROM node:alpine

COPY . .

RUN npm run dev_client
RUN npm run dev_server
