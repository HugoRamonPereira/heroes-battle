import { styled } from '@mui/system';
import { TextField } from '@mui/material';

export const SearchInput = styled(TextField)(({ theme }) => ({
  borderRadius: '2rem',
  border: '1px solid white',

  '& fieldset': { border: 'none'},

  [theme.breakpoints.down('sm')]: {
    width: '150px'
  }
}));