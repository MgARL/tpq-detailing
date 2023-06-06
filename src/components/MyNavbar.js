import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function MyNavbar({ logo, Container, Link }) {
  return (
    <>
      <Navbar variant="dark" sticky='top' className='bg-tpq' expand='md'>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
            <img src={logo} width="40" height="40" className="d-inline-block logo" alt="TPQ Detailing logo" />
            <span className='ms-2'>TPQ Auto Detailing</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={'/pricing'}>Pricing</Nav.Link>
              <Nav.Link as={Link} to={'/about-us'}>About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar