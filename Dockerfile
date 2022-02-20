FROM node:16.14.0

# Do not use root
USER node

# Create app directory
WORKDIR /home/node

# Install app dependencies
COPY --chown=node:node package*.json .
RUN npm install

# Bundle app source
COPY --chown=node:node src .
COPY --chown=node:node .env .

EXPOSE 4000 