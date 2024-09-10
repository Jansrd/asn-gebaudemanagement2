# Use a node base image
FROM node:21-alpine

# Set a working directory
WORKDIR /app

ENV GENERATE_SOURCEMAP=false

#Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install && npm install serve

#Copy the source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the backend server
CMD ["npx", "serve", "-s", "build"]