import React from 'react';

import { SubTitleContainer } from './styled';

const SubTitle: React.FC = ({ children, ...rest }) => {
  return <SubTitleContainer {...rest}>{children}</SubTitleContainer>;
};

export default SubTitle;
