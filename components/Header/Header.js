import React from 'react';

import { Form, Nav, Navbar } from 'react-bootstrap';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import SearchKeyword from '../SearchKeyword/SearchKeyword';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <>
      <Navbar className="pt-4 pb-4 pl-5 pr-5" bg="dark" variant="dark">
        <Logo />
        <Nav className="mr-auto">
          <NavbarMenu />
        </Nav>
        <Form inline>
         <SearchKeyword />
        </Form>
      </Navbar>
    </>
  );
}

/* 

Usei um átomo <Logo /> direto no organismo

*/
