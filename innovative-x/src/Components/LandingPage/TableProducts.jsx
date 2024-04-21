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
  { id: 'product', label: 'PRODUCT', minWidth: 140},
  { id: 'cost_price', label: 'C_PRICE', minWidth: 100 },
  { id: 'sales_price', label: 'S_PRICE', minWidth: 100 },
  { id: 'quantity', label: 'QUANTITY', minWidth: 100 },
  
];


const rows = [
        { product: 'Laptop', cost_price: 800, sales_price: 1200, quantity: 50 },
        { product: 'Smartphone', cost_price: 400, sales_price: 600, quantity: 100 },
        { product: 'Headphones', cost_price: 50, sales_price: 80, quantity: 200 },
        { product: 'Mouse', cost_price: 10, sales_price: 20, quantity: 300 },
        { product: 'Keyboard', cost_price: 20, sales_price: 30, quantity: 150 },
        { product: 'Monitor', cost_price: 200, sales_price: 300, quantity: 80 },
        { product: 'Printer', cost_price: 150, sales_price: 250, quantity: 40 },
        { product: 'Tablet', cost_price: 300, sales_price: 450, quantity: 70 },
        { product: 'Speaker', cost_price: 80, sales_price: 120, quantity: 120 },
        { product: 'Camera', cost_price: 500, sales_price: 700, quantity: 25 }
  
];

export default function TableProducts() {
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
    Recent Products
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