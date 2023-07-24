import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

function MyNavbar({ logo, Container, Link }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
  const toggleShow = () => setShow(!show);
	return (
		<>
			<Navbar variant='dark' sticky='top' className='bg-tpq' expand={false}>
				<Container fluid>
					<Navbar.Brand as={Link} to='/' className='d-flex align-items-center'>
						<img
							src={logo}
							width='40'
							height='40'
							className='d-inline-block logo'
							alt='TPQ Detailing logo'
						/>
						<span className='ms-2'>TPQ Auto Detailing</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='tpq-navbar-expand-md' onClick={toggleShow}/>
					<Navbar.Offcanvas
						id='tpq-navbar-expand-md'
						aria-labelledby='tpq-navbarLabel-expand-md'
						placement='end'
						className='bg-tpq text-light'
            show={show}
						onHide={handleClose}
					>
						<Offcanvas.Header closeButton closeVariant='white'>
							<Offcanvas.Title id='tpq-navbarLabel-expand-md'>
								<Navbar.Brand
									as={Link}
									to='/'
									className='d-flex align-items-center'
								>
									<img
										src={logo}
										width='40'
										height='40'
										className='d-inline-block logo'
										alt='TPQ Detailing logo'
									/>
									<span className='ms-2'>TPQ Auto Detailing</span>
								</Navbar.Brand>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='me-auto text-center'>
								<Nav.Link as={Link} to={'/'} onClick={handleClose}>
									Home
								</Nav.Link>
								<Nav.Link as={Link} to={'/pricing'} onClick={handleClose}>
									Pricing
								</Nav.Link>
								<Nav.Link as={Link} to={'/about-us'} onClick={handleClose}>
									About Us
								</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default MyNavbar;
