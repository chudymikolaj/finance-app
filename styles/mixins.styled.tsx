import { devices } from "./breakpoints";
import { SIZES } from "./constants";

export const FlexRow = `
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = `
  display: flex;
  flex-direction: column;
`;

export const FlexColumnStart = `
  ${FlexColumn};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FlexColumnCenter = `
  ${FlexColumn};
  justify-content: center;
  align-items: center;
`;

export const FlexRowStart = `
  ${FlexRow};
  justify-content: flex-start;
`;

export const FlexRowCenter = `
  ${FlexRow};
  align-items: center;
`;

export const FlexRowSpaceBetween = `
  ${FlexRow};
  justify-content: space-between;
`;

export const FlexRowSpaceBetweenCenter = `
  ${FlexRowSpaceBetween};
  align-items: center;
`;

export const FlexRowSpaceBetweenStretch = `
  ${FlexRowSpaceBetween};
  align-items: stretch;
`;

export const FlexColumnSpaceBetween = `
  ${FlexColumn};
  justify-content: space-between;
`;

export const FlexColumnSpaceBetweenStretch = `
  ${FlexColumnSpaceBetween};
  align-items: stretch;
`;

export const FlexCenter = `
  ${FlexRow};
  justify-content: center;
  align-items: center;
`;

export const FlexRowAlignCenter = `
  ${FlexRow};
  justify-content: center;
  align-items: center;
`;

export const Button = `
  width: 100%;
  height: auto;
  padding: 10px 16px;
  border-radius: 5px;
  font-size: ${SIZES.buttonFontSize};

  @media ${devices.xl} {
    padding: 15px 20px;
  }
`;

export const ButtonSubmit = `
  width: 100%;
  height: auto;
  padding: 10px 16px;
  border-radius: 5px;
  font-size: ${SIZES.buttonFontSize};
`;

export const ButtonPopUp = `
  height: auto;
  padding: 8px 16px;

  @media ${devices.xl} {
    padding: 8px 20px;
  }

  border-radius: 5px;
  font-size: ${SIZES.buttonFontSize};
`;
