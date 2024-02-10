"use client";

import styled from "styled-components";

const SVG = styled.div`
	& svg path {
		color: ${(props) => props.theme.iconColor};
		fill: ${(props) => props.theme.iconColor};
	}
`;

export default SVG;
