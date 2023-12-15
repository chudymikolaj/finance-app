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
  padding: 15px 20px;
  border-radius: 5px;
`;

export const ButtonPopUp = `
  padding: 8px 20px;
  border-radius: 5px;
`;
