import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// My Comps
import MembershipTable from './MembershipTable'
import PriceTable from './PriceTable'
import AddonTable from './AddonTable'

function Pricing() {
  return (
    <Container style={{ minHeight: '321px' }} className="d-flex justify-content-center align-items-center text-center">
      <Row className='d-flex justify-content-center my-5'>
        <Col xs={8}>
          <MembershipTable />
          <PriceTable />
          <AddonTable />
        </Col>
      </Row>
      
    </Container>
  )
}

export default Pricing