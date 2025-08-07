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

## License

MIT
