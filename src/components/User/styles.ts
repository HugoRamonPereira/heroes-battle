import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const UserContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '4rem',
  gap: '0.5rem'
});

export const UserName = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  fontWeight: 'bold',
  fontSize: '1rem',
  width: '4rem',
  gap: '0.5rem',
  color: 'white',

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  }
}));
