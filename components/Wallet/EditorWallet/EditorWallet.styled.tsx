import styled from "styled-components"
import { SIZES, WEIGHT, BORDER_RADIUS } from "@/styles/constants"
import { FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled"

export const EditorWallet = styled.div <{ $animate?: boolean; }>`
  width: 100%;
  margin: auto;
  background-color: ${props => props.theme.colorElement};
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: ${BORDER_RADIUS};
  visibility: ${props => props.$animate ? "visible" : "hidden"};
  position: absolute;
  top: 0;
  left: 0;
  transform: ${props => props.$animate ? "translateY(calc(86px + 10px))" : "translateY(0)"};
  transition: transform cubic-bezier(0.25,0.46,0.45,0.94) 250ms, visibility cubic-bezier(0.25,0.46,0.45,0.94) 250ms;
  z-index: 1;
`;

export const EditorWalletForm = styled.form`
  padding: 16px;
`;

export const EditorWalletLabel = styled.label`
  ${FlexRowSpaceBetweenCenter};
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
`;

export const EditorWalletName = styled.span`
  flex: 1 0 100%;
  font-size: ${SIZES.smallText};
  font-weight: ${WEIGHT.normal};
`;

export const EditorWalletInputWrapper = styled.div`
  width: 100%;
  padding: 6px;
  ${FlexRowSpaceBetweenCenter};
  flex: 1 0 100%;
  background-color: ${props => props.theme.colorElement_5};
  border-radius: ${BORDER_RADIUS};
`;

export const EditorWalletInput = styled.input`
  width: 100%;
  max-width: calc(100%);
  padding: 6px;
  margin: 0 6px 0 0;
  background-color: transparent;
  border: unset;
  border-right: 2px solid ${props => props.theme.colorElement};
  font-size: ${SIZES.smallText};
  color: ${props => props.theme.color};
`;

export const EditorWalletButton = styled.button`
  padding: 6px 26px;
  border-radius: ${BORDER_RADIUS};
  color: ${props => props.theme.color};
  font-size: ${SIZES.smallText};
  transition: background-color cubic-bezier(0.45,0.05,0.55,0.95) 250ms;

  &:hover {
    background-color: ${props => props.theme.colorElement};
  }
`;