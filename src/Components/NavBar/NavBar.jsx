import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './navBar.css'


const NavBar = () => {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to={'/'}>
          <h4 className='logo'>LRP SetUp Center</h4>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavLink className='formInicio' to={'/'}>Inicio</NavLink>
              
              <NavLink className='enlaces' to={'/categoria/escritorios'}>Escritorios</NavLink>
              <NavLink className='enlaces' to={'/categoria/iluminacion'}>Iluminación</NavLink>
              <NavLink className='enlaces' to={'/categoria/sillas'}>Sillas</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
    
    </>
  )
}

export default NavBar