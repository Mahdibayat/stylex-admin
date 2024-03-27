import * as stylex from '@stylexjs/stylex';
import { COLORS } from '../tokens.stylex';
// import { globalTokens } from '../tokens.stylex';

export default function MainSearch() {
  return (
    <div {...stylex.props(style.base)}>
      <h1>hi</h1>
    </div>
  );
}

const style = stylex.create({
  base: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '120px',
    color: COLORS.text,
  },
});
