import * as stylex from '@stylexjs/stylex';
import { GLOBAL } from '../tokens.stylex';

export default function DashboardPage() {
  return (
    <div {...stylex.props(style.base)}>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
      <h1>DashboardPage</h1>
    </div>
  );
}

const style = stylex.create({
  base: {
    minHeight: '80vh',
    padding: GLOBAL.pagesPadding,
    overflowY: 'auto',
  },
});
