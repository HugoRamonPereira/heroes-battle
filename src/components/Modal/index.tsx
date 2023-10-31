import React from 'react';
import {
  Button,
  DialogTitle,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as S from './styles';
import { useModalStore } from '@/store/modalStore';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveIcon from '@mui/icons-material/Remove';
import { HeroBattleCard } from '../HeroBattleCard';
import { useSelectCardStore } from '@/store/selectCardStore';

export function BattleModal() {
  const { setCloseModal } = useModalStore();
  const { selectedCards, clearSelectedCards } = useSelectCardStore();
  const [warriorOne, warriorTwo] = selectedCards;

  function compareWarriorStrength(warriorOneStrength: number, warriorTwoStrength: number) {
    if (warriorOneStrength > warriorTwoStrength) {
      return <ArrowDropUpIcon color='success' />;
    } else if (warriorOneStrength === warriorTwoStrength ) {
      return <RemoveIcon fontSize='small' />;
    }

    return <ArrowDropDownIcon color='error' />;
  }

  return (
    <>
      {selectedCards.length == 2 && (
        <div>
          <S.BattleWinnerModal
            onClose={setCloseModal}
            aria-labelledby="customized-dialog-title"
            open={selectedCards.length > 1}
            maxWidth='lg'
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Battle Results
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={clearSelectedCards}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon/>
            </IconButton>
            <S.ModalContent dividers>
              <Stack direction='row'>
                <S.ModalContentTitle gutterBottom>
                  {warriorOne.warriorStrength > warriorTwo.warriorStrength ?
                    warriorOne.warriorName : warriorTwo.warriorName }
                  &nbsp;is the winner 💪🏼
                </S.ModalContentTitle>
              </Stack>
              <S.ModalContentStats>
                <HeroBattleCard
                  cardImg={warriorOne.cardImg}
                  cardImgAlt={warriorOne.cardImgAlt}
                  warriorStrength={warriorOne.warriorStrength}
                  warriorName={warriorOne.warriorName}
                />
                <S.BattleStatsContainer
                  direction={'row'}
                >
                  <S.BattleStatsWarriorOne>
                    <S.BattleStatsValue>
                      {warriorOne.powerstats.intelligence}
                      {compareWarriorStrength(warriorOne.powerstats.intelligence, warriorTwo.powerstats.intelligence)}
                    </S.BattleStatsValue>

                    <S.BattleStatsValue>
                      {warriorOne.powerstats.strength}
                      {compareWarriorStrength(warriorOne.powerstats.strength, warriorTwo.powerstats.strength)}
                    </S.BattleStatsValue>

                    <S.BattleStatsValue>
                      {warriorOne.powerstats.speed}
                      {compareWarriorStrength(warriorOne.powerstats.speed, warriorTwo.powerstats.speed)}
                    </S.BattleStatsValue>

                    <S.BattleStatsValue>
                      {warriorOne.powerstats.durability}
                      {compareWarriorStrength(warriorOne.powerstats.durability, warriorTwo.powerstats.durability)}
                    </S.BattleStatsValue>

                    <S.BattleStatsValue>
                      {warriorOne.powerstats.power}
                      {compareWarriorStrength(warriorOne.powerstats.power, warriorTwo.powerstats.power)}
                    </S.BattleStatsValue>
                    <S.BattleStatsValue>
                      {warriorOne.powerstats.combat}
                      {compareWarriorStrength(warriorOne.powerstats.combat, warriorTwo.powerstats.combat)}
                    </S.BattleStatsValue>
                  </S.BattleStatsWarriorOne>

                  <S.BattleStatsInfo>
                    <Typography>Intelligence</Typography>
                    <Typography>Strength</Typography>
                    <Typography>Speed</Typography>
                    <Typography>Durability</Typography>
                    <Typography>Power</Typography>
                    <Typography>Combat</Typography>
                  </S.BattleStatsInfo>

                  <S.BattleStatsWarriorTwo>
                    <S.BattleStatsValue>
                      {compareWarriorStrength(warriorTwo.powerstats.intelligence, warriorOne.powerstats.intelligence)}
                      {warriorTwo.powerstats.intelligence}
                    </S.BattleStatsValue>
                    <S.BattleStatsValue>
                      {compareWarriorStrength(warriorTwo.powerstats.strength, warriorOne.powerstats.strength)}
                      {warriorTwo.powerstats.strength}
                    </S.BattleStatsValue>
                    <S.BattleStatsValue>
                      {compareWarriorStrength(warriorTwo.powerstats.speed, warriorOne.powerstats.speed)}
                      {warriorTwo.powerstats.speed}
                    </S.BattleStatsValue>
                    <S.BattleStatsValue>
                      {compareWarriorStrength(warriorTwo.powerstats.durability, warriorOne.powerstats.durability)}
                      {warriorTwo.powerstats.durability}
                    </S.BattleStatsValue>
                    <S.BattleStatsValue>
                      {compareWarriorStrength(warriorTwo.powerstats.power, warriorOne.powerstats.power)}
                      {warriorTwo.powerstats.power}
                    </S.BattleStatsValue>
                    <S.BattleStatsValue>
                      {compareWarriorStrength(warriorTwo.powerstats.combat, warriorOne.powerstats.combat)}
                      {warriorTwo.powerstats.combat}
                    </S.BattleStatsValue>
                  </S.BattleStatsWarriorTwo>

                </S.BattleStatsContainer>
                <HeroBattleCard
                  cardImg={warriorTwo.cardImg}
                  cardImgAlt={warriorTwo.cardImgAlt}
                  warriorStrength={warriorTwo.warriorStrength}
                  warriorName={warriorTwo.warriorName}
                />
              </S.ModalContentStats>
            </S.ModalContent>
            <S.ModalActions>
              <Button
                autoFocus
                onClick={clearSelectedCards}
              >
                New battle
              </Button>
            </S.ModalActions>
          </S.BattleWinnerModal>
        </div>
      )
      }
    </>
  );
}