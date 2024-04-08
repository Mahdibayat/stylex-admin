import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as stylex from '@stylexjs/stylex';
import { COLORS, GLOBAL } from '../../tokens.stylex';
import { useTheme } from '../../utils/hooks/useTheme';
import Button from '../ui/button';
import Popper from '../ui/popper';

export default function ProfileHeader() {
  const theme = useTheme();

  return (
    <Popper
      triggerElement={
        <Button
          iconButton
          type='button'
        >
          <FontAwesomeIcon
            icon={faUserTie}
            style={{ fontSize: '20px' }}
          />
        </Button>
      }
      placement='bottom-end'
    >
      <div {...stylex.props(theme, styles.popperContainer)}>
        <FontAwesomeIcon
          icon={faUserTie}
          {...stylex.props(theme, styles.iconBig)}
        />
        <span>Jerry Seinfield</span>

        <br />
        <hr />
        <br />

        <Button
          fullWidth
          {...stylex.props(theme, styles.logoutBtn)}
        >
          {/* <FontAwesomeIcon icon={falogou} /> */}
          sign out
        </Button>
      </div>
    </Popper>
  );
}

const styles = stylex.create({
  triggerActive: {
    backgroundColor: COLORS.primary,
  },
  popperContainer: {
    backgroundColor: COLORS.bg,
    border: `1px solid ${COLORS.spacer}`,
    borderRadius: GLOBAL.radius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '320px',
    minHeight: '150px',
    padding: '1rem  ',
    color: COLORS.text,
    marginTop: '8px',
  },
  iconBig: {
    fontSize: '40px',
  },
  logoutBtn: {
    backgroundColor: COLORS.paper,
    width: '100%',
    height: 30,
    marginTop: 100,
    color: COLORS.text,
    border: `1px solid ${COLORS.spacer}`,
    borderRadius: GLOBAL.radius,
    cursor: 'pointer',
    borderColor: {
      default: COLORS.spacer,
      ':hover': COLORS.primary,
    },
  },
});
