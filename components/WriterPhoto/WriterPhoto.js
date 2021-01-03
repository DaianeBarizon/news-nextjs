import React from 'react';
import { Image } from './styles';

export default function WriterPhoto(props) {
  return <Image src={props.photo} alt={props.alt} height="50" width="50" />;
}
