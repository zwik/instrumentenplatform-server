FROM node:18.12.1

# Do not use root
USER node

# Use the node user's home directory
WORKDIR /home/node

# Install app dependencies
COPY --chown=node:node package*.json .
RUN npm install

# Bundle app source
COPY --chown=node:node src .
COPY --chown=node:node .env .

EXPOSE 4000 