import * as stylex from '@stylexjs/stylex';
import { useTheme } from '../../utils/hooks/useTheme';
import { COLORS, GLOBAL } from '../../tokens.stylex';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export default function Button(props: IButton) {
  const theme = useTheme();
  return (
    <button
      {...props}
      {...stylex.props(
        theme,
        styles.base,
        props.variant === 'primary' && styles.primary,
        props.variant === 'secondary' && styles.secondary
      )}
    >
      {props.children}
    </button>
  );
}

const DARK = '@media (prefers-color-scheme: dark)';

const styles = stylex.create({
  base: {
    minWidth: 80,
    padding: 'auto 20px',
    minHeight: 30,
    color: COLORS.text,
    cursor: 'pointer',
    borderRadius: GLOBAL.radius,
    boxShadow: {
      default: 'none',
      ':hover': {
        default: 'inset 0 0 2px red',
        [DARK]: '0 0 2px white',
        ':active': 'inset 0 0 4px red',
      },
    },
    border: 'none',
    backgroundColor: {
      default: COLORS.bg,
      [DARK]: COLORS.paper,
    },
  },
  secondary: {
    backgroundColor: COLORS.spacer,
    color: {
      default: 'white',
      [DARK]: COLORS.text,
    },
  },
  primary: {
    backgroundColor: {
      default: COLORS.primary,
      ':hover': COLORS.primaryLight,
    },
    color: {
      default: 'inherit',
      ':hover': {
        [DARK]: 'dimgray',
      },
    },
  },
});
