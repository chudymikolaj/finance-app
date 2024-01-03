import SVGimage from "@/components/SvgIcon";
import { forwardRef } from "react";

// base button, with ref forwarding
type Props = {
	className?: string;
	name?: string;
	svgUrl?: string;
	action?: () => void;
	$big?: boolean;
};

export type Ref = HTMLButtonElement;

import { Button, ButtonName } from "../button.styled";

const ButtonRefSvg = forwardRef<Ref, Props>(
	({ action, name, svgUrl, ...props }, ref) => {
		if (svgUrl && name) {
			return (
				<Button
					ref={ref}
					onClick={action}
					{...props}
				>
					<ButtonName>{name}</ButtonName>
					<SVGimage src={svgUrl} />
				</Button>
			);
		}

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
