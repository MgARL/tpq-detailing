import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddonTable() {
    return (
        <>
            <Row className='mt-5'>
                <Col xs={12}>
                    <p>Add on <span className='color-red'>PRICES</span> depends on <span className='color-green'>WORK</span> that needs to be done and <span className='color-green'>TYPE</span> of car:</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="border">
                    <p><strong>Add-Ons Table</strong></p>
                </Col>
            </Row>
            <Row xs={2}>
                <Col className="border border-top-0">
                    Car seat detail cleaning ($30)
                </Col>
                <Col className="border-end border-bottom">
                    Full exterior detail cleaning ($65)
                </Col>
                <Col className="border border-top-0">
                    Carpet detail cleaning ($40)
                </Col>
                <Col className="border-end border-bottom">
                    Wax ($30)
                </Col>
                <Col className="border border-top-0">
                    Engine bay detail cleaning ($50)
                </Col>
                <Col className="border-end border-bottom">
                    Pet hair removal ($25-$60)
                </Col>
                <Col className="border border-top-0">
                    Child car seat cleaning ($20)
                </Col>
                <Col className="border-end border-bottom">
                    Tar Removal ($40-$80)
                </Col>
                <Col className="border border-top-0">
                    Headlight restoration ($50)
                </Col>
                <Col className="border-end border-bottom">
                    Undercarriage cleaning ($10)
                </Col>
            </Row>
        </>
    )
}

export default AddonTable