import React from 'react'
import TableDashboard from './TableDashboard';
import Stats from './Stats'

const data = [
  { title: 'Total Retailers ', number: '50'},
  { title: 'Total Products', number: '400'},
  { title: 'Total Orders', number: '30'},
  { title: 'Total Revenue', number: '56,000/-'}
];
function Dashboard() {
  return (
    <div >
      <Stats data = {data} >
      </Stats>
      <TableDashboard>

      </TableDashboard>
      </div>
  )
}

export default Dashboard