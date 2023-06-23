import React from 'react';
import Container from '@mui/material/Container';

type Props = {
  children: React.ReactNode
}

export const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container component={'main'} disableGutters>
      {children}
    </Container>
  );
};
