import React, { forwardRef, useContext } from 'react';
import TranslationContext from '../../translationContext/TranslationContext';
import { TranslationContextType } from '../../types/TranslationContextType';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import contactArrow from '../../assets/images/contactArrow.svg';

type Props = {
  ref: React.RefObject<HTMLDivElement>;
  handleNavigationClick: (link: string) => void;
};

export const AboutBlock = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { handleNavigationClick } = props;

  const { getTranslation } = useContext(
    TranslationContext
  ) as TranslationContextType;

  return (
    <Box
      component="section"
      ref={ref}
      sx={{ height: '100vh', scrollSnapAlign: 'start' }}
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
              xs: 5,
              md: 0,
            }}
            textAlign={'end'}
            textTransform={'uppercase'}
            fontFamily={'Oswald'}
            fontWeight={200}
            fontSize={'24px'}
            color={'custom.text'}
          >
            {getTranslation('about')}
          </Typography>
        </Grid>

        <Grid item xs={12} mb={2}>
          <Typography
            variant="h1"
            sx={{
              ml: {
                sm: 0,
                md: -4,
                lg: -14,
              },
              fontSize: {
                xs: '48px',
                sm: '80px',
                lg: '130px',
              },
              '@media (min-width: 1200px) and (max-width: 1440px)': {
                fontSize: '100px',
                ml: 2,
              },
            }}
            fontFamily={'KyivTypeSans'}
            fontWeight={700}
            color={'custom.text'}
          >
            {getTranslation('aboutTitle')}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          pb={{
            xs: 8,
            md: 10,
            lg: 7,
          }}
          textAlign={'end'}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: '24px',
                md: '32px',
                lg: '40px',
              },
            }}
            textAlign={'end'}
            fontWeight={700}
            fontSize={'40px'}
            color={'custom.text'}
          >
            {getTranslation('aboutSubTitle')}
          </Typography>
        </Grid>

        <Grid
          item
          xs={9}
          sm={10}
          md={8}
          lg={6}
          container
          pb={{
            xs: 6,
            md: 5,
            lg: 11,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '16px',
                sm: '18px',
                md: '22px',
                lg: '24px',
              },
              whiteSpace: {
                xs: 'none',
                sm: 'pre-line',
              },
            }}
            fontWeight={500}
            letterSpacing={{
              xs: '-0.288px',
              md: '-0.352px',
              lg: '-0.384px',
            }}
            lineHeight={{
              xs: '23px',
              md: '38px',
              lg: '41px',
            }}
            color={'custom.text'}
          >
            {getTranslation('aboutText')}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box
            display={'flex'}
            alignItems={'center'}
            onClick={() => handleNavigationClick('contactUs')}
          >
            <Button
              sx={{
                position: 'relative',
                px: 2.5,
                py: 0,
                border: '1px solid transparent',
                borderRadius: '8px 3px 8px 8px',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '32px',
                textTransform: 'none',
                color: 'custom.text',
                cursor: 'pointer',
                transition: 'border-color 0.3s linear',
                ':hover': {
                  borderColor: '#fff',
                  background: 'transparent',
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
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

AboutBlock.displayName = 'AboutBlock';
