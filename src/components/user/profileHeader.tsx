import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Popper } from '@mui/base/Popper';
import { COLORS, GLOBAL } from '../../tokens.stylex';
import { useTheme } from '../../utils/hooks/useTheme';
import Button from '../ui/button';

export default function ProfileHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <Button
        iconButton
        type='button'
        onClick={handleClick}
        {...stylex.props(theme, open && styles.triggerActive)}
      >
        <FontAwesomeIcon
          icon={faUserTie}
          style={{ fontSize: '20px' }}
        />
      </Button>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
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
    </>
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
