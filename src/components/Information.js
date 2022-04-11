import React from 'react'
import CallToAction from './CallToAction'

function Information({ Row, Col}) {
    return (
        <>
            <Row className="mt-5">
                <Col xs={12}>
                    <h2> For more information or the schedule your service contact us! </h2>
                </Col>
            </Row>
            <CallToAction Row={Row} Col={Col} />
        </>
    )
}

export default Information