import { Card, CardContent, styled } from '@mui/material';

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