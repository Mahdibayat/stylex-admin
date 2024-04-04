// lightAndDark

import { createTheme } from '@stylexjs/stylex';
import { COLORS } from '../tokens.stylex';

const lightColors = {
  primary: '#90caf9',
  primaryLight: '#e3f2fd',
  primaryDark: '#42a5f5',
  primaryText: '#3874ff',
  secondary: '#ce93d8',
  secondaryLight: '#f3e5f5',
  secondaryDark: '#ab47bc',
  secondaryText: '#141824',
  text: '#141824',
  textGray: '#525b75',
  bg: '#f5f7fa',
  paper: '#fff',
  spacer: '#cbd0dd',
  error: '#f44336',
  success: '#66bb6a',
  warning: '#ffa726',
  info: '#0288d1',
};
const darkColors = {
  primary: '#42a5f5',
  primaryLight: '#90caf9',
  primaryDark: '#0288d1',
  primaryText: '#85a9ff',
  secondary: '#ce93d8',
  secondaryLight: '#f3e5f5',
  secondaryDark: '#ab47bc',
  secondaryText: '#141824',
  text: '#e3e6ed',
  textGray: '#8a94ad',
  bg: '#0f111a',
  paper: '#141824',
  spacer: '#31374a',
  error: '#f44336',
  success: '#388e3c',
  warning: '#f57c00',
  info: '#29b6f6',
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
  secondary: {
    default: lightColors.secondary,
    [DARK]: darkColors.secondary,
  },
  secondaryLight: {
    default: lightColors.secondaryLight,
    [DARK]: darkColors.secondaryLight,
  },
  secondaryDark: {
    default: lightColors.secondaryDark,
    [DARK]: darkColors.secondaryDark,
  },
  secondaryText: {
    default: lightColors.secondaryText,
    [DARK]: darkColors.secondaryText,
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
  error: {
    default: lightColors.error,
    [DARK]: darkColors.error,
  },
  success: {
    default: lightColors.success,
    [DARK]: darkColors.success,
  },
  warning: {
    default: lightColors.warning,
    [DARK]: darkColors.warning,
  },
  info: {
    default: lightColors.info,
    [DARK]: darkColors.info,
  },
});
