import * as stylex from '@stylexjs/stylex';
import { COLORS } from '../../tokens.stylex';
import { Link } from 'react-router-dom';

interface IListItem {
  active: boolean;
  title: string;
  imgUrl: string;
  imgActiveUrl: string;
  link: string;
}

export default function ListItem(props: IListItem) {
  return (
    <Link
      to={props.link}
      {...stylex.props(styles.base, props.active && styles.active)}
    >
      {props.active ? (
        <img
          src={props.imgUrl}
          alt={props.title}
          {...stylex.props(styles.image, props.active && styles.imgActive)}
        />
      ) : (
        <img
          src={props.imgActiveUrl}
          alt={props.title}
          {...stylex.props(styles.image, props.active && styles.imgActive)}
        />
      )}

      <span {...stylex.props(styles.span)}>{props.title}</span>
    </Link>
  );
}

const styles = stylex.create({
  base: {
    borderRadius: '130px',
    width: '100%',
    backgroundColor: COLORS.bg,
    color: 'inherit',
    textDecoration: 'none',
    padding: '.5rem 1rem',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,.5)',
    },
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 25,
    height: 25,
    objectFit: 'contain',
    opacity: '.6',
  },
  span: {},
  active: {
    backgroundColor: COLORS.paper,
    opacity: 1,
  },
  imgActive: {
    opacity: 1,
    fill: COLORS.primary,
  },
});
