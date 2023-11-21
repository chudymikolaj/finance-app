export type ActionType = (
	id: string,
	name: string,
	value: number,
	tags: { type: string; name: string }[],
	isPaid?: boolean
) => void;
