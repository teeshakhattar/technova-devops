# Use Node.js official image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package files first and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]
# Use Node.js official image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package files first and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD [ "node", "server.js" ]
