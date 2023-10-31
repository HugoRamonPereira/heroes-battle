import { Card, Dialog, DialogActions, DialogContent, Paper, Stack, Typography, styled } from '@mui/material';

export const BattleWinnerModal = styled(Dialog)({
  // maxWidth: '800px !important',
  // overflow: 'hidden'
});

export const ModalContent = styled(DialogContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  overflowX: 'hidden',
});

export const ModalContentTitle = styled(Typography)({
  display: 'flex',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  justifyContent: 'center',
  flex: '1'
});

export const ModalContentStats = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem'
});

export const ModalActions = styled(DialogActions)({
  display: 'flex',
  justifyContent: 'center',
});

export const HeroCardBattle = styled(Card)({
  minWidth: '150px'
});

export const BattleStatsContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem'
});

export const BattleStatsInfo = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '1rem',
  boxShadow: 'none'
});

export const BattleStatsWarriorOne = styled(Paper)({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '1rem',
  boxShadow: 'none'
});

export const BattleStatsWarriorTwo = styled(Paper)({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '1rem',
  boxShadow: 'none'
});

export const BattleStatsValue = styled(Typography)({
  display: 'flex'
});