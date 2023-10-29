import styled from "styled-components"
import { Button } from "@/styles/mixins.styled"
import { FlexColumnStart } from "@/styles/mixins.styled"

export const PopupContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 26px;
  background-color: ${props => props.theme.colorElement};
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: 5px;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
`;

export const PopupHeader = styled.h4`
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: 600;
`;

export const PopupBody = styled.div`
  ${FlexColumnStart};
  margin: 0 0 30px;
`;

export const PopupFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

export const PopupButton = styled.button`
  ${Button};

  background-color: ${props => props.theme.colorButton};
  color: ${props => props.theme.colorButtonFont};
`;