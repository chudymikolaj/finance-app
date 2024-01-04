import { Z_INDEX_99999 } from "@/styles/constants";
import styled from "styled-components";

export const PopupBackdrop = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background-color: ${(props) => props.theme.backgroundPopup_5};
	z-index: ${Z_INDEX_99999};
`;

export const PopupContainer = styled.div`
	width: 100%;
	max-width: 500px;
	padding: 30px;
	background-color: ${(props) => props.theme.backgroundElement};
	backdrop-filter: blur(10px);
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: 5px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
`;
