import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MembershipTable() {
    return (
        <>
            <Row className='border border-bottom-0'>
                <Col xs={12}>
                    <p>Membership <br/> Includes:</p>
                </Col>
            </Row>
            <Row xs={2} className='border border-bottom-0'>
                <Col className='border-end'>
                    <p><strong>Interior</strong></p>
                </Col>
                <Col>
                    <p><strong>Exterior</strong></p>
                </Col>
            </Row>
            <Row xs={2} className='border'>
                <Col className='border-end border-bottom'>
                    <p>Wiper down of cup-holders</p>
                </Col>
                <Col className='border-start border-bottom'>
                    <p>Exterior wash</p>
                </Col>
                <Col className='border-end border-bottom'>
                    <p>Wipe down of dash-board</p>
                </Col>
                <Col className='border-start border-bottom'>
                    <p>Clean tires</p>
                </Col>
                <Col className='border-end border-bottom'>
                    <p>Wipe down of door trim</p>
                </Col>
                <Col className='border-start border-bottom'>
                    <p>Clean rims</p>
                </Col>
                <Col className='border-end border-bottom'>
                    <p>Full vacuum including trunk</p>
                </Col>
                <Col className='border-start border-bottom'>
                    <p>Clean exterior windows</p>
                </Col>
                <Col className='border-end'>
                    <p>Clean interior windows</p>
                </Col>
            </Row>
        </>
    )
}

export default MembershipTable