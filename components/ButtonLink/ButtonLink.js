import React from 'react';

import { Button } from 'react-bootstrap';

export default function ButtonLink(props) {
  return <Button variant="outline-secondary">{props.text || "Clique aqui"}</Button>;
}


/* Crinado fallbacks */
