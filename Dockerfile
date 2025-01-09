# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the application
RUN npm run build

# Install only production dependencies
RUN npm prune --production

# Stage 2: Run the Next.js application
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the built application and production dependencies
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port 3000
EXPOSE 3000

# Set the command to start the application
CMD ["npm", "run", "start"]
