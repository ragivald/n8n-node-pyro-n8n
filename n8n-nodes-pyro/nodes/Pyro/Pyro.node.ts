// n8n-nodes-pyro/nodes/Pyro/Pyro.node.ts
import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { nodeDescription } from './Pyro.description';

export class Pyro implements INodeType {
	description: INodeTypeDescription = nodeDescription;

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const baseUrl = this.getNodeParameter('baseUrl', 0) as string;
		const endpoint = this.getNodeParameter('endpoint', 0) as string;
		const method = this.getNodeParameter('method', 0) as string;
		const body = this.getNodeParameter('body', 0, {}) as object;
		for (let i = 0; i < items.length; i++) {
			const options = {
				method,
				body: Object.keys(body).length ? JSON.stringify(body) : undefined,
				headers: { 'Content-Type': 'application/json' },
				uri: `${baseUrl}${endpoint}`,
				json: true,
			};
			const responseData = await this.helpers.request(options);
			returnData.push({ json: responseData });
		}
		return [returnData];
	}
}

// n8n-nodes-pyro/nodes/Pyro/Pyro.credentials.ts
import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class PyroApi implements ICredentialType {
	name = 'pyroApi';
	displayName = 'Pyro API';
	documentationUrl = '';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:8000',
			description: 'Base URL of your Pyro FastAPI backend',
		},
	];
}

// n8n-nodes-pyro/nodes/Pyro/Pyro.description.ts
import { INodeTypeDescription } from 'n8n-workflow';

export const nodeDescription: INodeTypeDescription = {
	displayName: 'Pyro',
	name: 'pyro',
	icon: 'file:pyro.svg',
	group: ['transform'],
	version: 1,
	description: 'Interact with Pyro FastAPI backend',
	subtitle: '={{$parameter["endpoint"]}}',
	defaults: {
		name: 'Pyro',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'pyroApi',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Endpoint',
			name: 'endpoint',
			type: 'string',
			default: '/send_message',
			description: 'API endpoint to call (e.g. /send_message)',
		},
		{
			displayName: 'HTTP Method',
			name: 'method',
			type: 'options',
			options: [
				{ name: 'POST', value: 'POST' },
				{ name: 'GET', value: 'GET' },
			],
			default: 'POST',
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '{}',
			description: 'Request body as JSON',
		},
	],
};

// n8n-nodes-pyro/package.json
{
  "name": "n8n-nodes-pyro",
  "version": "0.1.0",
  "description": "n8n community node for Pyro FastAPI backend integration",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc"
  },
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^18.0.0",
    "typescript": "^4.0.0"
  },
  "dependencies": {
    "n8n-workflow": "^1.0.0"
  }
}

// n8n-nodes-pyro/tsconfig.json
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "commonjs",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["nodes/**/*.ts"]
}

// n8n-nodes-pyro/README.md
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