
"use client"

import { ReactSVG } from "react-svg"
import styled from "styled-components"

interface SVGProps {
  $filled?: boolean
}

const SVG = styled(ReactSVG) <SVGProps>`
  height: 20px;
  width: 20px;

  & div, svg {
    height: 20px;
    width: 20px;
  }

  & svg path {
    color: ${props => props.theme.colorIcon};
    fill: ${props => props.theme.colorIcon};
  }

  &:hover {
    opacity: .5;
  }

  cursor: pointer;
`;

export default SVG