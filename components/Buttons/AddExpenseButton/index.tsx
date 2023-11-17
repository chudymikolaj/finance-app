type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	dispatch?: () => void;
};

export default function AddExpenseButton({
	className,
	dispatch,
	...props
}: ButtonProps) {
	return (
		<button
			className={className}
			onClick={dispatch}
			{...props}
		>
			Nie zapłacono
		</button>
	);
}

let nextId = Math.random() * 10;
