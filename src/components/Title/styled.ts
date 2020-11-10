import styled from 'styled-components';
import { graySecondary } from '../../styles/colors';

export const TextTitle = styled.h1`
  height: auto;
  color: ${graySecondary};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0 10px;
  }
`;
