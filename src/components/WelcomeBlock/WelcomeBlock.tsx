import React, { forwardRef, useContext } from 'react';
import TranslationContext from '../../translationContext/TranslationContext';
import { TranslationContextType } from '../../types/TranslationContextType';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import brandLogo from '../../assets/images/logo.svg';
import contactArrow from '../../assets/images/contactArrow.svg';

type Props = {
  ref: React.RefObject<HTMLDivElement>;
  handleNavigationClick: (link: string) => void;
};

export const WelcomeBlock = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { handleNavigationClick } = props;

  const { getTranslation } = useContext(
    TranslationContext
  ) as TranslationContextType;

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        height: '100vh',
        pt: {
          xs: 9,
          sm: 10,
          scrollSnapAlign: 'start',
        },
      }}
    >
      <Grid
        container
        sx={{
          px: { xs: 3, sm: 4, lg: 0 },
        }}
      >
        <Grid
          item
          xs={12}
          container
          justifyContent={'center'}
          pb={{
            xs: 8,
            md: 10,
            lg: 13.75,
          }}
          pt={{
            xs: 4,
            md: 10,
          }}
        >
          <Box
            component={'img'}
            width={{
              xs: '290px',
              md: '356px',
              lg: '416px',
            }}
            height={{
              xs: '290px',
              md: '356px',
              lg: '416px',
            }}
            src={brandLogo}
            alt="Fellow's logo"
          />
        </Grid>

        <Grid item xs={12} container>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            pb={{
              xs: 8,
              md: 0,
            }}
          >
            <Typography
              fontWeight={400}
              lineHeight={'32px'}
              color={'custom.text'}
              sx={{
                marginRight: { xs: 'none', md: '-100px' },
                textAlign: { xs: 'center', md: 'inherit' },
                fontSize: { xs: '22px', lg: '24px' },
                whiteSpace: 'pre-line',
              }}
            >
              {getTranslation('welcomeQuote')}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            container
            justifyContent={'center'}
            alignItems={'end'}
          >
            <Box
              display={'flex'}
              justifyContent={'center'}
              pb={0.7}
              onClick={() => handleNavigationClick('contactUs')}
            >
              <Button
                sx={{
                  position: 'relative',
                  px: 2.5,
                  py: 0,
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '32px',
                  border: '1px solid transparent',
                  borderRadius: '8px 3px 8px 8px',
                  color: 'custom.text',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s linear',
                  textTransform: 'none',
                  ':hover': {
                    background: 'transparent',
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
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
});

WelcomeBlock.displayName = 'WelcomeBlock';
