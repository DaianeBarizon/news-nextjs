import React from 'react';

import { Image } from './styles';

export default function Photo(props) {
  return <Image src={props.photo} alt={props.alt} />;
}

