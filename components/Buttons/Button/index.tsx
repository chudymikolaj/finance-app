import { ReactNode } from "react";
import { Button } from "../button.styled";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: ReactNode;
	action?: () => void;
};

export default function ButtonComponent({
	action,
	children,
	...props
}: ButtonProps) {
	return (
		<Button
			onClick={action}
			{...props}
		>
			{children}
		</Button>
	);
}
