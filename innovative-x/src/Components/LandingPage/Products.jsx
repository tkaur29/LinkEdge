import React from 'react'
import StickyHeadTable from './TableDashboard'
import Stats from './Stats'
import TableProducts from './TableProducts';
const data = [
    { title: 'All Products ', number: '50'},
    { title: 'Trending Products',number:'400'},
    { title: 'Average Order Value', number: '30,000/-'},
    { title: 'Total Revenue', number: '56,000/-'}
  ];
  function Products() {
    return (
      <div >
        <Stats data = {data}>
        </Stats>
      <TableProducts>

      </TableProducts>
        
        </div>
    )
  }
  
  export default Products