import {
  faBars,
  faDownLeftAndUpRightToCenter,
  faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as stylex from '@stylexjs/stylex';
import { Outlet } from 'react-router-dom';
import { COLORS, SIZES } from '../tokens.stylex';
import { toggleNav } from '../utils/appSlice';
import { useAppDispatch, useAppSelector } from '../utils/reduxHook';
import MainSearch from './mainSearch';
import ChangeThemeColor from './common/changeThemeColor';
import ProfileHeader from './user/profileHeader';
import { useTheme } from '../utils/hooks/useTheme';
import ChangeAppDirection from './common/changeAppDirection';
import Button from './ui/button';

export default function MainLayout() {
  const { navSlide, direction } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  return (
    <div
      {...stylex.props(
        theme,
        containers.container,
        !!direction && direction === 'rtl' && styles.rtl
      )}
    >
      {/* HEADER */}
      <div {...stylex.props(theme, containers.headerContainer)}>
        <div
          {...stylex.props(
            theme,
            styles.hoverGray,
            mobileStyle.mobileMenu,
            navSlide && mobileStyle.menuButtonActive
          )}
        >
          <Button
            iconButton
            {...stylex.props(theme, mobileStyle.mobileMenuBtn)}
            onClick={() => dispatch(toggleNav())}
          >
            {/* <img
              src={'/assets/menu.svg'}
              alt='menuBar'
              width={25}
              height={25}
            /> */}
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: '20px' }}
            />
          </Button>
        </div>

        {/* LOGO */}
        <div {...stylex.props(theme, styles.logoContainer)}>
          <img
            src={'/assets/logo.png'}
            alt='logo'
            {...stylex.props(theme, styles.logoImage)}
          />
          <span {...stylex.props(theme, styles.logoName)}>phoenix</span>
        </div>

        <MainSearch />

        <div {...stylex.props(theme, containers.rightActionsContainer)}>
          <ChangeThemeColor />

          <ProfileHeader />

          <ChangeAppDirection />
        </div>
      </div>

      <div
        {...stylex.props(
          theme,
          containers.mainContainer,
          navSlide && styles.closeSideBar
        )}
      >
        {/* SIDE BAR */}
        <div {...stylex.props(theme, containers.sideBarContainer)}>
          <h3>side </h3>
          <h3>side bar</h3>
          <h3>side </h3>
          <h3>side bar</h3>

          <div {...stylex.props(theme, styles.collapseArea)}>
            <Button
              onClick={() => {
                dispatch(toggleNav());
              }}
              {...stylex.props(theme, styles.toggleNavSlideBtn)}
            >
              <FontAwesomeIcon
                icon={
                  navSlide
                    ? faUpRightAndDownLeftFromCenter
                    : faDownLeftAndUpRightToCenter
                }
                style={{ fontSize: navSlide ? '1.5rem' : '1.3rem' }}
              />
            </Button>
            {!navSlide && (
              <span
                onClick={() => {
                  dispatch(toggleNav());
                }}
                {...stylex.props(theme, styles.cursorPointer)}
              >
                Collapsed View
              </span>
            )}
          </div>
        </div>

        {/* outlet footer */}
        <div {...stylex.props(theme, containers.outletContainer)}>
          <Outlet />

          {/* FOOTER */}
          <div {...stylex.props(theme, containers.footerContainer)}>
            <p>
              made with ❤ by{' '}
              <a
                href='mailto:mahdibayat72@hotmail.com'
                {...stylex.props(theme, styles.footerLink)}
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
    borderBottom: `1px solid ${COLORS.spacer}`,
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
  rightActionsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
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
  logoContainer: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  logoImage: {
    width: '27px',
  },
  logoName: {
    display: {
      default: 'block',
      [MOBILE]: 'none',
    },
    fontSize: SIZES.subTitle,
    fontWeight: '600',
  },
  collapseArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: `1px solid ${COLORS.spacer}`,
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
    backgroundColor: COLORS.bg,
  },
  mobileMenuBtn: {
    background: 'none',
    border: 'none',
    width: 25,
    height: 25,
    p: '2px',
    color: COLORS.text,
  },
  menuIcon: {},
  menuButtonActive: {
    backgroundColor: COLORS.primary,
  },
});
