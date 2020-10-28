import React from 'react';

import { TextTitle } from './styled';

const Title: React.FC = ({ children }) => {
  return <TextTitle> {children} </TextTitle>;
};

export default Title;
