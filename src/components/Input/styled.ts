import styled from 'styled-components';
import { red } from '../../styles/colors';

export const InputContainer = styled.input`
  height: 50px;
  padding: 20px;

  &.is-error {
    border: 1px solid ${red};
  }
`;
