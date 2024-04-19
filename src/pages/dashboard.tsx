import * as stylex from '@stylexjs/stylex';
import { COLORS, GLOBAL } from '../tokens.stylex';
import { useTheme } from '../utils/hooks/useTheme';
import Button from '../components/ui/button';
import Input from '../components/ui/input';
import Tooltip from '../components/ui/tooltip';
import Select from '../components/ui/select';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const theme = useTheme();

  const [select, setSelect] = useState<string | number>('');

  console.log({ select });

  return (
    <div {...stylex.props(theme, styles.base)}>
      <h2>Dashboard Page</h2>
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
