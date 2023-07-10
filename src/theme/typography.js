// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const FONTLight = 'inter-light'; 
const FONT_PRIMARY = 'inter-Regular'; 
const FONT_SECONDARY = 'inter-SemiBold';
const FONT_BOLD = 'inter-Bold';
 
// Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
  // fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
 
  h1: {
    fontFamily: FONT_BOLD,
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    color:'#0d0735',
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    color:'#0d0735',
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    color:'#0d0735',
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    color:'#0d0735',
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    color:'#0d0735',
  },
  h6: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    color:'#0d0735',
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    color:'#0d0735',
  },
  p:{
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    color:'#0D0735',
  },
  subtitle2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 300,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    color:'#0d0735',
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    fontFamily: FONT_PRIMARY,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: FONT_BOLD,
    fontWeight: 800,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};

export default typography;
