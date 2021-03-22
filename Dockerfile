FROM node:14.16.0

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY src ./
COPY .env ./

# Add wait-for-it
COPY wait-for-it.sh ./

EXPOSE 4000 