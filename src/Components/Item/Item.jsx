import { Link } from "react-router-dom";
import "./item.css";
import Card from "react-bootstrap/Card";

const Item = ({ producto }) => {
  return (
    <Link
      key={producto.id}
      className="centrarItems"
      to={`/detalle/${producto.id}`}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>${producto.precio}</Card.Text>
          <Card.Text>Categoria: {producto.categoria}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Item;
