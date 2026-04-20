FROM oven/bun:1-alpine

WORKDIR /app

COPY src/bot.ts .

EXPOSE 3001

CMD ["bun", "run", "bot.ts"]
