import stylex from '@stylexjs/stylex';

const DARK = '@media (prefers-color-scheme: dark)';
const MOBILE = '@media (max-width: 700px)';

export const COLORS = stylex.defineVars({
  primary: { default: '#3874ff', [DARK]: '#3874ff' },
  primaryText: { default: '#3874ff', [DARK]: '#85a9ff' },
  text: { default: '#141824', [DARK]: '#e3e6ed' },
  textGray: { default: '#525b75', [DARK]: '#8a94ad' },
  bg: { default: '#f5f7fa', [DARK]: '#0f111a' },
  paper: { default: '#fff', [DARK]: '#141824' },
  spacer: { default: '#cbd0dd', [DARK]: '#31374a' },
});

export const SIZES = stylex.defineVars({
  title: { default: '30px', [MOBILE]: '22px' },
  subTitle: { default: '24px', [MOBILE]: '18px' },
  body: { default: '16px', [MOBILE]: '13px' },
  caption: { default: '12px', [MOBILE]: '10px' },
});

export const GLOBAL = stylex.defineVars({
  border: `1px solid ${COLORS.spacer}`,
  radius: '.375rem',
  pagesPadding: { default: '1rem 1.5rem', [MOBILE]: '1rem' },
  font: '"Nunito Sans", sans-serif',
});
