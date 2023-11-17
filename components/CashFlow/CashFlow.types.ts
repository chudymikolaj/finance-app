
export type CashFlowItemTagsType = {
	tags?: {type: string, name: string}[];
};

export type CashFlowItemType = {
	id: number;
	name: string;
	value: number;
	isPaid: boolean;
	type?: string;
} & CashFlowItemTagsType;

export type CashFlowListType = {
	type: string;
	items?: CashFlowItemType[];
};