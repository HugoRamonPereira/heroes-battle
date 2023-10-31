import { CardActionArea, CardMedia, Typography } from '@mui/material';
import * as S from './styles';

export type HeroBattleCardProps = {
  cardImg: string;
  cardImgAlt: string;
  warriorName: string;
  warriorStrength: number;
}

export function HeroBattleCard(card: HeroBattleCardProps) {

  return (
    <S.HeroCard>
      <CardActionArea>
        <CardMedia
          component='img'
          height='300'
          image={card.cardImg}
          alt={card.cardImgAlt}
          defaultChecked
        />
        <S.HeroInfo>
          <Typography>{card.warriorName}</Typography>
          <Typography>{card.warriorStrength}</Typography>
        </S.HeroInfo>
      </CardActionArea>
    </S.HeroCard>
  );}