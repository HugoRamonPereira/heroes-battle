import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'white',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
  }
}));


