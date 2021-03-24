import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import { Container, CssBaseline } from '@material-ui/core';
import {
  Header,
  Footer,
  Theme,
} from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  makeStyles,
  Theme as MaterialTheme,
  createStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: MaterialTheme) =>
  createStyles({
    contentContainer: {
      padding: '0 27px',
    },
    root: {
      padding: '0',
      height: '100%',
      width: '100%',
    },
  })
);

const App = ({ Component, pageProps }) => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Container className={classes.root}>
          <Header />
          <div className={classes.contentContainer}>
            <Component {...pageProps} />
          </div>
          <Footer />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
