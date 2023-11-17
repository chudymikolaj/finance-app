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
  padding: 8px 22px;
  border-radius: 5px;
`;
