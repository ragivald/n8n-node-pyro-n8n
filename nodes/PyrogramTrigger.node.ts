import { INodeType, INodeTypeDescription } from 'n8n-workflow'

export class PyrogramTrigger implements INodeType {
	description: INodeTypeDescription = {
		name: 'pyrogramTrigger',
		displayName: 'Pyrogram Trigger',
		group: ['trigger'],
		version: 1,
		description: 'Listen for Telegram updates via Pyrogram',
		defaults: {
			name: 'Pyrogram Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'pyrogramApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Event Type',
				name: 'eventType',
				type: 'options',
				options: [
					{ name: 'New Message', value: 'newMessage' },
					{ name: 'Edited Message', value: 'editedMessage' },
					{ name: 'New Member', value: 'newMember' },
					{ name: 'Left Member', value: 'leftMember' },
					{ name: 'Callback Query', value: 'callbackQuery' },
					// Додати інші події за потреби
				],
				default: 'newMessage',
				description: 'Тип події для прослуховування',
			},
			{
				displayName: 'Chat ID',
				name: 'chatId',
				type: 'string',
				default: '',
				description: 'ID чату для фільтрації (опціонально)',
				required: false,
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
				description: 'Додатковий фільтр (опціонально)',
				required: false,
			},
		],
	}
}
