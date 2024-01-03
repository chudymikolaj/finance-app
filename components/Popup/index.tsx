import { createPortal } from "react-dom";
import { forwardRef } from "react";

import { PopupBackdrop, PopupContainer } from "./popup.styled";

import { PopupTypes, Ref } from "./popup.types";

const Popup = forwardRef<Ref, PopupTypes>(({ children, show }, ref) => {
	return (
		show &&
		createPortal(
			<PopupBackdrop>
				<PopupContainer ref={ref}>{children}</PopupContainer>
			</PopupBackdrop>,
			document.body
		)
	);
});

export default Popup;
