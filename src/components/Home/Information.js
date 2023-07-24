import React from 'react'
import CallToAction from './CallToAction'
import { Row, Col } from 'react-bootstrap';

function Information() {
    return (
        <>
            <Row className="mt-5">
                <Col xs={12}>
                    <h2> For more information or to schedule your service contact us! </h2>
                </Col>
            </Row>
            <CallToAction Row={Row} Col={Col} />
        </>
    )
}

export default Information