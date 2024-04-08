import * as stylex from '@stylexjs/stylex';
import { COLORS, GLOBAL } from '../tokens.stylex';
import { useTheme } from '../utils/hooks/useTheme';
import Button from '../components/ui/button';
import Input from '../components/ui/input';
import Tooltip from '../components/ui/tooltip';
import Select from '../components/ui/select';
import { useState } from 'react';

export default function DashboardPage() {
  const theme = useTheme();

  const [select, setSelect] = useState<string | number>('');

  console.log({ select });

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
      <br />
      <Tooltip
        body={<h3>hi tooltip</h3>}
        placement='top'
      >
        <h1>TOOL TIP</h1>
      </Tooltip>

      <br />
      <br />
      <br />
      <br />

      <Select
        data={[
          { title: 'اولین عنوان', value: 1 },
          { title: 'عنوان دوم اینجاست', value: 2 },
          { title: 'این است سلکت ملی', value: 3 },
          { title: 'و اما تو', value: 4 },
        ]}
        onChange={setSelect}
        value={select}
        title='my custom select'
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
