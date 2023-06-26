import React from 'react'
import { Table } from 'react-bootstrap'
import services from './data'

function PricingTable() {
  return (
    <Table striped hover responsive='md' variant='primary'>
        <thead>
            <th>Service</th>
            <th>Quick N' Clean</th>
            <th>Precise N' Clean</th>
            <th>Quality N' Detail</th>
        </thead>
        <tbody>
            {services.map((s, i) => {
                return(
                    <tr key={i}>
                        <td>{s.ServiceName}</td>
                        <td>{s.QC?.AddOn ? s.QC.AddOn : s.QC ? 'X' : '' }</td>
                        <td>{s.PC?.AddOn ? s.PC.AddOn : s.PC ? 'X' : '' }</td>
                        <td>{s.QD?.AddOn ? s.QD.AddOn : s.QD ? 'X' : '' }</td>
                    </tr>
                )
            })}
        </tbody>
    </Table>
  )
}

export default PricingTable