export const dhuColor = '#f60';
export const buttonColor = '#0040ED';
export const breakpoint = {
  sp: 480,
  tb: 900,
} as const;
export const mediaQuery = {
  forSp: `@media screen and (max-width: ${breakpoint.sp}px)`,
  forTb: `@media screen and (max-width: ${breakpoint.tb}px)`,
} as const;
