import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// My Comps
import PricingTable from './PricingTable';

function Pricing() {
  return (
    <Container>
          <PricingTable />
      <Row className='d-flex justify-content-center my-5'>
        <Col xs={12}>
        </Col>
      </Row>
    </Container>
  )
}

export default Pricing