import { useState } from 'react';
import {
  CardActionArea,
  CardMedia,
  Typography
} from '@mui/material';
import Image from 'next/image';
import * as S from './styles';
import { useSelectCardStore } from '@/store/selectCardStore';
import { useModalStore } from '@/store/modalStore';

type Powerstats = {
  intelligence: number
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export type HeroCardProps = {
  id: number;
  cardImg: string;
  cardImgAlt: string;
  warriorName: string;
  warriorStrength: number;
  warriorWeapon: string;
  powerstats: Powerstats;
}

export function HeroCard(card: HeroCardProps) {
  const [selected, setSelected] = useState(false);
  const { selectedCards,  setSelectedCards } = useSelectCardStore();
  const { setOpenModal } = useModalStore();


  function battle() {
    let resultado: string = '';
    const [cardOne, cardTwo] = selectedCards;
    if (!cardOne || !cardTwo) return;
    if (cardOne?.warriorStrength > cardTwo.warriorStrength) resultado = `O vencedor é: ${cardOne.warriorName}`;
    else if (cardOne.warriorStrength === cardTwo.warriorStrength) resultado = `O ${cardOne.warriorName} contêm a mesma força do ${cardTwo.warriorName}`;
    else resultado = `O vencedor é: ${cardTwo.warriorName}`;
    setOpenModal(resultado);
  }

  function selectedHero(card: HeroCardProps) {
    setSelectedCards(card);
    setSelected(!selected);
    if (selectedCards.length <= 2) return battle();
  }

  function isSelected(card: HeroCardProps) {
    return selectedCards.some(val => val.id === card.id);
  }

  return (
    <S.HeroCard>
      <div
        role='button'
        onClick={() => selectedHero(card)}
      >
        <CardActionArea>
          <CardMedia
            component='img'
            height='300'
            image={card.cardImg}
            alt={card.cardImgAlt}
          />
          <S.Select
            checked={isSelected(card)}
            disableRipple
          />

          <S.HeroInfo>
            <Typography>{card.warriorName}</Typography>
            <S.HeroAttackInfo>
              <Image
                src={card.warriorWeapon}
                alt='sword'
                width={30}
                height={30}
              />
              <Typography>{card.warriorStrength}</Typography>
            </S.HeroAttackInfo>
          </S.HeroInfo>
        </CardActionArea>
      </div>
    </S.HeroCard>
  );}