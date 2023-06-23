import React, { forwardRef, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import oneWin from '../../assets/images/logos/1win.svg';
import cosmolot from '../../assets/images/logos/cosmolot.svg';
import flamm from '../../assets/images/logos/flamm.svg';
import gloryCasino from '../../assets/images/logos/gloryCasino.svg';
import onletGetLuckyeWin from '../../assets/images/logos/letsGetLucky.svg';
import parimatch from '../../assets/images/logos/parimatch.svg';
import pinUp from '../../assets/images/logos/pinUp.svg';
import './PartnersBlock.css';
import Box from '@mui/material/Box';
import betOnRed from '../../assets/images/logos/betOnRed.svg';
import dazard from '../../assets/images/logos/dazard.svg';
import luckyDreams from '../../assets/images/logos/luckyDreams.svg';
import slotsCity from '../../assets/images/logos/slotsCity.svg';
import cyberBet from '../../assets/images/logos/cyberBet.svg';
import { TranslationContextType } from '../../types/TranslationContextType';
import TranslationContext from '../../translationContext/TranslationContext';

type Props = {
  ref: React.RefObject<HTMLDivElement>;
}

export const PartnersBlock = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { getTranslation } = useContext(TranslationContext) as TranslationContextType;

  const logos = [
    {id: 1, path: parimatch},
    {id: 2, path: oneWin},
    {id: 3, path: cosmolot},
    {id: 4, path: pinUp},
    {id: 5, path: gloryCasino},
    {id: 6, path: onletGetLuckyeWin},
    {id: 7, path: betOnRed},
    {id: 8, path: flamm},
    {id: 9, path: dazard},
    {id: 10, path: luckyDreams},
    {id: 11, path: slotsCity},
    {id: 12, path: cyberBet},
  ];

  return (
    <Box component='section' ref={ref} sx={{height: '100vh', position: 'relative', scrollSnapAlign: 'start',}}>
      <Grid container sx={{
        pt: {
          xs: 9,
          sm: 10,
        },
        px: { xs: 3, sm: 4, lg: 0 },
      }}>
        <Grid
          item
          xs={12}
          pt={{
            xs: 2, md: 6, lg: 9
          }}
        >
          <Typography
            textTransform={'uppercase'}
            color={'custom.text'}
            fontFamily={'Oswald'}
            fontWeight={300}
            fontSize={'24px'}
            textAlign={'end'}
            pb={{
              xs: 8, md: 0,
            }}
          >
            {getTranslation('partners')}
          </Typography>
        </Grid>

        <Grid item xs={12} mb={6} textAlign={'center'}>
          <Typography
            variant="h1"
            color={'custom.text'}
            fontFamily={'KyivTypeSans'}
            fontWeight={700}
            sx={{
              fontSize: {
                xs: '48px',
                sm: '64px',
                lg: '100px',
              },
              mixBlendMode:'overlay',
              whiteSpace: 'pre-line',
            }}
          >
            {getTranslation('partnersTitle')}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box className="marquee">
            <Box className="marquee-content">
              {logos.map(logo => (
                <Box component={'img'} key={logo.id} src={logo.path} alt={logo.path}  sx={{
                  width: {
                    xs: '200px',
                    md: 'auto',
                  },
                  height: 'auto',
                }}/>
              ))}
              {logos.map(logo => (
                <Box component={'img'} key={logo.id + logos.length} src={logo.path} alt={logo.path}  sx={{
                  width: {
                    xs: '200px',
                    md: 'auto',
                  },
                  height: 'auto',
                }}/>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

PartnersBlock.displayName = 'PartnersBlock';
