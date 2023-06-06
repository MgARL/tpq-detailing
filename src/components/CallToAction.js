import React from 'react'

function CallToAction({Row, Col}) {
    return (
        <>
            <Row className='pb-2'>
                <Col xs={12} md={6} className="mb-2">
                    <a className="btn btn-success" href="mailto:contact@tpqdetailing.com"><h4 className='mt-1'>Email us</h4></a>
                </Col>
                <Col xs={12} md={6}>
                    <a className="btn btn-success" href="tel:9193076251" ><h4 className='mt-1'>Call us</h4></a>
                </Col>
            </Row>
        </>
    )
}

export default CallToAction