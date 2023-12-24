import SVGimage from "@/components/SvgIcon";
import { forwardRef } from "react";

type ButtonProps = {
	className?: string;
	name?: string;
	svgUrl?: string;
	action?: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, action, name, svgUrl, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={className}
				onClick={action}
				{...props}
			>
				{svgUrl ? <SVGimage src={svgUrl} /> : name}
			</button>
		);
	}
);

export default Button;
