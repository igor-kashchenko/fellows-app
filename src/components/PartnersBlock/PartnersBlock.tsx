import React, { forwardRef, useContext } from 'react';
import TranslationContext from '../../translationContext/TranslationContext';
import { TranslationContextType } from '../../types/TranslationContextType';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './PartnersBlock.css';
import oneWin from '../../assets/images/logos/1win.svg';
import cosmolot from '../../assets/images/logos/cosmolot.svg';
import flamm from '../../assets/images/logos/flamm.svg';
import gloryCasino from '../../assets/images/logos/gloryCasino.svg';
import onletGetLuckyeWin from '../../assets/images/logos/letsGetLucky.svg';
import parimatch from '../../assets/images/logos/parimatch.svg';
import pinUp from '../../assets/images/logos/pinUp.svg';
import betOnRed from '../../assets/images/logos/betOnRed.svg';
import dazard from '../../assets/images/logos/dazard.svg';
import luckyDreams from '../../assets/images/logos/luckyDreams.svg';
import slotsCity from '../../assets/images/logos/slotsCity.svg';
import cyberBet from '../../assets/images/logos/cyberBet.svg';

type Props = {
  ref: React.RefObject<HTMLDivElement>;
};

export const PartnersBlock = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { getTranslation } = useContext(
    TranslationContext
  ) as TranslationContextType;

  const logos = [
    { id: 1, alt: 'parimatch', path: parimatch },
    { id: 2, alt: 'oneWin', path: oneWin },
    { id: 3, alt: 'cosmolot', path: cosmolot },
    { id: 4, alt: 'pinUp', path: pinUp },
    { id: 5, alt: 'gloryCasino', path: gloryCasino },
    { id: 6, alt: 'onletGetLuckyeWin', path: onletGetLuckyeWin },
    { id: 7, alt: 'betOnRed', path: betOnRed },
    { id: 8, alt: 'flamm', path: flamm },
    { id: 9, alt: 'dazard', path: dazard },
    { id: 10, alt: 'luckyDreams', path: luckyDreams },
    { id: 11, alt: 'slotsCity', path: slotsCity },
    { id: 12, alt: 'cyberBet', path: cyberBet },
  ];

  return (
    <Box
      component="section"
      ref={ref}
      sx={{ height: '100vh', position: 'relative', scrollSnapAlign: 'start' }}
    >
      <Grid
        container
        sx={{
          pt: {
            xs: 9,
            sm: 10,
          },
          px: { xs: 3, sm: 4, lg: 0 },
        }}
      >
        <Grid
          item
          xs={12}
          pt={{
            xs: 2,
            md: 6,
            lg: 9,
          }}
        >
          <Typography
            pb={{
              xs: 8,
              md: 0,
            }}
            textAlign={'end'}
            textTransform={'uppercase'}
            fontFamily={'Oswald'}
            fontWeight={300}
            fontSize={'24px'}
            color={'custom.text'}
          >
            {getTranslation('partners')}
          </Typography>
        </Grid>

        <Grid item xs={12} mb={6} textAlign={'center'}>
          <Typography
            variant="h1"
            fontFamily={'KyivTypeSans'}
            fontWeight={700}
            color={'custom.text'}
            sx={{
              fontSize: {
                xs: '48px',
                sm: '64px',
                lg: '100px',
              },
              mixBlendMode: 'overlay',
              whiteSpace: 'pre-line',
            }}
          >
            {getTranslation('partnersTitle')}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box className="marquee">
            <Box className="marquee-content">
              {logos.map((logo) => (
                <Box
                  component={'img'}
                  key={logo.id}
                  src={logo.path}
                  alt={logo.alt}
                  sx={{
                    width: {
                      xs: '200px',
                      md: 'auto',
                    },
                    height: 'auto',
                  }}
                />
              ))}

              {logos.map((logo) => (
                <Box
                  component={'img'}
                  key={logo.id + logos.length}
                  src={logo.path}
                  alt={logo.alt}
                  sx={{
                    width: {
                      xs: '200px',
                      md: 'auto',
                    },
                    height: 'auto',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

PartnersBlock.displayName = 'PartnersBlock';
