
"use client"

import { ReactSVG } from "react-svg"
import styled from "styled-components"

interface SVGProps {
  $small?: boolean,
  $medium?: boolean,
}

const SVG = styled(ReactSVG) <SVGProps>`
  ${props => props.$small ? `
    height: 15px;
    width: 15px;

    & div, svg {
      height: 15px;
      width: 15px;
    }
  ` : `
    height: 20px;
    width: 20px;

    & div, svg {
      height: 20px;
      width: 20px;
    }
  `}

  & svg path {
    color: ${props => props.theme.colorIcon};
    fill: ${props => props.theme.colorIcon};
  }

  cursor: pointer;
`;

export default SVG