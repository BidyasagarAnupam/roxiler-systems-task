import React from 'react'
import ApexChart from './BarChart';

const TransactionChart = ({ priceRange, month }) => {
  return (
      <div className='mt-10 flex flex-col items-center'>
      <p className='text-xl font-semibold text-[#488BF2] text-center'>{`Transaction Bar Chart : "${month}"`}</p>
          <ApexChart priceRange={priceRange} />
    </div>
  )
}

export default TransactionChart