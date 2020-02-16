export const globalStyles = (theme?: any) => ({
  '@global': {
    html: {
      height: '100%',
    },
    body: {
      height: '100%',
      backgroundColor: '#fff',
    },
    '#__next': {
      height: '100% !important',
      '& > div': {
        height: 'inherit',
      },
    },
    code: {
      fontSize: 'inherit',
      backgroundColor: theme.palette.grey[200],
      padding: 3,
      borderRadius: 3,
    },
    a: {
      color: theme.palette.primary.dark,
      textDecoration: 'none',
    },
  },
});
