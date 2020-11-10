import React from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import SubTitle from '../SubTitle';
import Title from '../Title';

import { HeaderContainer } from './styled';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>
        Git Dashboard <VscGithubInverted /> - exploring pull requests
      </Title>
      <SubTitle>
        Insert the owner/repo in search field, to list pull requests
      </SubTitle>
    </HeaderContainer>
  );
};

export default Header;
