import React from 'react';
import App from 'next/app';
import {
  CssBaseline,
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Box,
  styled,
  fade,
  InputBase,
  withStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Head from 'next/head';
import 'prismjs/themes/prism.css';

import { theme } from '../assets/styles/theme';
import { LogoRound } from '../assets/images/logo-round';
import { globalStyles } from '../assets/styles/global-styles';

const Bar = styled(AppBar)({
  height: 64,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 'auto !important',
  marginRight: theme.spacing(2),
  justifySelf: 'flex-end',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  width: '100%',
  maxWidth: 320,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const Container = styled('div')({
  flexGrow: 1,
});

const SearchIconWrapper = styled('div')(({ theme }) => ({
  width: theme.spacing(7),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchInputWrapper = styled(InputBase)({
  color: 'inherit',
  width: '100%',
});

const SearchInput = styled('input')(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 7),
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 120,
    '&:focus': {
      width: 200,
    },
  },
}));

const Content = styled('div')({
  display: 'flex',
  marginTop: 64,
  height: '100%',
});

const Sidebar = styled('aside')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: 240,
  backgroundColor: theme.palette.grey['50'],
  padding: theme.spacing(2),
}));

const Docs = styled('main')(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
}));

class AppRoot extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>FeatureSet Docs</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <Container>
            <Bar position="fixed">
              <Box flex={4}>
                <Toolbar>
                  <Box display="flex" justifyContent="center" alignItems="center" mr={2}>
                    <LogoRound />
                  </Box>
                  <Typography variant="h5" noWrap>
                    FeatureSet Docs
                  </Typography>
                </Toolbar>
              </Box>
              <Box flex={8}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <SearchInputWrapper
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    inputComponent={({inputRef, ...props}) => <SearchInput {...props} />}
                  />
                </Search>
              </Box>
            </Bar>
            <Content>
              <Sidebar>
                <Typography variant="h2">Docs</Typography>
              </Sidebar>
              <Docs>
                <Component {...pageProps} />
              </Docs>
            </Content>
          </Container>
        </ThemeProvider>
        <CssBaseline />
      </>
    );
  }
}

export default withStyles(globalStyles)(AppRoot);
