import { CustomPopupStyle } from "../Popup/popup.styled";

import { PopupTypes } from "../Popup/popup.types";

const PopupInsideElement = ({ children, onClose }: PopupTypes) => {
	return (
		<CustomPopupStyle
			trigger={onClose}
			modal
			lockScroll
			nested
		>
			{children}
		</CustomPopupStyle>
	);
};

export default PopupInsideElement;
