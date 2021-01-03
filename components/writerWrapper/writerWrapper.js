import React from 'react';
import WriterPhoto from '../WriterPhoto/WriterPhoto';
import Writer from '../Writer/Writer';
import { Container } from './styles';

export default function writerWrapper(props) {
  return (
    <Container>
      <WriterPhoto photo={props.photo} alt={props.alt}/>
      <Writer writter={props.writter}/>
    </Container>
  );
}

/* props drilling */
