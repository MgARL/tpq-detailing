import React from 'react'
import { Row, Col } from 'react-bootstrap';

function CallToAction() {
    return (
        <>
            <Row className='pb-2'>
                <Col xs={12} lg={4} ></Col>
                <Col xs={12} lg={2} className="mb-2">
                    <a className="btn btn-success" href="mailto:contact@tpqdetailing.com"><h5 className='mt-1'>Email Us</h5></a>
                </Col>
                <Col xs={12} lg={2}>
                    <a className="btn btn-success" href="tel:9195616336" ><h5 className='mt-1'>Call Us</h5></a>
                </Col>
            </Row>
        </>
    )
}

export default CallToAction