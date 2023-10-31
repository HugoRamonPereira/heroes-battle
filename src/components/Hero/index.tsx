import * as S from './styles';
import { HeroCard } from '../HeroCard';
import sword from 'public/sword.svg';
import { CombatCard, useCardStore } from '@/store/combatStore';
import { useEffect } from 'react';
import { useSearchStore } from '@/store/searchStore';
import { CardSkeleton } from '../Skeleton';
import { BattleModal } from '../Modal';


export function Hero() {
  const { cards, bringCards, loading = true } = useCardStore();
  const [searchCard] = useSearchStore((state) => [state.searchCard]);

  useEffect(() => {
    bringCards();
  }, []);

  function warriorCalculateStrength(card: CombatCard) {
    return Object.values(card.powerstats).reduce((acc: number, value: number | unknown) => {
      return acc + Number(value || 0);
    }, 0);
  }

  function listSkeletonCards(valueLength: number) {
    return Array.from(Array(valueLength).keys());
  }

  return (
    <S.HeroContainer>
      {loading ? (
        <>
          {listSkeletonCards(15).map(i => (
            <CardSkeleton
              key={i}
              variant='rectangular'
              width={200}
              height={300}
              animation='wave'
            />
          ))}
        </>
      ) : (
        <>
          {cards.map((card) => {
            if (
              searchCard &&
                !card.name
                  .toLowerCase()
                  .includes(searchCard.toLowerCase())
            ) return null;

            return (
              <HeroCard
                key={card.id}
                id={card.id}
                cardImg={card.images.md}
                cardImgAlt={card.name}
                warriorWeapon={sword}
                warriorName={card.name}
                powerstats={card.powerstats}
                warriorStrength={warriorCalculateStrength(card)}
              />
            );})}
        </>
      )}
      <BattleModal />
    </S.HeroContainer>
  );
}