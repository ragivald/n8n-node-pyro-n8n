import { INodeType, INodeTypeDescription } from 'n8n-workflow'

export class Pyrogram implements INodeType {
	description: INodeTypeDescription = {
		name: 'Pyrogram',
		displayName: 'Pyrogram',
		group: ['transform'],
		version: 1,
		description: 'Interact with Telegram using Pyrogram MTProto API',
		defaults: {
			name: 'Pyrogram',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'pyrogramApi',
				required: true,
			},
		],
		properties: [
			// TODO: Add resources and operations
		],
	}
}
