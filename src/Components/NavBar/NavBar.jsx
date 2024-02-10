import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './navBar.css'


const NavBar = () => {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LRP SetUp Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavLink className='formInicio' to={'/'}>Inicio</NavLink>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              
              <NavLink className='enlaces' to={'/categorias/escritorios'}>Escritorios</NavLink><br />
              <NavLink className='enlaces' to={'/categorias/iluminacion'}>Iluminación</NavLink><br />
              <NavLink className='enlaces' to={'/categorias/sillas'}>Sillas</NavLink>
              
              <NavDropdown.Divider />
              <NavDropdown.Item>Galeria de ejemplos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
    
    </>
  )
}

export default NavBar