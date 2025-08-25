# ---- Stage 1: Build ----
# This stage builds the Next.js application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock, pnpm-lock.yaml)
COPY package*.json ./

# Install all dependencies (including devDependencies) needed for the build
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application for production
RUN npm run build


# ---- Stage 2: Production ----
# This stage creates the final, small production image
FROM node:20-alpine AS runner

WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone output from the builder stage
COPY --from=builder /app/.next/standalone ./
# Copy the public and static assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Change ownership of the files to the non-root user
RUN chown -R nextjs:nextjs .

# Switch to the non-root user
USER nextjs

# Expose the port the app will run on
EXPOSE 3000

# The command to start the Next.js server
CMD ["node", "server.js"]