import styled from "styled-components";
import Popup from "reactjs-popup";

import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS } from "@/styles/constants";

export const CustomPopupStyle = styled(Popup)`
	@keyframes animationOnOpen {
		0% {
			transform: scale(1) translateY(0px);
			opacity: 0;
			box-shadow: 0 0 0 rgba(241, 241, 241, 0);
		}
		1% {
			transform: scale(0.96) translateY(10px);
			opacity: 0;
			box-shadow: 0 0 0 rgba(241, 241, 241, 0);
		}
		100% {
			transform: scale(1) translateY(0px);
			opacity: 1;
			box-shadow: 0 0 500px rgba(241, 241, 241, 0);
		}
	}

	// use your custom style for ".popup-overlay"
	&-overlay {
		background-color: ${(props) => props.theme.backgroundPopup_5};
	}

	// use your custom style for ".popup-content"
	&-content {
		width: calc(100% - 20px);
		padding: 30px 15px;

		@media ${devices.md} {
			width: 50%;
			padding: 30px;
		}

		background-color: ${(props) => props.theme.backgroundElement};
		border: 1px solid ${(props) => props.theme.borderColor};
		border-radius: ${BORDER_RADIUS};
		animation: animationOnOpen 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
	}
`;
