import { ClickAwayListener } from '@mui/base';
import { Popper as MuiPopper, PopperPlacementType } from '@mui/base/Popper';
import React, { ReactElement, useEffect, useRef } from 'react';
import * as stylex from '@stylexjs/stylex';

interface IPopper {
  triggerElement: ReactElement;
  placement: PopperPlacementType;
  children: ReactElement;
  isFocused?: boolean;
}

export default function Popper(props: IPopper) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const constId = crypto.randomUUID();
  const triggerRef = useRef(null);

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? constId : undefined;

  useEffect(() => {
    if (typeof props.isFocused === 'undefined') return;
    !props.isFocused ? setAnchorEl(null) : setAnchorEl(triggerRef.current);
  }, [props.isFocused]);

  return (
    <>
      <div
        onClick={handleClick}
        ref={triggerRef}
        {...stylex.props(styles.base, open && styles.activePopper)}
      >
        {props.triggerElement}
      </div>

      <MuiPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement={props.placement}
      >
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          {props.children}
        </ClickAwayListener>
      </MuiPopper>
    </>
  );
}

const styles = stylex.create({
  base: {
    transition: 'transform 100ms',
  },
  activePopper: {},
});
