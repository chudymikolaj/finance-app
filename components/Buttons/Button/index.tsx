import { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: ReactNode;
	action?: any;
};

export default function ButtonComponent({
	action,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			onClick={action}
			{...props}
		>
			{children}
		</button>
	);
}
1;
