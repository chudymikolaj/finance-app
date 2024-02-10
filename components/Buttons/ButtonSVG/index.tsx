import SVGimage from "@/components/SvgIcon";
import { ButtonSvg, ButtonSvgAndName, ButtonName } from "../button.styled";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	name?: string;
	svgUrl?: string;
	action?: () => void;
	$big?: boolean;
};

export default function ButtonSVG({ className, action, name, svgUrl, ...props }: ButtonProps) {
	if (svgUrl === "back.svg" && name) {
		return (
			<ButtonSvgAndName
				onClick={action}
				{...props}
			>
				<SVGimage src={svgUrl} />
				<ButtonName>{name}</ButtonName>
			</ButtonSvgAndName>
		);
	}

	if (svgUrl && name) {
		return (
			<ButtonSvgAndName
				onClick={action}
				{...props}
			>
				<ButtonName>{name}</ButtonName>
				<SVGimage src={svgUrl} />
			</ButtonSvgAndName>
		);
	}

	return (
		<ButtonSvg
			onClick={action}
			{...props}
		>
			{svgUrl ? <SVGimage src={svgUrl} /> : name}
		</ButtonSvg>
	);
}
