import React from 'react';
import * as stylex from '@stylexjs/stylex';

export default function TranslatePage() {
  return <div {...stylex.props(styles.base)}></div>;
}

const styles = stylex.create({
  base: {},
});
