import styled from 'styled-components';
import {
  blue,
  grayDarkSec,
  graySecondary,
  orange1,
  white,
} from '../../styles/colors';

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${white};
  border-radius: 5px;
  text-align: left;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${graySecondary};
    margin-bottom: 10px;
  }

  svg {
    margin-right: 5px;
  }

  p {
    color: ${grayDarkSec};
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
`;

export const CardHeader = styled.header`
  margin-bottom: 20px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    color: ${graySecondary};
  }
`;
export const CardFooter = styled.footer`
  margin-top: 20px;
  span {
    background-color: ${blue};
    color: ${white};
    font-size: 10px;
    padding: 4px 6px;
    border-radius: 3px;
    margin-right: 5px;
    &:nth-child(2) {
      background-color: ${orange1};
    }
  }
`;
