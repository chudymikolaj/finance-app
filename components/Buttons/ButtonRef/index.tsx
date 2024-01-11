import { ReactNode, forwardRef } from "react";
import { Button } from "../button.styled";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: ReactNode;
	action?: () => void;
};

const ButtonComponentRef = forwardRef<HTMLButtonElement, ButtonProps>(
	({ action, children, ...props }, ref) => {
		return (
			<Button
				ref={ref}
				onClick={action}
				{...props}
			>
				{children}
			</Button>
		);
	}
);

export default ButtonComponentRef;
