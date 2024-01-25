# Use the official Node.js image as the base image
FROM node:20 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest
COPY . .

# Build
RUN npm run compile

# Define runner
FROM node:20 as runner

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install --omit=dev

# Copy build from builder
COPY --from=builder /app/dist /app/dist

# Move migrations up so that migration runner finds them
RUN mv /app/dist/migrations/ /app/

# Expose the port your app will run on
EXPOSE 3000

# Command to run your application
CMD ["node", "/app/dist/src/index.js"]
