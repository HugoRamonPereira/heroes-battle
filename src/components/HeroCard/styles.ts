import { Box, Card, CardContent, styled, Checkbox } from '@mui/material';

export const HeroCard = styled(Card)({
  width: '200px',
  height: '400px',
  position: 'relative'
});

export const HeroInfo = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const HeroAttackInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '0.5rem',
  gap: '0.3rem',
});

export const Select = styled(Checkbox)({
  position: 'absolute',
  top: '5px',
  right: '5px',
  color: 'white'
});