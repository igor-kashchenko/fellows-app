import React, { forwardRef, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import brandLogo from '../../assets/images/logo.svg';
import contactArrow from '../../assets/images/contactArrow.svg';
import TranslationContext from '../../translationContext/TranslationContext';
import { TranslationContextType } from '../../types/TranslationContextType';

type Props = {
  ref: React.RefObject<HTMLDivElement>;
  handleNavigationClick: (link: string) => void;
}

export const WelcomeBlock = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { handleNavigationClick } = props;
  const { getTranslation } = useContext(TranslationContext) as TranslationContextType;

  return (
    <Box component='section' ref={ref} sx={{height: '100vh', pt: {
      xs: 9,
      sm: 10,
      scrollSnapAlign: 'start',
    }}}>
      <Grid container sx={{
        px: {xs:3, sm: 4, lg: 0},
      }}>
        <Grid item xs={12} container justifyContent={'center'} pb={{
          xs: 8, md: 15.5, lg: 13.75,
        }} pt={13.75}>
          <Box component={'img'} width={{
            xs: '290px', md: '356px', lg: '416px'
          }} height={{
            xs: '290px', md: '356px', lg: '416px'
          }} src={brandLogo} alt="Fellow's logo" sx={{
          }} />
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={12} sm={12} md={4} lg={4} pb={{
            xs: 8, md: 0,
          }}>
            <Typography color={'custom.text'} fontWeight={400} lineHeight={'32px'} sx={{
              fontSize: { xs: '22px', lg: '24px'},
              marginRight: { xs: 'none', md: '-100px'},
              textAlign: { xs: 'center', md: 'inherit' },
              whiteSpace: 'pre-line',
            }}>
              { getTranslation('welcomeQuote') }
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} alignContent={'center'}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={() => handleNavigationClick('contactUs')}>
              <Typography color={'custom.text'} fontWeight={400} fontSize={'24px'} lineHeight={'32px'} position={'relative'} px={2.5} sx={{
                border: '1px solid transparent',
                borderRadius: '8px 3px 8px 8px',
                cursor: 'pointer',
                transition: 'border-color 0.3s linear',
                ':hover': {
                  borderColor: '#fff',
                }
              }}>
                {getTranslation('contactUs')}
                <Box
                  component={'img'}
                  src={contactArrow}
                  alt='arrow logo'
                  sx={{ position: 'absolute', top: 2, right: 2}}
                />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
});


WelcomeBlock.displayName = 'WelcomeBlock';
