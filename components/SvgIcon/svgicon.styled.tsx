"use client";

import { ReactSVG } from "react-svg";
import styled from "styled-components";

interface SVGProps {
	$small?: boolean;
	$medium?: boolean;
}

const SVG = styled(ReactSVG)<SVGProps>`
	height: 100%;
	width: 100%;

	& div,
	svg {
		height: 100%;
		width: 100%;
	}

	& svg path {
		color: ${(props) => props.theme.colorIcon};
		fill: ${(props) => props.theme.colorIcon};
	}

	cursor: pointer;
`;

export default SVG;
