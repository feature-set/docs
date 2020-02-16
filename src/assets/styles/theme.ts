import { createMuiTheme, colors } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    htmlFontSize: 18,
  },
  palette: {
    primary: colors.indigo,
    secondary: {
      main: colors.blue.A200,
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#fff',
      },
    },
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
});
