import * as stylex from '@stylexjs/stylex';
import { Link, Outlet } from 'react-router-dom';
import { COLORS, SIZES } from '../tokens.stylex';
import { useTheme } from '../utils/hooks/useTheme';
import { useAppSelector } from '../utils/reduxHook';
import ListItem from './ui/listItem';
import Translate from '../assets/translate.svg';

export default function MainLayout() {
  const { navSlide, direction } = useAppSelector((state) => state.app);
  const theme = useTheme();

  return (
    <div
      {...stylex.props(
        theme,
        containers.container,
        !!direction && direction === 'rtl' && styles.rtl
      )}
    >
      <div
        {...stylex.props(
          theme,
          containers.mainContainer,
          navSlide && styles.closeSideBar
        )}
      >
        {/* SIDE BAR */}
        <div {...stylex.props(theme, containers.sideBarContainer)}>
          <Link
            to={'/'}
            {...stylex.props(styles.titleArea)}
          >
            <img
              src='/user.jpeg'
              alt='user icon'
              {...stylex.props(styles.userImage)}
            />
            <h1 style={{ fontSize: '1.8rem' }}>Nerd Studio</h1>
          </Link>

          <div {...stylex.props(styles.list)}>
            <ListItem
              active={true}
              imgUrl={'/assets/translate.svg'}
              imgActiveUrl={'/assets/Atranslate.svg'}
              title='Translate'
              link='/translate'
            />
          </div>
        </div>

        {/* outlet footer */}
        <div {...stylex.props(theme, containers.outletContainer)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const MOBILE = '@media (max-width: 700px)';

const containers = stylex.create({
  container: {
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.paper,
    color: COLORS.text,
  },
  mainContainer: {
    display: 'grid',
    height: '100vh',
    gridTemplateColumns: {
      default: '250px 1fr',
      [MOBILE]: '0 1fr',
    },
    transition: 'grid-template-columns 300ms',
  },
  sideBarContainer: {
    position: 'relative',
    backgroundColor: COLORS.bg,
    borderRight: `1px solid ${COLORS.spacer}`,
    borderLeft: `1px solid ${COLORS.spacer}`,
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    textAlign: {
      default: 'inherit',
      [MOBILE]: 'center',
    },
  },
  outletContainer: {
    padding: 0,
    height: '100%',
    overflowY: 'auto',
  },
  footerContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.paper,
    borderTop: `1px solid ${COLORS.spacer}`,
    height: '65px',
    padding: '0 1rem',
  },
});

const styles = stylex.create({
  rtl: {
    direction: 'rtl',
  },
  closeSideBar: {
    gridTemplateColumns: {
      default: '60px 1fr',
      [MOBILE]: '1fr 0',
    },
  },
  toggleNavSlideBtn: {
    background: 'none',
    border: 'none',
    transition: 'all 200ms',
    display: 'flex',
    color: COLORS.text,
    fontSize: SIZES.caption,
  },
  toggleNavImg: {
    width: '30px',
    height: '30px',
    objectFit: 'contain',
  },
  hoverGray: {
    color: { default: COLORS.text, ':hover': COLORS.textGray },
  },
  cursorPointer: {
    cursor: 'pointer',
  },
  titleArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
    marginBottom: 10,
    color: 'inherit',
    textDecoration: 'unset',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: '50%',
  },
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center',
    padding: '.5rem 1rem',
    marginTop: 30,
  },
});
