// lightAndDark

import { createTheme } from '@stylexjs/stylex';
import { COLORS } from '../tokens.stylex';

const darkColors = {
  primary: '#f5a267',
  primaryLight: '#ffc49a',
  primaryDark: '#ae744a',
  primaryText: '#85a9ff',
  text: '#e3e6ed',
  textGray: '#8a94ad',
  bg: '#0f111a',
  paper: '#141824',
  spacer: '#31374a',
};
const lightColors = {
  primary: '#f5a267',
  primaryLight: '#ffc49a',
  primaryDark: '#ae744a',
  primaryText: '#3874ff',
  text: '#141824',
  textGray: '#525b75',
  bg: '#f5f7fa',
  paper: '#fff',
  spacer: '#cbd0dd',
};

const DARK = '@media (prefers-color-scheme: dark)';

export const dark = createTheme(COLORS, darkColors);
export const light = createTheme(COLORS, lightColors);
export const auto = createTheme(COLORS, {
  primary: {
    default: lightColors.primary,
    [DARK]: darkColors.primary,
  },
  primaryLight: {
    default: lightColors.primaryLight,
    [DARK]: darkColors.primaryLight,
  },
  primaryDark: {
    default: lightColors.primaryDark,
    [DARK]: darkColors.primaryDark,
  },
  primaryText: {
    default: lightColors.primaryText,
    [DARK]: darkColors.primaryText,
  },
  text: {
    default: lightColors.text,
    [DARK]: darkColors.text,
  },
  textGray: {
    default: lightColors.textGray,
    [DARK]: darkColors.textGray,
  },
  bg: {
    default: lightColors.bg,
    [DARK]: darkColors.bg,
  },
  paper: {
    default: lightColors.paper,
    [DARK]: darkColors.paper,
  },
  spacer: {
    default: lightColors.spacer,
    [DARK]: darkColors.spacer,
  },
});
