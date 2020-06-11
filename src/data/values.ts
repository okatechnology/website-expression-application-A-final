export const dhuColor = '#f60';
export const dhuColorLight = '#f83';
export const buttonColor = '#0040ED';
export const textMargin = {
  default: 40,
  tb: 40,
  sp: 16,
} as const;
export const breakpoint = {
  sp: 480,
  tb: 900,
} as const;
export const mediaQuery = {
  forSp: `@media screen and (max-width: ${breakpoint.sp}px)`,
  forTb: `@media screen and (max-width: ${breakpoint.tb}px)`,
} as const;
