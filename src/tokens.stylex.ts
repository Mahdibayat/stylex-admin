import stylex from '@stylexjs/stylex';

const MOBILE = '@media (max-width: 700px)';

export const COLORS = stylex.defineVars({
  primary: 'black',
  primaryLight: 'black',
  primaryDark: 'black',
  primaryText: 'black',
  secondary: 'black',
  secondaryLight: 'black',
  secondaryDark: 'black',
  secondaryText: 'black',
  text: 'black',
  textGray: 'black',
  bg: 'black',
  paper: 'black',
  spacer: 'black',
  error: 'black',
  success: 'black',
  warning: 'black',
  info: 'black',
});

export const SIZES = stylex.defineVars({
  title: { default: '30px', [MOBILE]: '22px' },
  subTitle: { default: '24px', [MOBILE]: '18px' },
  body: { default: '16px', [MOBILE]: '13px' },
  caption: { default: '12px', [MOBILE]: '10px' },
});

// cant define global variable with color
//  color change on client
export const GLOBAL = stylex.defineVars({
  radius: '.375rem',
  pagesPadding: { default: '1rem 1.5rem', [MOBILE]: '1rem' },
  font: '"Nunito Sans", sans-serif',
});
