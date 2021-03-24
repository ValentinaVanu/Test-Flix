import { makeStyles, createStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) =>
  createStyles({
    filterMenu: {
      paddingBottom: '10px',
      '@media (min-width: 1024px)' : {
        gridRow: '2/auto',
        gridColumn: '1/2',
        marginBottom: '20px',
        justifySelf: 'center',
      },
      gridColumn: '1/-1',
    },
    paper: {
      borderRadius: '20px',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      padding: '13px 0 5px',
    },
    cardsContainer: {
      '@media (min-width: 1024px)' : {
        display: 'grid',
        gridTemplateColumns: 'min(232px) auto',
        columnGap: '40px',
      },
    },
    resetFilters: {
      display: 'flex',
      color: theme.palette.common.black,
      fontWeight: 'bold',
      fontSize: '1rem',
      backgroundColor: theme.palette.common.white,
      margin: '0 auto 20px',
      borderRadius: '10px',
      minWidth: '200px',
    },
    closeFilters: {
      display: 'none',
      '@media (max-width: 768px)': {
        display: 'flex',
        color: theme.palette.common.black,
        fontWeight: 'bold',
        fontSize: '1rem',
        backgroundColor: theme.palette.common.white,
        margin: '0 auto 20px',
        borderRadius: '10px',
        minWidth: '200px',
      }
    }
  })
);


