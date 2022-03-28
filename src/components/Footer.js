import React from 'react'
import facebookIcon from '../images/facebook.svg'
import instagramIcon from '../images/instagram.svg'
import twitterIcon from '../images/twitter.svg'
import youtubeIcon from '../images/youtube.svg'
import { Link } from 'react-router-dom'

function Footer({ Container, Row, Col, logo }) {
    return (
        <>
            <Container fluid className='bg-primary my-footer'>
                <Row>
                    <Col xs={12} md={6} className='d-flex justify-content-center'>
                        <a href='#' className='navbar-brand text-light'>
                            <img src={logo} alt="TPQ Detailing Logo" width='50' height='50' className='d-inline-block align-text-center' />
                            TPQ AUTO Detailing
                        </a>
                    </Col>
                    <Col xs={12} md={6} className='text-center d-flex align-items-center justify-content-center'>
                        <a href="#" className='badge'>home</a>
                        <a href="#" className='badge'>Pricing</a>
                        <a href="#" className='badge'>About Us</a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="d-flex justify-content-center mb-4">
                        <a href="https://www.facebook.com/TPQ-Detailing-272727924537189/"  target='_blank' rel="noreferrer" className="px-2">
                            <img src={facebookIcon} width="50" height="50" alt="Facebook(Freepik)" />
                        </a>
                        <a href="https://twitter.com/LlcTpq"  target='_blank' rel="noreferrer" className="px-2">
                            <img src={twitterIcon} alt="Twitter(Freepik)" width="50" height="50" />
                        </a>
                        <a href="https://instagram.com/tpqdetailing"  target='_blank' rel="noreferrer" className="px-2">
                            <img src={instagramIcon} alt="Instagram(Freepik)" width="50" height="50" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCWhHNqWNiAVLZcrp_-IkqSw" target='_blank' rel="noreferrer" className="px-2">
                            <img src={youtubeIcon} alt="Youtube" width="50" height="50" />
                        </a>
                    </Col>
                </Row>
                <Row className="pb-4">
                    <Col xs={12} md={4} className='d-flex justify-content-center'>
                        <a href="https://www.linkedin.com/in/miguel-rodriguez-25371021b/"  target='_blank' rel="noreferrer" className="badge badge-secondary">Created by: Miguel R.</a>
                    </Col>
                    <Col xs={12} md={4} className='d-flex justify-content-center'>
                        <a href="https://www.freepik.com/"  target='_blank' rel="noreferrer" className="badge badge-secondary">Icons from: Freepik</a>
                    </Col>
                    <Col xs={12} md={4} className='d-flex justify-content-center'>
                        <a href="https://unsplash.com/@dascal"  target='_blank' rel="noreferrer" className="badge badge-secondary">backrogund from: unsplash</a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer