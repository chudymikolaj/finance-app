import React from "react";
import SVG from "./svgicon.styled";
import { ReactSVG } from "react-svg";

interface SVGImageProps {
	src: any;
	onClick: () => void;
}

const SVGImage = ({ src, onClick }: SVGImageProps) => {
	return (
		<SVG onClick={onClick}>
			<ReactSVG src={src} />
		</SVG>
	);
};

export default SVGImage;
