const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1440px",
}

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
}