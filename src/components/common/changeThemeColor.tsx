import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../utils/appSlice';
import { useAppSelector } from '../../utils/reduxHook';
import Button from '../ui/button';

export default function ChangeThemeColor() {
  const dispatch = useDispatch();
  const rTheme = useAppSelector((state) => state.app.rTheme);
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
    <Button
      iconButton
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
    </Button>
  );
}
