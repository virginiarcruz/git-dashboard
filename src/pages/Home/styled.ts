import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-row-gap: 20px;
  align-items: center;
  input {
    margin-right: 20px;
  }
`;

export const SectionColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 20px;
`;
