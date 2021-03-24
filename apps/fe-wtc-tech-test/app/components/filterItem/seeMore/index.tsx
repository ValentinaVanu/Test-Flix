import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ExpandMoreIcon, ExpandLessIcon } from '@mono-nx-test-with-nextjs/ui';
import { NONAME } from 'dns';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '5px 0 13px 20px',
      cursor: 'pointer',
    },
    categoryDesktop: {
      '@media (max-width: 768px)': {
        display: 'none',
      }
    },
    mobileIcon: {
      '@media (max-width: 768px)': {
        position: 'relative',
        bottom: '55px',
        left: '260px',
        color: 'black'
      },
    },
    // mobileIconHide : {
    //   '@media (max-width: 768px)': {
    //     display: 'none'
    //   }
    // }
  })
);

const SeeMore = ({ open = false }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.container}`}>
      {open ? <div className={classes.mobileIcon}><ExpandLessIcon /></div> : <div className={classes.mobileIcon}><ExpandMoreIcon /></div>}
      {open ? <Typography className={classes.categoryDesktop}>See less</Typography> : <Typography className={classes.categoryDesktop}>See more</Typography>}
    </div>
  );
};

export default SeeMore;
