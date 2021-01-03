import React from 'react';

import { Container } from './styles';

export default function Title(props) {
  return <Container><h1>{props.title}</h1></Container>;
}
