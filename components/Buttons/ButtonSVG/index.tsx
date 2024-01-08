import SVGimage from "@/components/SvgIcon";
import { Button, ButtonName } from "../button.styled";

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
	if (svgUrl && name) {
		return (
			<Button
				className={className}
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
			className={className}
			onClick={action}
			{...props}
		>
			{svgUrl ? <SVGimage src={svgUrl} /> : name}
		</Button>
	);
}
