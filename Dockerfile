# stage 1
FROM node:12-alpine AS base

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# stage 2

FROM node:12-alpine
COPY --from=base /app/package.json .
COPY --from=base /app/dist ./dist
RUN npm install express
EXPOSE 8000
CMD yarn start
