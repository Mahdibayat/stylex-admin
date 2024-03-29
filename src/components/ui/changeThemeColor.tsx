import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as stylex from '@stylexjs/stylex';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../tokens.stylex';
import { changeTheme } from '../../utils/appSlice';
import { useTheme } from '../../utils/hooks/useTheme';
import { useAppSelector } from '../../utils/reduxHook';
import { gsap } from 'gsap';
import { useRef } from 'react';

export default function ChangeThemeColor() {
  const dispatch = useDispatch();
  const rTheme = useAppSelector((state) => state.app.rTheme);
  const theme = useTheme();
  const iconRef = useRef<any>();

  function fadeShowPales() {
    gsap.fromTo(
      iconRef.current,
      {
        opacity: 0,
      },
      { opacity: 1 }
    );
  }

  return (
    <button
      {...stylex.props(theme, styles.base)}
      onClick={() => {
        fadeShowPales();
        const theme = localStorage.getItem('theme');
        if (!theme) return dispatch(changeTheme('dark'));
        if (theme === 'dark') return dispatch(changeTheme('light'));
        else return dispatch(changeTheme('dark'));
      }}
    >
      <FontAwesomeIcon
        icon={rTheme === 'light' ? faMoon : faSun}
        style={{ fontSize: '20px' }}
        ref={iconRef}
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
