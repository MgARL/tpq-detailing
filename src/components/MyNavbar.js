import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function MyNavbar({ logo, Container, Link }) {
  return (
    <>
      <Navbar variant="dark" className='bg-tpq'>
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><img src={logo} width="40" height="40" className="d-inline-block align-top" alt="TPQ Detailing logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>
              Home
            </Nav.Link>
            <Nav.Link  as={Link} to={'/pricing'}>Pricing</Nav.Link>
            <Nav.Link  as={Link} to={'/about-us'}>About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar