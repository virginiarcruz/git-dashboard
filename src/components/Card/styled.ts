import styled from 'styled-components';
import { white } from '../../styles/colors';

export const CardContainer = styled.div`
  display: flex;
  padding: 20px;
  background: ${white};
  grid-row-gap: 10px;
  border-radius: 5px;

  div {
    flex-direction: column;
    text-align: left;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    margin-right: 5px;
  }

  p {
    text-align: left;
  }

  span {
    background: red;
    color: white;
    font-size: 11px;
    padding: 2px 4px;
  }
`;
