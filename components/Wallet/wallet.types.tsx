export type ActionType = (
	id: number,
	name: string,
	value: number,
	tags: { type: string; name: string }[],
	isPaid?: boolean
) => void;
