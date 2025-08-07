# n8n-nodes-pyro

n8n community node for Pyro FastAPI backend integration.

## Features

- Call any Pyro FastAPI endpoint from n8n
- Configure base URL and endpoint
- Pass request body as JSON

## Usage

1. Install this node in your n8n instance
2. Add the Pyro node to your workflow
3. Configure the base URL, endpoint, HTTP method, and body

## Example

- Send a message:
  - Endpoint: `/send_message`
  - Method: `POST`
  - Body: `{ "api_id": ..., "api_hash": ..., ... }`

## Backend (FastAPI)

### Запуск локально

1. Перейдіть у папку `backend`:
   ```bash
   cd backend
   ```
2. Встановіть залежності:
   ```bash
   pip install fastapi pyrogram uvicorn
   ```
3. Запустіть backend:
   ```bash
   uvicorn app:app --reload --host 0.0.0.0 --port 8000
   ```

### Docker (рекомендовано)

#### Dockerfile (приклад)

```Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY backend/ .
RUN pip install fastapi pyrogram uvicorn
EXPOSE 8000
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
```

#### docker-compose.yml (приклад)

```yaml
version: '3.8'
services:
  pyro-backend:
    build: .
    ports:
      - '8000:8000'
    working_dir: /app
    restart: unless-stopped
```

1. Створіть Dockerfile у корені репозиторію (або у backend/).
2. Запустіть:
   ```bash
   docker-compose up --build
   ```

---

## n8n Node

- Після запуску backend, використовуйте Pyro node у n8n для інтеграції з Telegram через ваш FastAPI backend.
- Вказуйте адресу backend у налаштуваннях node (наприклад, http://localhost:8000).

---

## License

MIT
