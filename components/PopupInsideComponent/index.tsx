import { forwardRef } from "react";

import { type BudgetPopupType, type Ref } from "./PopupInsideElement.types";

import {
	PopupInsideElementWrapper,
	PopupInsideElementContainer,
} from "./PopupInsideElement.styled";

const PopupInsideElementComponent = forwardRef<Ref, BudgetPopupType>(
	({ showPopup, children }, ref) => {
		return (
			showPopup && (
				<PopupInsideElementWrapper>
					<PopupInsideElementContainer ref={ref}>
						{children}
					</PopupInsideElementContainer>
				</PopupInsideElementWrapper>
			)
		);
	}
);

export default PopupInsideElementComponent;
