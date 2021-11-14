import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}

const Container = Styled.div`
  display: flex;
  justify-content: center;
`;

export default Loading;