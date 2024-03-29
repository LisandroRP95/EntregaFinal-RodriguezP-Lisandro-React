import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";
import "./cartWidget.css";

const CartWidget = () => {
  const { cantidadCarrito } = useContext(CartContext);

  return (
    <>
      <Link to={"/cart"}>
        <Button variant="secondary">
          <Container>
            <Row>
              <Col xs="auto">
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180"
                    src="/src/assets/cart-xs.svg"
                  />
                </Figure>
              </Col>
            </Row>
            <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
          </Container>
        </Button>{" "}
      </Link>
    </>
  );
};

export default CartWidget;
