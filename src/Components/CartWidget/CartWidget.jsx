import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";

const CartWidget = () => {
  return (
    <>
      <Button variant="secondary">
        <Container>
          <Row>
            <Col xs="auto">
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="171x180"
                  src="./src/assets/cart-xs.svg"
                />
              </Figure>
            </Col>
          </Row>
          <p>0</p>
        </Container>
      </Button>{" "}
    </>
  );
}

export default CartWidget;
