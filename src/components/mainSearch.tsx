import * as stylex from '@stylexjs/stylex';
import { COLORS, GLOBAL, SIZES } from '../tokens.stylex';
// import { globalTokens } from '../tokens.stylex';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../utils/hooks/useTheme';
import { useRef } from 'react';
import gsap from 'gsap';

export default function MainSearch() {
  const theme = useTheme();
  const iconRef = useRef<any>();
  function anime(kind: 'start' | 'reset') {
    if (kind === 'start') {
      gsap
        .timeline()
        .to(iconRef.current, {
          rotate: 80,
        })
        .to(iconRef.current, { scale: 50, opacity: 0.1 });
    }

    if (kind === 'reset') {
      gsap
        .timeline()
        .to(iconRef.current, {
          rotate: 0,
        })
        .to(iconRef.current, { scale: 1, opacity: 1 });
    }
  }

  return (
    <div {...stylex.props(theme, styles.base)}>
      <input
        {...stylex.props(theme, styles.input)}
        placeholder='Search ...'
        onFocus={() => anime('start')}
        onBlur={() => anime('reset')}
      />
      {/* <img
        {...stylex.props(theme, styles.icon)}
        src={'/assets/search.svg'}
        alt={'search'}
      /> */}
      <FontAwesomeIcon
        ref={iconRef}
        icon={faMagnifyingGlass}
        {...stylex.props(theme, styles.icon)}
      />
    </div>
  );
}

const styles = stylex.create({
  base: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    overflow: 'hidden',
    borderRadius: '120px',
  },
  input: {
    width: '100%',
    borderRadius: '120px',
    backgroundColor: COLORS.paper,
    color: COLORS.text,
    border: {
      default: `1px solid ${COLORS.spacer}`,
      ':focus': `1px solid ${COLORS.primary}`,
    },
    outline: 'none',
    padding: '.5rem 1rem',
    paddingLeft: '45px',
    fontSize: SIZES.body,
    boxShadow: {
      default: 'unset',
      ':focus': `inset 0 0 8px ${COLORS.primary}`,
    },
  },
  icon: {
    position: 'absolute',
    left: '17px',
    top: '50%',
    fontSize: SIZES.body,
    transform: 'translateY(-50%)',
    color: COLORS.text,
  },
});
