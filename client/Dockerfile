# base image
FROM node:10.16-alpine

# use directory as working directory
WORKDIR /usr/src/app/client

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies silently
RUN npm install --silent

# copy every file from current directory
COPY . .

# expose docker port 5000
EXPOSE 5000

# run app
CMD ["npm", "start"]