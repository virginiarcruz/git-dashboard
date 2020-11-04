import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  type,
  ...rest
}) => (
  <Container type={type} {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
