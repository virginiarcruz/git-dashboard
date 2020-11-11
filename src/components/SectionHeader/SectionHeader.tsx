import React from 'react';

import { SectionContainer } from './styled';

const SectionHeader: React.FC = ({ children }) => {
  return <SectionContainer> {children} </SectionContainer>;
};

export default SectionHeader;
