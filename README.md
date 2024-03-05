# React App Development Environment

## Getting Started

This guide will help you get the React app running on your local machine with Docker.

### Prerequisites

Ensure you have the following installed:

    - Docker

#### Checking Docker Installation

To verify that Docker is installed, open a terminal or command prompt and run: - docker --version

This command should display the Docker version if it's correctly installed.

#### If You Are New to Git

If you're unfamiliar with Git, follow these steps to clone the repository:

1. Install Git from [git-scm.com](https://git-scm.com/).
2. Open a terminal or command prompt.
3. Use the following command to clone the repository, replacing `URL_OF_THE_REPOSITORY` with the actual repository URL:
   - git clone URL_OF_THE_REPOSITORY

### Running the Application

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Build the Docker container:
   -docker build -t arefin_shah_coding_assignment12 .

4. Run the container:

   - docker run -d -p 8083:8083 arefin_shah_coding_assignment12

5. Access the application in your browser at `localhost:8083`.

## Dockerfile Explanation

The Dockerfile provided in this project contains two stages:

### Stage 1: Build the React app

In this stage, the Docker image starts with a Node.js base image (`node:16`). It sets the working directory inside the image to `/arefin_shah_ui_garden`, copies `package.json` and `package-lock.json` (or `yarn.lock`) to the working directory, installs dependencies using `npm install`, and then copies the rest of the application source code into the image. Finally, it builds the React app for production using `npm run build`.

### Stage 2: Serve the app using Node.js and Express

This stage also starts with a Node.js base image (`node:16`). It sets the working directory to `/arefin_shah_ui_garden`, installs the Express server using `npm install express`, and then copies the built app from the previous stage into the `./public` directory. Additionally, it copies the `server.js` script into the image. Finally, it exposes port 8083 and starts the Express server to serve the React app.

## Notes

- The development server inside the container runs on port 3000, which is mapped to port 7775 on your host machine.
- Ensure port 7775 is free on your local machine.
- The application will display a `<h1>` tag with the text "Codin 1" and an `<h2>` tag with text "Learn Docker".
