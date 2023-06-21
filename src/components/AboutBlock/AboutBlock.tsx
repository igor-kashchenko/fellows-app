import React, { forwardRef, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import contactArrow from '../../assets/images/contactArrow.svg';
import { TranslationContextType } from '../../types/TranslationContextType';
import TranslationContext from '../../translationContext/TranslationContext';

type Props = {
  ref: React.RefObject<HTMLDivElement>;
  handleNavigationClick: (link: string) => void;
}

export const AboutBlock = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { handleNavigationClick } = props;
  const { getTranslation } = useContext(TranslationContext) as TranslationContextType;

  return (
    <Box component='section' ref={ref} sx={{height: '100vh', scrollSnapAlign: 'start',}}>
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
            xs: 2, md: 6, lg: 9
          }}
        >
          <Typography
            textTransform={'uppercase'}
            color={'custom.text'}
            fontFamily={'Oswald'}
            fontWeight={200}
            fontSize={'24px'}
            textAlign={'end'}
            pb={{
              xs: 5, md: 0,
            }}
          >
            {getTranslation('about')}
          </Typography>
        </Grid>

        <Grid item xs={12} mb={2}>
          <Typography
            variant="h1"
            color={'custom.text'}
            fontFamily={'KyivTypeSans'}
            fontWeight={700}
            sx={{
              fontSize: {
                xs: '48px',
                sm: '80px',
                lg: '130px',
              },
              ml: {
                sm: 0,
                md: -4,
                lg: -14,
              },
            }}
          >
            {getTranslation('aboutTitle')}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          textAlign={'end'}
          pb={{
            xs:8, md:10, lg: 7,
          }}
        >
          <Typography
            variant="h4"
            color={'custom.text'}
            fontWeight={700}
            fontSize={'40px'}
            textAlign={'end'}
            sx={{
              fontSize: {
                xs: '24px',
                md: '32px',
                lg: '40px',
              },
            }}
          >
            {getTranslation('aboutSubTitle')}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          container
          pb={{
            xs:6, md:5, lg: 11,
          }}
        >
          <Typography
            color={'custom.text'}
            fontWeight={500}
            letterSpacing={-0.016}
            lineHeight={'41px'}
            sx={{
              fontSize: {
                xs: '18px',
                md: '22px',
                lg: '24px',
              },
              whiteSpace: 'pre-line',
            }}

          >
            {getTranslation('aboutText')}
          </Typography>
        </Grid>

        <Grid item xs={12} >
          <Box display={'flex'} alignItems={'center'} onClick={() => handleNavigationClick('contactUs')}>
            <Typography
              color={'custom.text'}
              fontWeight={400}
              fontFamily={'Manrope'}
              fontSize={'24px'}
              lineHeight={'32px'}
              position={'relative'}
              px={2.5}
              sx={{
                border: '1px solid transparent',
                borderRadius: '8px 3px 8px 8px',
                cursor: 'pointer',
                transition: 'border-color 0.3s linear',
                ':hover': {
                  borderColor: '#fff',
                },
              }}
            >
              {getTranslation('contactUs')}
              <Box
                component={'img'}
                src={contactArrow}
                alt="arrow logo"
                sx={{ position: 'absolute', top: 2, right: 2 }}
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

AboutBlock.displayName = 'AboutBlock';
