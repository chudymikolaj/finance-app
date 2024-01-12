import SVGimage from "@/components/SvgIcon";
import { ButtonSvg, ButtonName } from "../button.styled";

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
	if (svgUrl === "back.svg" && name) {
		return (
			<ButtonSvg
				className={className}
				onClick={action}
				{...props}
			>
				<SVGimage src={svgUrl} />
				<ButtonName>{name}</ButtonName>
			</ButtonSvg>
		);
	}

	if (svgUrl && name) {
		return (
			<ButtonSvg
				className={className}
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
			className={className}
			onClick={action}
			{...props}
		>
			{svgUrl ? <SVGimage src={svgUrl} /> : name}
		</ButtonSvg>
	);
}
