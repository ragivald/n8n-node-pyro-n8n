import { INodeTypeDescription } from 'n8n-workflow'

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
}
