import { PropsWithChildren } from 'react';
import * as S from './styles';
import PublicIcon from '@mui/icons-material/Public';

type ButtonProps = PropsWithChildren;

export function Button({ children }: ButtonProps) {
  return (
    <S.CardButton
      startIcon={<PublicIcon />}
      disableRipple
    >
      {children}
    </S.CardButton>
  );
}