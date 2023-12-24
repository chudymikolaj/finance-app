import SVGimage from "@/components/SvgIcon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	name?: string;
	svgUrl?: string;
	action?: () => void;
};

export default function Button({
	className,
	action,
	name,
	svgUrl,
	...props
}: ButtonProps) {
	return (
		<button
			className={className}
			onClick={action}
			{...props}
		>
			{svgUrl ? <SVGimage src={svgUrl} /> : name}
		</button>
	);
}
