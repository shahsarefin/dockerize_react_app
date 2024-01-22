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
   - docker build -t arefin_shah_docker_ca_11
4. Run the container:

   - docker run -p 7775:3000 arefin_shah_docker_ca11

5. Access the application in your browser at `localhost:7775`.

## Notes

- The development server inside the container runs on port 3000, which is mapped to port 7775 on your host machine.
- Ensure port 7775 is free on your local machine.
- The application will display a `<h1>` tag with the text "Codin 1" and an `<h2>` tag with text "Learn Docker".
