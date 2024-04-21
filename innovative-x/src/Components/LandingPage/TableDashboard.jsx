import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'NAME', minWidth: 140},
  { id: 'phone', label: 'PHONE NO.', minWidth: 100 },
  { id: 'email', label: 'EMAIL', minWidth: 100 },
  { id: 'status', label: 'STATUS', minWidth: 100 },
  
];

function createData(name, phone,email, status) {
  return { name, phone, email, status };
}

const rows = [
  createData('John Doe', '12345678', 'john@example.com', 'Pending-payment'),
  createData('Jane Smith', '23456789', 'jane@example.com', 'In-transit'),
  createData('Alice Johnson', '34567890', 'alice@example.com', 'Completed'),
  createData('Bob Brown', '45678901', 'bob@example.com', 'Shipped'),
  createData('Emma Martinez', '56789012', 'emma@example.com', 'Completed'),
  createData('Michael Taylor', '67890123', 'michael@example.com', 'Shipped'),
  createData('Sophia Garcia', '78901234', 'sophia@example.com', 'Shipped'),
  createData('James Miller', '89012345', 'james@example.com', 'Shipped'),
  createData('Olivia Davis', '90123456', 'olivia@example.com', 'Completed'),
  createData('William Jones', '01234567', 'william@example.com', 'Completed'),
  
];

export default function TableDashboard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
  <h1 style={{padding: '0 0 20px 70px ', fontSize: '24px'}}>
    Recent Customers
  </h1>
    <div style={{display:'flex',justifyContent:'center'}}>
    <Paper sx={{ width: '90%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    </>
  );
}