import React from 'react'
import Information from './Information';
import Introduction from './Introduction';

function Home() {
  return (
    <div className='bg-tpq p-3'>
        <Introduction/>
        <Information/>
    </div>
  )
}

export default Home