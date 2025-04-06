FROM node:22-alpine

WORKDIR /app

# Copy root workspace files
COPY package.json yarn.lock turbo.json ./
COPY frontend/package.json ./frontend/
COPY backend/package.json ./backend/

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

# Build apps
# RUN yarn build

# Expose ports
EXPOSE 5173 5001

# Start both services using turbo
CMD ["yarn", "turbo", "run", "dev", "--parallel"]