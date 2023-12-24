type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	status?: boolean;
	action: () => void;
};

export default function CheckExpenseButtonStyled({
	className,
	status,
	action,
	...props
}: ButtonProps) {
	return (
		<button
			className={className}
			onClick={action}
			{...props}
		>
			{status ? "Zapłacono" : "Nie zapłacono"}
		</button>
	);
}
