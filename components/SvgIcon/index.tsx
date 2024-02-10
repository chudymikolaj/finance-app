import React from "react";
import SVG from "./svgicon.styled";
import { ReactSVG } from "react-svg";

interface SVGImageProps {
	src: any;
}

const SVGImage: React.FC<SVGImageProps> = ({ src }) => {
	return (
		<SVG>
			<ReactSVG src={src} />
		</SVG>
	);
};

export default SVGImage;
