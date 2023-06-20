import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  handleNavigationClick: (link: string) => void;
}

export const Header: React.FC<Props> = ({ handleNavigationClick }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const links = ['About', 'Partners', 'Contact us'];
  const languages = ['English', 'Українська'];
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
      position="sticky"
      sx={{
        backgroundColor: 'rgba(55, 38, 61, 0.01)',
        backdropFilter: 'blur(12px)',
        py: 1,
        px: {
          xs: 3, sm: 4, lg: 0,
        }
      }}
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
          <Typography variant="h2" fontSize={'40px'} fontFamily={'Oswald'} onClick={() => handleNavigationClick('Welcome')} fontWeight={300} sx={{
            cursor: 'pointer',
          }}>
            {isSmallScreen
              ? 'Fellow\'s'.toUpperCase()
              : 'We are Fellow\'s'.toUpperCase()}
          </Typography>

          <Box display={{ xs: 'block', md: 'none'}}>
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
              onClose={handleDrawerClose}
              transitionDuration={{enter: 500, exit: 200}}
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
            >
              <Box>
                <Box
                  height={{ xs: '72px', sm: '80px'}}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'flex-end'}
                  sx={{
                    px: {
                      xs: 3, sm: 4,
                    }
                  }}
                >
                  <CloseIcon
                    htmlColor="#FFF"
                    onClick={handleDrawerClose}
                    sx={{
                      cursor: 'pointer',
                    }}
                  />
                </Box>

                <List sx={{ p: 0 }}>
                  {links.map((link) => (
                    <ListItem
                      key={link}
                      onClick={() => handleNavigationClickMobile(link)}
                      sx={{
                        fontFamily: 'Manrope',
                        fontWeight: 600,
                        fontSize: '22px',
                        textTransform: 'uppercase',
                        color: 'custom.text',
                        letterSpacing: '2px',
                        px: 3,
                        pb: 3,
                        pt: 0,
                      }}
                    >
                      {link}
                    </ListItem>
                  ))}
                </List>
              </Box>

              <List sx={{ p: 0 }}>
                {languages.map((language) => (
                  <ListItem
                    key={language}
                    sx={{
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '18px',
                      textTransform: 'Capitalize',
                      color: 'custom.text',
                      letterSpacing: '1px',
                      px: 3,
                      pb: 2,
                      pt: 0,
                      '&:last-child': {
                        pb: '58px',
                      },
                    }}
                  >
                    {language}
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          <Box display={{ xs: 'none', md: 'block' }}>
            {links.map((link) => (
              <Button
                color="inherit"
                key={link}
                onClick={() => handleNavigation(link)}
                sx={{
                  fontSize: '18px',
                  mr: 7,
                  textTransform: 'capitalize',
                  ':hover': {
                    color: 'custom.hover',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {link}
              </Button>
            ))}

            <Button
              color="inherit"
              onClick={handleLangClick}
              sx={{
                ':hover': {
                  color: 'custom.hover',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <LanguageIcon sx={{ pr: 2.5 }} fontSize="large" />

              <Typography fontSize={'18px'}>{'EN' || 'UA'}</Typography>
            </Button>

            <Menu
              anchorEl={langAnchorEl}
              keepMounted
              open={Boolean(langAnchorEl)}
              onClose={handleLangClose}
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
                  bgcolor: 'custom.background',
                  color: 'custom.text',
                  border: '1px solid #fff',
                  borderRadius: ' 8px 3px 8px 8px',
                },
                '.MuiList-root': { p: 1 },
                mt: 2,
              }}
            >
              {languages.map((language) => (
                <MenuItem
                  onClick={handleLangClose}
                  key={language}
                  sx={{
                    px: 1,
                    fontSize: '18px',
                    ':hover': {
                      background: '#fff',
                      color: 'custom.background',
                      borderRadius: '3px 2px 3px 3px',
                    },
                  }}
                >
                  {language}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
