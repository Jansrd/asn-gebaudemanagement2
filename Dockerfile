# Use a node base image
FROM node:21-alpine

# Set a working directory
WORKDIR /app

#Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install && npm install serve

#Copy the source code
COPY . .

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max_old_space_size=1280
# Build the app
RUN NODE_OPTIONS=--max_old_space_size=1280 npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the backend server
CMD ["npx", "serve", "-s", "build"]
