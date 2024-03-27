import * as stylex from '@stylexjs/stylex';
import { COLORS, GLOBAL, SIZES } from '../tokens.stylex';
// import { globalTokens } from '../tokens.stylex';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MainSearch() {
  return (
    <div {...stylex.props(styles.base)}>
      <input
        {...stylex.props(styles.input)}
        placeholder='Search ...'
      />
      {/* <img
        {...stylex.props(styles.icon)}
        src={'/assets/search.svg'}
        alt={'search'}
      /> */}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        {...stylex.props(styles.icon)}
      />
    </div>
  );
}

const styles = stylex.create({
  base: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    maxWidth: '350px',
    borderRadius: '120px',
    backgroundColor: COLORS.paper,
    color: COLORS.text,
    border: { default: GLOBAL.border, ':focus': `1px solid ${COLORS.primary}` },
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
