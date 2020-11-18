import styled from 'styled-components';
import { grayDarkMedium, grayLight } from '../../styles/colors';

export const Select = styled.select`
  margin-left: 10px;
  border: 1px solid ${grayLight};
  padding: 5px;
  font-size: 14px;
  color: ${grayDarkMedium};
  max-width: 150px;
`;
