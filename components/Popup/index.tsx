import { CustomPopupStyle } from "./Popup.styled";

import { PopupTypes } from "./Popup.types";

const PopupComponent = ({ children, openPopup, closePopup }: PopupTypes) => {
	return (
		<CustomPopupStyle
			open={openPopup}
			onClose={closePopup}
			modal
			lockScroll
			nested
		>
			{children}
		</CustomPopupStyle>
	);
};

export default PopupComponent;
