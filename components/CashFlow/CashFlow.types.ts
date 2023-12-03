
export type CashFlowItemTagsType = {
	tags?: {type: string, name: string}[];
};

export type CashFlowItemType = {
	id: string;
	name: string;
	value: number;
	type?: string;
	isPaid?: boolean;
	date?: string;
} & CashFlowItemTagsType;

export type CashFlowListType = {
	type: string;
	items?: CashFlowItemType[];
};