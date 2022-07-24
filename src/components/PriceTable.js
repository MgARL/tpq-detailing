import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function PriceTable() {
    return (
        <>
            <Row className='mt-5'>
                <Col xs={12} className="border">
                    <p>Price</p>
                </Col>
            </Row>
            <Row xs={2} className='mb-3'>
                <Col className='border border-top-0'>
                    <p>Sedan</p>
                </Col>
                <Col className='border border-top-0'>
                    <p>Non-Sedan</p>
                </Col>
                <Col className='border border-top-0'>
                    <p className='text-warning'>$60 per month</p>
                </Col>
                <Col className='border border-top-0'>
                    <p className='text-warning'>$70 per Month</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <p> Frequency: Once per month (Additional frequency can be change for additional charge).</p>
                    <p>NOTE: We offer to you <span className='color-green'>WORK</span> or <span className='color-green'>HOME</span> location <span className='color-green'>ONLY</span>😊</p>
                </Col>
            </Row>
        </>
    )
}

export default PriceTable