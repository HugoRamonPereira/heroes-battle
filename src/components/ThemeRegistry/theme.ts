import { Manrope } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const manrope = Manrope({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6500'
    },
    secondary: {
      main: '#FCE7CC'
    }
  },
  typography: {
    fontFamily: manrope.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#19191E',
          }),
        }),
      },
    },
  },
});

export default theme;