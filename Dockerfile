# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Run unit tests with coverage (you can adjust or add more test commands if necessary)
RUN npm test -- --coverage

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable for the port
ENV PORT=3000

# Run app when the container launches
CMD ["node", "index.js"]
