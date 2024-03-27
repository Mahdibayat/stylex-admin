import * as stylex from '@stylexjs/stylex';
import { COLORS, GLOBAL } from '../tokens.stylex';

export default function DashboardPage() {
  return (
    <div {...stylex.props(styles.base)}>
      <h3>Dashboard</h3>
      <p {...stylex.props(styles.textGray)}>long page</p>
    </div>
  );
}

const styles = stylex.create({
  base: {
    minHeight: 'calc(100vh - 65px - 65px)',
    padding: GLOBAL.pagesPadding,
    overflowY: 'auto',
  },
  textGray: {
    color: COLORS.textGray,
  },
});
