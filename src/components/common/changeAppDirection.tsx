import { faSignsPost } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setDirection } from '../../utils/appSlice';
import { useAppDispatch, useAppSelector } from '../../utils/reduxHook';
import Button from '../ui/button';
import { useEffect } from 'react';

export default function ChangeAppDirection() {
  const { direction } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  function toggleDirection() {
    dispatch(setDirection(direction === 'ltr' ? 'rtl' : 'ltr'));
  }

  useEffect(() => {
    if (!direction) return;
    document.documentElement.setAttribute('dir', direction);
  }, [direction]);

  return (
    <Button
      iconButton
      onClick={toggleDirection}
    >
      <FontAwesomeIcon
        icon={faSignsPost}
        fontSize={20}
      />
    </Button>
  );
}
