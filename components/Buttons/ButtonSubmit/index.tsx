import { ReactNode } from "react";
import { ButtonSubmit } from "../button.styled";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: ReactNode;
	action?: () => void;
};

export default function ButtonSubmitComponent({
	action,
	children,
	...props
}: ButtonProps) {
	return (
		<ButtonSubmit
			onClick={action}
			{...props}
		>
			{children}
		</ButtonSubmit>
	);
}
