# ЭТАП 1: Сборка (Builder)
FROM node:20-alpine AS builder
WORKDIR /app

# ЭТАП 2: Продакшен (Production Nginx)
FROM nginx:alpine
# Копируем собранную статику из первого этапа
COPY --from=builder /app/dist /usr/share/nginx/html
# Заменяем дефолтный конфиг Nginx на наш
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]