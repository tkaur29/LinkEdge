import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function BasicExample() {
  let user = localStorage.getItem('username')
  return (
    <Navbar expand="lg" className="bnavbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <Container>
        <Link to="/dashboard" style={{textDecoration: 'none'}}><Navbar.Brand>LinkEDGE</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            { user &&
            <>
            <div style={{display:'flex',flexDirection:'row',width:'100%', justifyContent:'space-between',alignItems:'center'}}>
            <div>
          <Nav className="me-auto">
          <Link to="/dashboard" style={{textDecoration: 'none'}}><Nav.Link href="#link">Dashboard</Nav.Link></Link>
          <Link to="/customers" style={{textDecoration: 'none'}}><Nav.Link href="#home">Customers</Nav.Link></Link>
          <Link to="/orders" style={{textDecoration: 'none'}}><Nav.Link href="#link">Orders</Nav.Link></Link>
          <Link to="/products" style={{textDecoration: 'none'}}><Nav.Link href="#link">Products</Nav.Link></Link>
          </Nav>
            </div>
          <Link to="/logout" style={{textDecoration: 'none'}}><Nav.Link href="#link">Logout</Nav.Link></Link>
            </div>

            </>
}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;