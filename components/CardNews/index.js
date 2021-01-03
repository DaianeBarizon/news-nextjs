import React from 'react';
import { Container } from './styles';
import Category from '../Category/Category';
import Photo from '../Photo/Photo';
import Title from '../Title/Title';
import WriterWrapper from '../writerWrapper/WriterWrapper';
import Description from '../Description/Description';

export default function index() {
  return (
    <Container>
      <Category text="Policts" color="red" background="green"/>
      <Photo photo="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Rosa"/>
      <Title title="Lorem Ipsum"/>
      <WriterWrapper photo="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Rosa" writter="by Miguel"/>
      <Description description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
    </Container>
  )
}

/* Fazer um map através da api construída */


/* Não consegui receber o valor de ...props em category */
