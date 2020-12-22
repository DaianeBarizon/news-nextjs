import React from 'react';
import { Container } from './styles';
import Category from '../Category/Category';
import Photo from '../Photo/Photo';
import Title from '../Title/Title';
import WriterWrapper from '../WriterWrapper/WriterWrapper';
import Description from '../Description/Description';

export default function index() {
  return (
    <Container>
      <Category />
      <Photo />
      <Title />
      <WriterWrapper />
      <Description />
    </Container>
  )
}
