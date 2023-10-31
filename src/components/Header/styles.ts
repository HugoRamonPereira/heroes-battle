import { styled } from '@mui/system';
import { AppBar, Toolbar } from '@mui/material';

export const NavBar = styled(AppBar)({
  backgroundColor: '#FF6500',
  padding: '1rem'
});

export const NavBarItems = styled(Toolbar)({
  backgroundColor: '#FF6500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});