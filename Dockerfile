FROM node:18-alpine as build
WORKDIR /usr/local/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /usr/local/app
COPY --from=build /usr/local/app/package*.json ./
COPY --from=build /usr/local/app/next.config.js .
COPY --from=build /usr/local/app/public ./public
COPY --from=build /usr/local/app/.next/standalone ./
COPY --from=build /usr/local/app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]