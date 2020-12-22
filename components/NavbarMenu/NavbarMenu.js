import React from 'react';

import { Nav } from 'react-bootstrap';

function Navbar() {
  return(
    <>
      <Nav.Link href="#">Politics</Nav.Link>
      <Nav.Link href="#">Business</Nav.Link>
      <Nav.Link href="#">Tech</Nav.Link>
      <Nav.Link href="#">Science</Nav.Link>
      <Nav.Link href="#">Sports</Nav.Link>
      <Nav.Link href="#">Login</Nav.Link>
    </>
  );
}

export default Navbar;
