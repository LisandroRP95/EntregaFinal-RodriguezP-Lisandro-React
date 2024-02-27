import { useState, useContext } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Container, Row, Col } from 'react-bootstrap';


const ItemDetail = ({ producto }) => {

  const [cart, setCart] = useState(false)

  const {agregarCarrito} = useContext(CartContext)

  const onAdd = (counter) => {
    
    setCart(true)
    
    agregarCarrito(producto, counter)

  }

  return (
    <>

      <Container style={{ height: 'auto' }}>
      <Row className="justify-content-center align-items-center" style={{ height: 'auto' }}>
        <Col xs={"auto"} className="text-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title>
                {producto.nombre}
              </Card.Title>
              <Card.Text>${producto.precio}</Card.Text>
              <Card.Text>Categoria: {producto.categoria}</Card.Text>
              <Card.Text>Stock: {producto.stock}</Card.Text>
              <Card.Text>Descripción: {producto.descripcion}</Card.Text>
            </Card.Body>
          </Card>

          </Col>
      </Row>
      </Container>

      {producto.stock == 0 ? <h3>El producto no tiene stock</h3> :       <Container style={{ height: 'auto' }}>
      <Row className="justify-content-center align-items-center">
        <Col xs={"auto"} className="text-center">
        {cart ? <Link to={'/cart'}>Ir al carrito</Link> : <ItemCounter initial={1} stock={producto.stock} onAdd={onAdd} /> }
        </Col>
      </Row>
      </Container>}      
    </>
  );
};

export default ItemDetail;
