export interface SettingsRoute {
	'uuid': string;
	'address': string;
	'mask': string;
	'gateway': string;
	'interface': string;
}

export enum SortingDirection {
	ASC = 'asc',
	DESC = 'desc',
}

export type Sorting = SortingDirection | undefined;

export interface ButtonClickEventValue {
	direction: Sorting;
	name: string;
}
