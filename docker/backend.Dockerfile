FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY backend/package*.json ./
RUN npm ci --omit=dev

COPY backend/src ./src

USER node
EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:4000/api/health > /dev/null || exit 1

CMD ["node", "src/server.js"]
