# Use the official Node image as a base image
FROM node:18-alpine

# Install build tools needed by Alpine for WebAssembly or native modules (like mozjpeg)
RUN apk add --no-cache libc6-compat build-base python3

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and yarn.lock first to leverage Docker cache
COPY package.json yarn.lock ./

# Install all dependencies (including dev dependencies needed for build)
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js app for production
RUN yarn build

# Remove development dependencies after the build step to optimize image size
RUN yarn install --production --ignore-scripts --prefer-offline

# Expose the port on which Next.js will run (default: 3000)
EXPOSE 3000

# Start the Next.js server in production mode
CMD ["yarn", "start"]
