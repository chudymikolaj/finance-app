import SVGimage from "@/components/SvgIcon";
import { Button } from "../button.styled";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	name?: string;
	svgUrl?: string;
	action?: () => void;
	$big?: boolean;
};

export default function ButtonSVG({
	className,
	action,
	name,
	svgUrl,
	...props
}: ButtonProps) {
	return (
		<Button
			className={className}
			onClick={action}
			{...props}
		>
			{svgUrl ? <SVGimage src={svgUrl} /> : name}
		</Button>
	);
}
