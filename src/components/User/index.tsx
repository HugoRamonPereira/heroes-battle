import { Avatar } from '@mui/material';
import * as S from './styles';

export function User() {
  return(
    <S.UserContainer>
      <Avatar />
      <S.UserName>Hugo</S.UserName>
    </S.UserContainer>
  );
}