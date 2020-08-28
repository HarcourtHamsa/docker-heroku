# base image
FROM node:10.16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install --silent

# copy all the files in the folder
COPY . . 

# expose port 5000 
EXPOSE 5000

CMD [ "npm", "start" ]
