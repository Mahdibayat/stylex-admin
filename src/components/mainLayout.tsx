import * as stylex from '@stylexjs/stylex';
import MainSearch from './mainSearch';
import { useAppDispatch, useAppSelector } from '../utils/reduxHook';
import { toggleNav } from '../utils/appSlice';
import { COLORS, GLOBAL, SIZES } from '../tokens.stylex';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  const { navSlide } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    <div {...stylex.props(containers.container)}>
      {/* HEADER */}
      <div {...stylex.props(containers.headerContainer)}>
        <div
          {...stylex.props(
            styles.hoverGray,
            mobileStyle.mobileMenu,
            navSlide && mobileStyle.menuButtonActive
          )}
        >
          <button
            {...stylex.props(mobileStyle.mobileMenuBtn)}
            onClick={() => dispatch(toggleNav())}
          >
            <img
              src={'/assets/menu.svg'}
              alt='menuBar'
              width={25}
              height={25}
            />
          </button>
        </div>

        {/* LOGO */}
        <div {...stylex.props(styles.logoContainer)}>
          <img
            src={'/assets/logo.png'}
            alt='logo'
            {...stylex.props(styles.logoImage)}
          />
          <span {...stylex.props(styles.logoName)}>phoenix</span>
        </div>

        <MainSearch />
      </div>

      <div
        {...stylex.props(
          containers.mainContainer,
          navSlide && styles.closeSideBar
        )}
      >
        {/* SIDE BAR */}
        <div {...stylex.props(containers.sideBarContainer)}>
          <h3>side </h3>
          <h3>side bar</h3>
          <h3>side </h3>
          <h3>side bar</h3>

          <div {...stylex.props(styles.collapseArea)}>
            <button
              onClick={() => {
                dispatch(toggleNav());
              }}
              {...stylex.props(
                styles.toggleNavSlideBtn,
                !navSlide && styles.toggleNavImgReverse
              )}
            >
              <img
                src='/assets/open.svg'
                alt='logo'
                {...stylex.props(styles.cursorPointer, styles.toggleNavImg)}
              />
            </button>

            {!navSlide && (
              <span
                onClick={() => {
                  dispatch(toggleNav());
                }}
                {...stylex.props(styles.cursorPointer)}
              >
                Collapsed View
              </span>
            )}
          </div>
        </div>

        {/* outlet footer */}
        <div {...stylex.props(containers.outletContainer)}>
          <Outlet />

          {/* FOOTER */}
          <div {...stylex.props(containers.footerContainer)}>
            <p>
              made with ❤ by{' '}
              <a
                href='mailto:mahdibayat72@hotmail.com'
                {...stylex.props(styles.footerLink)}
              >
                Mahdi Bayat
              </a>
            </p>
          </div>
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
    backgroundColor: COLORS.bg,
    color: COLORS.text,
  },
  headerContainer: {
    height: '65px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.paper,
    borderBottom: GLOBAL.border,
    padding: '.5rem 1.5rem',
  },
  mainContainer: {
    display: 'grid',
    height: 'calc(100vh - 65px)',
    gridTemplateColumns: {
      default: '250px 1fr',
      [MOBILE]: '0 1fr',
    },
    transition: 'grid-template-columns 300ms',
  },
  sideBarContainer: {
    position: 'relative',
    backgroundColor: COLORS.paper,
    borderRight: GLOBAL.border,
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
    borderTop: GLOBAL.border,
    height: '65px',
    padding: '0 1rem',
  },
});

const styles = stylex.create({
  closeSideBar: {
    gridTemplateColumns: {
      default: '80px 1fr',
      [MOBILE]: '1fr 0',
    },
  },
  logoContainer: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  logoImage: {
    width: '27px',
  },
  logoName: {
    fontSize: SIZES.subTitle,
    fontWeight: '600',
  },
  collapseArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: GLOBAL.border,
    width: '100%',
    height: '65px',
    display: 'flex',
    gap: '5px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLink: {
    color: COLORS.primary,
  },
  toggleNavSlideBtn: {
    width: '30px',
    height: '30px',
    background: 'none',
    border: 'none',
    transition: 'all 200ms',
    display: 'flex',
    gap: '5px',
    color: COLORS.text,
    fontSize: SIZES.caption,
  },
  toggleNavImg: {
    width: '30px',
    height: '30px',
    objectFit: 'contain',
  },
  toggleNavImgReverse: {
    transform: 'scaleX(-1)',
  },
  hoverGray: {
    color: { default: COLORS.text, ':hover': COLORS.textGray },
  },
  cursorPointer: {
    cursor: 'pointer',
  },
});

const mobileStyle = stylex.create({
  mobileMenu: {
    display: {
      default: 'none',
      [MOBILE]: 'block',
    },
    marginRight: '10px',
    padding: '5px',
    paddingTop: '10px',
    borderRadius: '50%',
  },
  mobileMenuBtn: {
    background: 'none',
    border: 'none',
    p: '2px',
  },
  menuButtonActive: {
    backgroundColor: COLORS.spacer,
  },
});
