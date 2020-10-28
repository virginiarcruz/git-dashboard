import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="submit" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
