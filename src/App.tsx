import React, { RefObject, createRef, useState } from 'react';
import { AppContainer } from './components/AppContainer';
import { Header } from './components/Header';
import { WelcomeBlock } from './components/WelcomeBlock';
import { AboutBlock } from './components/AboutBlock';
import { PartnersBlock } from './components/PartnersBlock';
import { ContactUsBlock } from './components/ContactUsBlock';
import { Footer } from './components/Footer';
import Box from '@mui/material/Box';


const App: React.FC = () => {
  const [shouldFirstInputFocus, setShouldFirstInputFocus] = useState(false);


  const welcomeRef: RefObject<HTMLDivElement> = createRef();
  const aboutRef: RefObject<HTMLDivElement> = createRef();
  const partnersRef: RefObject<HTMLDivElement> = createRef();
  const contactUsRef: RefObject<HTMLDivElement> = createRef();

  const linkMap: Record<string, RefObject<HTMLDivElement>> = {
    Welcome: welcomeRef,
    About: aboutRef,
    Partners: partnersRef,
    'Contact us': contactUsRef,
  };

  const handleNavigationClick = (link: string): void => {
    const ref = linkMap[link];

    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header handleNavigationClick={handleNavigationClick}/>

      <Box sx={{overflowX: 'hidden'}}>
        <AppContainer>
          <main>
            <WelcomeBlock ref={welcomeRef} />

            <AboutBlock ref={aboutRef} />

            <PartnersBlock ref={partnersRef}/>

          </main>
        </AppContainer>
      </Box>

      <ContactUsBlock ref={contactUsRef} shouldInputFocus={shouldFirstInputFocus}/>

      <Footer />
    </>
  );
};

export default App;
