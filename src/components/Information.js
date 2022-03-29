import React from 'react'

function Information({ Row, Col, Button }) {
    return (
        <>
            <Row className="mt-5">
                <Col xs={12}>
                    <h2> For more information or the schedule your service contact us! </h2>
                </Col>
            </Row>
            <Row className='pb-2'>
                <Col xs={12} md={6}>
                    <a className="btn btn-success" href="mailto:tpqdetailing@gmail.com"><h4>Email us</h4></a>
                </Col>
                <Col xs={12} md={6}>
                    <a className="btn btn-success" href="tel:9848336751" ><h4>Call us</h4></a>
                </Col>
            </Row>
        </>
    )
}

export default Information