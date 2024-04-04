import React, { useEffect, useRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import { COLORS } from '../../tokens.stylex';
import gsap from 'gsap';
import { useTheme } from '../../utils/hooks/useTheme';
import { useAppSelector } from '../../utils/reduxHook';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  black?: boolean;
  disabled?: boolean;
  title?: string;
}

export default function Input(props: IInput) {
  const titleRef = useRef<any>();
  const inputRef = useRef<any>();
  const theme = useTheme();
  const direction = useAppSelector((state) => state.app.direction);

  function title(kind: 'up' | 'down') {
    if (kind === 'up') {
      gsap.to(titleRef.current, {
        y: -20,
        x: direction === 'rtl' ? 10 : -10,
        scale: 0.8,
        duration: 0.3,
        opacity: 0.7,
      });
    } else {
      gsap.to(titleRef.current, {
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.3,
        opacity: 1,
      });
    }
  }

  function handleBlur() {
    console.log({ val: inputRef.current.value });
    if (props.value || !!inputRef.current.value) return;
    title('down');
  }

  useEffect(() => {
    if (typeof props.value === 'undefined' && !inputRef?.current?.value) return;
    if (props.value || !!inputRef.current.value) {
      title('up');
    }
  }, [props.value, inputRef]);

  return (
    <div {...stylex.props(theme, styles.container)}>
      <span
        ref={titleRef}
        {...stylex.props(
          theme,
          styles.title,
          direction === 'rtl' && styles.titleRtl
        )}
      >
        {props.title}
      </span>
      <input
        {...props}
        {...stylex.props(theme, styles.base)}
        onFocus={() => title('up')}
        onBlur={handleBlur}
        ref={inputRef}
        onAnimationStart={(e) => {
          // WHEN AUTO FILL TITLE UP TO
          if (e.animationName === 'onAutoFillStart') {
            title('up');
          }
        }}
      />
    </div>
  );
}

const styles = stylex.create({
  container: {
    width: 350,
    position: 'relative',
    marginTop: 20,
  },
  base: {
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    color: COLORS.text,
    outline: 'none',
    minHeight: 30,
    borderBottom: {
      default: `2px solid ${COLORS.spacer}`,
      ':focus': `2px solid ${COLORS.primary}`,
    },
    padding: '.5rem 1rem',
    ':-webkit-autofill': {
      animationName: 'onAutoFillStart',
      transition: 'background-color 50000s ease-in-out 0s',
    },
    ':invalid': {
      color: COLORS.error,
    },
  },
  block: {
    width: '100%',
  },
  disabled: {
    opacity: 0.8,
    cursor: 'not-allowed',
  },
  title: {
    position: 'absolute',
    left: '1rem',
    fontSize: '1.2rem',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  },
  titleRtl: {
    left: 'unset',
    right: '1rem',
  },
});
