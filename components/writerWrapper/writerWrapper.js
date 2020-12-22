import React from 'react';
import WriterPhoto from '../WriterPhoto/WriterPhoto';
import Writer from '../Writer/Writer';
import { Container } from './styles';

export default function writerWrapper() {
  return (
    <Container>
      <WriterPhoto />
      <Writer />
    </Container>
  );
}
