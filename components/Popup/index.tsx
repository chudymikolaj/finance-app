import { createPortal } from "react-dom";
import {
  PopupContainer,
  PopupHeader,
  PopupBody,
  PopupFooter,
  PopupButton
} from "./popup.styled";

import { PopupTypes } from "./popup.types";

const Popup = ({ children, show, title, onChange, onClose }: PopupTypes) => {
  return (
    show && createPortal(
      <PopupContainer>
        <PopupHeader>
          {title}
        </PopupHeader>
        <PopupBody>
          {children}
        </PopupBody>
        <PopupFooter>
          <PopupButton onClick={onChange}>Zmień</PopupButton>
          <PopupButton onClick={onClose}>Anuluj</PopupButton>
        </PopupFooter>
      </PopupContainer>,
      document.body
    )
  )
}

export default Popup;