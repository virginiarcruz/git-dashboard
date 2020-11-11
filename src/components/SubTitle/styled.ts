// @ts-nocheck

import styled, { css } from 'styled-components';
import { blueLight, grayDarkSec, white } from '../../styles/colors';

export const SubTitleContainer = styled.h2`
  font-size: ${({ secondary }) => (secondary ? '18px' : '20px')};
  color: ${grayDarkSec};
  font-weight: 400;

  span {
    font-size: 14px;
    margin: 0 10px;

    ${({ hasBullet }) =>
      hasBullet &&
      css`
        content: '';
        padding: 6px;
        border-radius: 50px;
        background-color: ${blueLight};
        color: ${white};
      `}
  }
`;
