FROM node:18-alpine

RUN apk update

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Expose the port specified in "vite.config.ts"
EXPOSE 5173

CMD [ "npm", "run", "dev" ]
