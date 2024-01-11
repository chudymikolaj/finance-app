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

import { ButtonSvg, ButtonName } from "../button.styled";

const ButtonRefSvg = forwardRef<Ref, Props>(
	({ action, name, svgUrl, ...props }, ref) => {
		if (svgUrl && name) {
			return (
				<ButtonSvg
					ref={ref}
					onClick={action}
					{...props}
				>
					<ButtonName>{name}</ButtonName>
					<SVGimage src={svgUrl} />
				</ButtonSvg>
			);
		}

		return (
			<ButtonSvg
				ref={ref}
				onClick={action}
				{...props}
			>
				{svgUrl ? <SVGimage src={svgUrl} /> : name}
			</ButtonSvg>
		);
	}
);

export default ButtonRefSvg;
