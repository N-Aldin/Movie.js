import react from 'react';
import { Pagination } from '@material-ui/lab';
import Styled from 'styled-components';

const MoviePagination = ({ handlePagination, pageCount }) => {

  return (
    <Container>
      <Pagination page={parseInt(pageCount)} count={Math.max(15, pageCount + 1)} onChange={handlePagination} />
    </Container>
  );
}

const Container = Styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export default MoviePagination;