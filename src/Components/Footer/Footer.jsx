import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './footer.css'

const Footer = () => {
  return (
    <>
      <Container className="formatoFooter">
        <Row>
          <Col>
            Proyecto desarrollado por Lisandro Rodriguez Peña - Curso React -
            CODERHOUSE
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
