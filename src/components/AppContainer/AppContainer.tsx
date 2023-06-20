import React from 'react';
import Container from '@mui/material/Container';

type Props = {
  children: React.ReactNode
}

export const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container disableGutters>
      {children}
    </Container>
  );
};
