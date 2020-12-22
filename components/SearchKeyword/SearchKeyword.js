import React from 'react'
import ButtonLink from '../ButtonLink/ButtonLink';
import Input from '../Input/Input';
import { InputGroup } from 'react-bootstrap';

export default function searchKeyword() {
  return ( 
    <InputGroup>
        <Input />
      <InputGroup.Append>
        <ButtonLink />
      </InputGroup.Append>
    </InputGroup>
  )
}
