# Stage 1: Build the React app
FROM node:16 AS build

# Set the working directory in the Docker image
WORKDIR /arefin_shah_ui_garden

# Copy package.json and package-lock.json (or yarn.lock) to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code into the Docker image
COPY . .

# Build app for production
RUN npm run build

# Stage 2: Serve the app using Node.js and Express
FROM node:16 AS serve

# Set the working directory to serve  app
WORKDIR /arefin_shah_ui_garden

# Install Express
RUN npm install express

# Copy the built app from the previous stage
COPY --from=build /arefin_shah_ui_garden/build ./public

# Copy the Express server script
COPY server.js .

# Expose the port your app runs on
EXPOSE 8083

# Start your app
CMD ["node", "server.js"]
