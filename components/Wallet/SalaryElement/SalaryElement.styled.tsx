import styled from "styled-components"

import {
  SIZES,
  WEIGHT,
  BORDER_RADIUS
} from "@/styles/constants"

import {
  FlexColumn,
  FlexRowSpaceBetweenStretch,
} from "@/styles/mixins.styled";

export const SalaryContainer = styled.div`
  position: relative;
  z-index: 1;
`;

export const SalaryCalculation = styled.div`
  ${FlexRowSpaceBetweenStretch};

  padding: 18px 26px;
  background-color: ${props => props.theme.colorElement};
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: ${BORDER_RADIUS};
  position: relative;
  z-index: 2;
  gap: 10px;
  color: ${props => props.theme.color};
`;

export const SalaryCalculationColumn = styled.div`
  ${FlexColumn};

  width: 100%;
  max-width: calc((100% / 3) - 14.5px);
`;

export const SalaryCalculationColumnLine = styled.div`
  width: 1px;
  min-height: 100%;
  background-color: ${props => props.theme.color};
  display: inline-block;
`;

export const SalaryCalculationColumnHeader = styled.div`
  margin: 0 0 10px;
  font-size: ${SIZES.normalText};
  font-weight: ${WEIGHT.medium};
`;

export const SalaryCalculationColumnValue = styled.div<{ $red?: boolean; }>`
  font-size: ${SIZES.bigText};
  font-weight: ${WEIGHT.medium};
  color: ${props => props.$red ? props.theme.colorRed : props.theme.color};
  overflow: hidden;
  overflow-wrap: break-word;
`;