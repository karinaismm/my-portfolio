# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container if it exists
COPY package*.json ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]