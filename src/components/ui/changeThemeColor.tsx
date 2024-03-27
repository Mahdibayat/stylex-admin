import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as stylex from '@stylexjs/stylex';
import { COLORS } from '../../tokens.stylex';

export default function ChangeThemeColor() {
  return (
    <button
      {...stylex.props(styles.base)}
      onClick={() => {
        alert(
          'If your system is in dark mode, the site will also go into dark mode /n اگر سیستم شما در حالت تاریک است، سایت نیز به حالت تاریک می رود'
        );
      }}
    >
      <FontAwesomeIcon
        icon={faMoon}
        style={{ fontSize: '20px' }}
      />
    </button>
  );
}

const styles = stylex.create({
  base: {
    color: COLORS.text,
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    border: 'unset',
    backgroundColor: COLORS.bg,
  },
});
