import React, { RefObject, createRef, useState } from 'react';
import { AppContainer } from './components/AppContainer';
import { Header } from './components/Header';
import { WelcomeBlock } from './components/WelcomeBlock';
import { AboutBlock } from './components/AboutBlock';
import { PartnersBlock } from './components/PartnersBlock';
import { ContactUsBlock } from './components/ContactUsBlock';
import { Footer } from './components/Footer';
import Box from '@mui/material/Box';
import background1lg from './assets/images/background13xlg.png';
import background2lg from './assets/images/background23xlg.png';
import background1md from './assets/images/background13xmd.png';
import background2md from './assets/images/background23xmd.png';
import background1xs from './assets/images/background13xxs.png';
import background2xs from './assets/images/background23xxs.png';

const App: React.FC = () => {
  const [shouldFirstInputFocus, setShouldFirstInputFocus] = useState(false);

  const welcomeRef: RefObject<HTMLDivElement> = createRef();
  const aboutRef: RefObject<HTMLDivElement> = createRef();
  const partnersRef: RefObject<HTMLDivElement> = createRef();
  const contactUsRef: RefObject<HTMLDivElement> = createRef();

  const linkMap: Record<string, RefObject<HTMLDivElement>> = {
    welcome: welcomeRef,
    about: aboutRef,
    partners: partnersRef,
    contactUs: contactUsRef,
  };

  const handleNavigationClick = (link: string): void => {
    const ref = linkMap[link];

    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }

    if (link === 'contactUs') {
      setShouldFirstInputFocus(true);
    } else {
      setShouldFirstInputFocus(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          zIndex: 10,
        }}
      >
        <Header handleNavigationClick={handleNavigationClick} />
      </Box>

      <Box
        sx={{
          overflowX: 'hidden',
          backgroundImage: {
            xs: `url(${background1xs}), linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url(${background2xs})`,
            md: `url(${background1md}), linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url(${background2md})`,
            lg: `url(${background1lg}), linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url(${background2lg})`,
          },
          backgroundSize: '100% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top, center center, center bottom',
        }}
      >
        <AppContainer>
          <WelcomeBlock ref={welcomeRef} handleNavigationClick={handleNavigationClick}/>

          <AboutBlock ref={aboutRef} handleNavigationClick={handleNavigationClick}/>

          <PartnersBlock ref={partnersRef} />
        </AppContainer>
      </Box>

      <ContactUsBlock
        ref={contactUsRef}
        shouldInputFocus={shouldFirstInputFocus}
      />

      <Footer />
    </>
  );
};

export default App;
