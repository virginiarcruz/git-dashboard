import React from 'react';

import Title from '../../components/Title';
import Input from '../../components/Input';

import { Container } from './styled';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <Title> Git Dashboard </Title>
      <div>
        <Input type="text" placeholder="http://..." />
        <Button> Check my repo</Button>
      </div>
    </Container>
  );
};

export default Home;
