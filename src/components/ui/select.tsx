import { useCallback, useRef, useState } from 'react';
import { COLORS, GLOBAL } from '../../tokens.stylex';
import { useTheme } from '../../utils/hooks/useTheme';
import Input from './input';
import Popper from './popper';
import * as stylex from '@stylexjs/stylex';

interface ISelect {
  data: ISelectData[];
  value: string | number;
  onChange: (arg0: string | number) => void;
  title?: string;
  menuWidth?: number;
}

type ISelectData = {
  value: string | number;
  title: string;
};

export default function Select(props: ISelect) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function handleSelect(value: string | number) {
    props.onChange(value);
  }

  const convertValue = useCallback(() => {
    return props.data.find((item) => item.value === props.value)?.title || '';
  }, [props.value, props.data]);

  return (
    <Popper
      placement='bottom-end'
      triggerElement={
        <Input
          value={convertValue()}
          title={props.title}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
      }
      isFocused={isFocused}
    >
      <div {...stylex.props(theme, styles.base(props.menuWidth || 350))}>
        {props.data.map((item) => (
          <div
            key={item.value}
            {...stylex.props(theme, styles.listItem)}
            onClick={() => handleSelect(item.value)}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </Popper>
  );
}

const styles = stylex.create({
  base: (width) => ({
    width,
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    borderRadius: GLOBAL.radius,
    backgroundColor: COLORS.paper,
  }),
  listItem: {
    padding: '.6rem 1rem',
    cursor: 'pointer',
    transition: 'background-color 200ms',
    ':hover': {
      backgroundColor: COLORS.bg,
    },
  },
});
