# Base image
FROM node:alpine

RUN npm rebuild bcrypt --build-from-source

WORKDIR app/

COPY . .

RUN npm run dev_client
RUN npm run dev_server
