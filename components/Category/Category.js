import React from 'react';

import { Container } from './styles';

export default function Category({text, props}) {
  return <Container><h6 {...props}>{text}</h6></Container>;
}

/* Outras maneiras */
/* Usar props spread operation */
/* Poderia desconstruir passando props background, color */
/* Usar como props */
/* Usar rest */
