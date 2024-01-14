import { type ReactNode } from "react";

export type PopupTypes = {
	children: ReactNode;
	openPopup: boolean;
	closePopup: () => void;
};
