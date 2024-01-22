# base image
FROM node:16

# working directory inside the container 
WORKDIR /arefin_shah_site

# dependencies
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# rest of the app's source code to the workdir
COPY . .

# port for the development server
EXPOSE 3000

# Run the app 
CMD ["npm", "start"]
