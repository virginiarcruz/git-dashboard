import styled from 'styled-components';
import { red } from '../../styles/colors';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto 45px auto;
  width: 100%;

  input {
    flex-grow: 1;
  }
`;

export const Error = styled.p`
  display: block;
  width: 100%;
  align-items: flex-start;
  text-align: left;
  margin-top: 10px;
  color: ${red};
`;
