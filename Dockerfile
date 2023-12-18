ARG BUILD_IMAGE=node:20.1.0
ARG RUN_IMAGE=gcr.io/distroless/nodejs20-debian11

# Build stage
FROM $BUILD_IMAGE AS build-env
COPY . /app
WORKDIR /app
RUN npm ci && npm run build

# Prepare production dependencies
FROM $BUILD_IMAGE AS deps-env
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Create final production stage
FROM $RUN_IMAGE AS run-env
WORKDIR /usr/app
COPY --from=deps-env /node_modules ./node_modules
COPY --from=build-env /app/build ./build
COPY package.json ./

ENV NODE_ENV="production"
EXPOSE 8080
CMD ["build"]