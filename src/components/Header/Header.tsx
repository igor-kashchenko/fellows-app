import React, { useContext, useState } from 'react';
import TranslationContext from '../../translationContext/TranslationContext';
import { TranslationContextType } from '../../types/TranslationContextType';
import { TranslationData } from '../../types/TranslationData';
import { Language } from '../../types/Language';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { LanguageIcon } from '../LanguageIcon';


type Props = {
  handleNavigationClick: (link: string) => void;
};

export const Header: React.FC<Props> = ({ handleNavigationClick }) => {
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { changeLanguage, currentLanguage, getTranslation } = useContext(
    TranslationContext
  ) as TranslationContextType;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const isUkranian = currentLanguage === 'укр';

  const links: Array<keyof TranslationData[Language]> = [
    'about',
    'partners',
    'contactUs',
  ];

  const languages = [
    { text: 'English', string: 'en' },
    { text: 'Українська', string: 'укр' },
  ];

  const handleLangClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangClose = () => {
    setLangAnchorEl(null);
  };

  const handleNavigation = (link: string) => {
    handleNavigationClick(link);
  };

  const handleNavigationClickMobile = (link: string) => {
    handleNavigationClick(link);
    setDrawerOpen(false);
  };

  const handleLanguageChange = (language: Language) => {
    changeLanguage(language);
    handleLangClose();
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleDrawerClose = toggleDrawer(false);

  return (
    <AppBar
      sx={{
        py: 1,
        px: {
          xs: 3,
          sm: 4,
          lg: 0,
        },
        backgroundColor: 'rgba(55, 38, 61, 0.01)',
        backdropFilter: 'blur(12px)',
      }}
      elevation={0}
    >
      <Container disableGutters>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            fontFamily={'Oswald'}
            fontWeight={300}
            fontSize={'40px'}
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => handleNavigationClick('welcome')}
          >
            {isSmallScreen
              ? 'Fellow\'s'.toUpperCase()
              : 'We are Fellow\'s'.toUpperCase()}
          </Typography>

          <Box display={{ xs: 'block', md: 'none' }}>
            <IconButton
              edge="end"
              aria-label="menu"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon htmlColor="#FFF" />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              transitionDuration={{ enter: 500, exit: 200 }}
              PaperProps={{
                sx: {
                  background: 'rgba(55, 38, 61, 0.01)',
                  backdropFilter: 'blur(12px)',
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                },
              }}
              onClose={handleDrawerClose}
            >
              <Box>
                <Box
                  height={{ xs: '72px', sm: '80px' }}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'flex-end'}
                  sx={{
                    px: {
                      xs: 3,
                      sm: 4,
                    },
                  }}
                >
                  <CloseIcon
                    htmlColor="#FFF"
                    sx={{
                      cursor: 'pointer',
                    }}
                    onClick={handleDrawerClose}
                  />
                </Box>

                <List sx={{ p: 0 }}>
                  {links.map((link) => (
                    <ListItem
                      key={link}
                      sx={{
                        px: 3,
                        pb: 3,
                        pt: 0,
                        fontFamily: 'Manrope',
                        fontWeight: 600,
                        fontSize: '22px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'custom.text',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleNavigationClickMobile(link)}
                    >
                      {getTranslation(link)}
                    </ListItem>
                  ))}
                </List>
              </Box>

              <List sx={{ p: 0 }}>
                {languages.map((language) => (
                  <ListItem
                    key={language.text}
                    sx={{
                      px: 3,
                      pb: 2,
                      pt: 0,
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '18px',
                      textTransform: 'Capitalize',
                      letterSpacing: '1px',
                      '&:last-child': {
                        pb: '58px',
                      },
                      color: 'custom.text',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      handleLanguageChange(language.string as Language);
                      handleNavigationClickMobile('welcome');
                    }}
                  >
                    {language.text}
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          <Box display={{ xs: 'none', md: 'block' }}>
            {links.map((link) => (
              <Button
                key={link}
                color="inherit"
                sx={{
                  mr: isUkranian ? 5 : 7,
                  fontSize: '18px',
                  textTransform: 'none',
                  ':hover': {
                    backgroundColor: 'transparent',
                    color: 'custom.hover',
                  },
                }}
                onClick={() => handleNavigation(link)}
              >
                {getTranslation(link)}
              </Button>
            ))}

            <Button
              color="inherit"
              sx={{
                ':hover': {
                  backgroundColor: 'transparent',
                  color: 'custom.hover',
                  '& .MuiSvgIcon-root': {
                    fill: '#7417FE',
                  },
                },
              }}
              onClick={handleLangClick}
            >
              <LanguageIcon sx={{ pr: 2.5, fill: '#FFF' }} />

              <Typography fontSize={'18px'} textTransform={'uppercase'}>
                {currentLanguage}
              </Typography>
            </Button>

            <Menu
              anchorEl={langAnchorEl}
              keepMounted
              open={Boolean(langAnchorEl)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{
                '.MuiPaper-root': {
                  border: '1px solid #fff',
                  borderRadius: ' 8px 3px 8px 8px',
                  bgcolor: 'custom.background',
                  color: 'custom.text',
                },
                '.MuiList-root': { p: 1 },
                mt: 2,
              }}
              onClose={handleLangClose}
            >
              {languages.map((language) => (
                <MenuItem
                  key={language.text}
                  sx={{
                    px: 1,
                    fontSize: '18px',
                    ':hover': {
                      background: '#fff',
                      borderRadius: '3px 2px 3px 3px',
                      color: 'custom.background',
                    },
                  }}
                  onClick={() =>
                    handleLanguageChange(language.string as Language)
                  }
                >
                  {language.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
