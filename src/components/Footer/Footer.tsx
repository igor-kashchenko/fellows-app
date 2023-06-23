import { Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useContext } from 'react';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import facebook from '../../assets/images/facebook.svg';
import telegram from '../../assets/images/telegram.svg';
import TranslationContext from '../../translationContext/TranslationContext';
import { TranslationContextType } from '../../types/TranslationContextType';

export const Footer: React.FC = () => {
  const { getTranslation } = useContext(TranslationContext) as TranslationContextType;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const socialsLogos = [
    { id: 1, path: instagram, url: '' },
    { id: 2, path: linkedin, url: '' },
    { id: 3, path: facebook, url: '' },
    { id: 4, path: telegram, url: 'https://t.me/djan_fellow' },
  ];

  const textToRender = isMediumScreen ? getTranslation('smallFooterQuote') : getTranslation('footerQuote');

  return (
    <Box
      component={'footer'}
      sx={{
        borderTop: '4px solid transparent',
        borderImage:
          'linear-gradient(270deg, #D60FDA 0%, #731396 36.46%, #26155D 69.79%, #4616E0 100%) 1',
      }}
    >
      <Grid
        container
        justifyContent={'space-between'}
        maxWidth={'1200px'}
        sx={{
          margin: 'auto',
          px: { xs: 3, sm: 4, lg: 0 },
          pt: {
            xs: 6,
            md: 11,
          },
          pb: {
            xs: 11,
            md: 15,
          },
        }}
      >
        <Grid
          pt={{
            xs: 0,
            md: 2,
          }}
        >
          <Typography
            color={'custom.text'}
            fontFamily={'Oswald'}
            fontWeight={300}
            fontSize={{
              xs: '24px',
              md: '40px',
            }}
            textTransform={'uppercase'}
            mb={1.6}
          >
            {isSmallScreen ? 'Fellow\'s' : 'We are Fellow\'s'}
          </Typography>

          <Box
            display={'flex'}
            alignItems={'center'}
          >
            {socialsLogos.map((logo) => (
              <Link
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                key={logo.id}
                height={'24px'}
                width={'24px'}
                sx={{
                  mr: 2,
                  ':last-child': {
                    mr: 0,
                  },
                }}
              >
                <Box
                  component={'img'}
                  src={logo.path}
                  alt={logo.path}
                  sx={{
                    cursor: 'pointer',
                    filter: 'brightness(0.5)',
                    transition: 'filter 0.3s linear',
                    '&:hover': {
                      filter: 'brightness(1)',
                    },
                  }}
                />
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          pb={{
            xs: 8, md: 0,
          }}
        >
          <Typography
            color={'custom.text'}
            fontWeight={700}
            fontSize={{
              xs: '14px',
              sm: '16px',
              md: '22px',
              lg: '24px',
            }}
            letterSpacing={'-0.192px'}
            lineHeight={'25px'}
            whiteSpace={'pre-line'}
          >
            {textToRender}
          </Typography>
        </Grid>

        <Grid xs={12} md={'auto'} item textAlign={{
          xs: 'center', md: 'initial',
        }}>
          <Typography
            color={'custom.text'}
            fontWeight={700}
            fontSize={{
              xs: '24px',
              md: '40px',
              lg: '60px',
            }}
            letterSpacing={-0.02}
            mb={{
              xs: 3, md: 2,
            }}
            lineHeight={{
              xs: '24px',
              md: '40px',
              lg: '60px',
            }}
          >
            380 50 123 4565
          </Typography>
          <Typography
            color={'custom.text'}
            fontWeight={700}
            fontSize={{
              xs: '16px',
              md: '22px',
              lg: '24px',
            }}
            letterSpacing={-0.008}
            lineHeight={'25px'}
            mb={{
              xs: 8, md: 2,
            }}
          >
            fellowteamua1@gmail.com
          </Typography>
          <Typography
            color={'custom.text'}
            fontSize={'14px'}
            letterSpacing={-0.005}
            sx={{
              opacity: 0.5,
            }}
          >
            © We are Fellow’s. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
