import { PropsWithChildren } from 'react';
import * as S from './styles';

type HeaderProps = PropsWithChildren;

export function Header({ children }: HeaderProps) {
  return (
    <S.NavBar>
      <S.NavBarItems>
        {children}
      </S.NavBarItems>
    </S.NavBar>
  );
}