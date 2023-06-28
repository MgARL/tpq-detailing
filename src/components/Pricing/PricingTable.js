import React from 'react'

//comps
import { Table } from 'react-bootstrap'
import { IoIosCheckmarkCircle } from "react-icons/io";

//data
import services, {petHairRem, packagePricing} from './data';

function PricingTable() {
    const petHairArr = [1,2,3];
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
            <tr>
                <td className='text-center pt-4'>{petHairRem.serviceName}</td>
                {petHairArr.map(n => (
                    <td key={n}>
                        AddOn:
                        <br/>
                        Medium: {petHairRem.medium}
                        <br/>
                        Heavy: {petHairRem.heavy}
                    </td>
                ))}
            </tr>
            <tr>
                <td className='text-center pt-3'>{packagePricing.pName}</td>
                {packagePricing.packages
                    .map((p, i) => (
                        <td key={i}>
                            Sedan: {p.sedan}
                            <br/>
                            Non-Sedan: {p.nonSedan}
                        </td>
                    ))}
            </tr>
        </tbody>
    </Table>
  )
}

export default PricingTable