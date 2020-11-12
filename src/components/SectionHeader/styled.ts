import styled from 'styled-components';
import { grayDarkSec } from '../../styles/colors';

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    color: ${grayDarkSec};
  }
`;
