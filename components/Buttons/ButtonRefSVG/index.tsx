import SVGimage from "@/components/SvgIcon";
import { forwardRef, ReactNode } from "react";

// base button, with ref forwarding
type Props = {
	className?: string;
	name?: string;
	svgUrl?: string;
	action?: () => void;
	$big?: boolean;
};

export type Ref = HTMLButtonElement;

import { Button } from "../button.styled";

const ButtonRefSvg = forwardRef<Ref, Props>(
	({ action, name, svgUrl, ...props }, ref) => {
		return (
			<Button
				ref={ref}
				onClick={action}
				{...props}
			>
				{svgUrl ? <SVGimage src={svgUrl} /> : name}
			</Button>
		);
	}
);

export default ButtonRefSvg;
