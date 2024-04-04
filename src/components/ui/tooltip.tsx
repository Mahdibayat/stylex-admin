import { ReactNode, useRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import { COLORS, GLOBAL, SIZES } from '../../tokens.stylex';
import { useTheme } from '../../utils/hooks/useTheme';
import gsap from 'gsap';

interface ITooltip {
  body: ReactNode;
  children: ReactNode;
  placement: 'top' | 'right' | 'left' | 'bottom';
}

export default function Tooltip({ body, children, placement }: ITooltip) {
  const theme = useTheme();
  const ref = useRef<any>();

  function mouseOver() {
    gsap.to(ref.current, {
      opacity: 1,
      delay: 1,
    });
  }
  function mouseLeave() {
    gsap.to(ref.current, {
      opacity: 0,
    });
  }

  return (
    <div
      {...stylex.props(theme, styles.base)}
      onMouseEnter={mouseOver}
      onMouseLeave={mouseLeave}
    >
      {children}
      <div
        ref={ref}
        {...stylex.props(theme, styles.body, styles[placement])}
        onMouseLeave={mouseLeave}
      >
        {body}
      </div>
    </div>
  );
}

const styles = stylex.create({
  base: {
    position: 'relative',
    width: 'fit-content',
  },
  body: {
    position: 'absolute',
    padding: '1rem',
    borderRadius: GLOBAL.radius,
    backgroundColor: COLORS.paper,
    opacity: 0,
  },
  top: {
    bottom: 0,
  },
  right: {
    left: 0,
  },
  left: {
    right: 0,
  },
  bottom: {
    top: 0,
  },
});
