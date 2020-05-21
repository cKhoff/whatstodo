# base image
FROM node:lts as base
WORKDIR /app
COPY package.json package-lock.json nest-cli.json tsconfig.json tsconfig.build.json ./


# install dependencies
FROM base as dependencies
RUN npm install


# build development image
FROM base as development
COPY --from=dependencies /app/node_modules ./node_modules
CMD npm run start:dev


# build production image
# FROM base as production
# COPY --from=dependencies /app/node_modules ./node_modules
# COPY src ./src
# RUN npm run build
# CMD npm run start:prod