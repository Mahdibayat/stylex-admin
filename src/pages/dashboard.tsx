import * as stylex from '@stylexjs/stylex';
import { COLORS, GLOBAL } from '../tokens.stylex';
import { useTheme } from '../utils/hooks/useTheme';
import Button from '../components/ui/button';
import Input from '../components/ui/input';

export default function DashboardPage() {
  const theme = useTheme();
  return (
    <div {...stylex.props(theme, styles.base)}>
      <h3>Dashboard</h3>
      <p {...stylex.props(theme, styles.textGray)}>long page</p>
      <br />
      <Button variant='primary'>text btn</Button>
      <br />
      <Input
        title='search'
        type='password'
      />
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
