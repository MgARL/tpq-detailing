import React from 'react'
import { Table } from 'react-bootstrap'
import services from './data'
import { IoIosCheckmarkCircle } from "react-icons/io";

function PricingTable() {
  return (
    <Table striped hover responsive='md' variant='info' className='fit-parent'>
        <thead>
            <tr>
                <th>Service</th>
                <th>Quick N' Clean</th>
                <th>Precise N' Clean</th>
                <th>Quality N' Detail</th>
            </tr>
        </thead>
        <tbody>
            {services.map((s, i) => {
                return(
                    <tr key={i}>
                        <td>{s.ServiceName}</td>
                        <td>
                            {
                                s.QC?.AddOn 
                                ? `AddOn: $${s.QC.AddOn}` 
                                : s.QC 
                                ? <IoIosCheckmarkCircle  size={'1.4em'}/> 
                                : ''
                            }
                        </td>
                        <td>
                            {
                                s.PC?.AddOn 
                                ? `AddOn: $${s.PC.AddOn}` 
                                : s.PC 
                                ? <IoIosCheckmarkCircle  size={'1.4em'}/> 
                                : '' }
                        </td>
                        <td>
                            {
                                s.QD?.AddOn 
                                ? `AddOn: $${s.QD.AddOn}` 
                                : s.QD 
                                ? <IoIosCheckmarkCircle  size={'1.4em'}/> 
                                : '' 
                            }
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </Table>
  )
}

export default PricingTable