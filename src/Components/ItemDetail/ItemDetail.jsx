import ItemCounter from "../ItemCounter/ItemCounter";
import Card from "react-bootstrap/Card";


const ItemDetail = ({ producto }) => {
  return (
    <div>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title>
                {producto.id} {producto.nombre}
              </Card.Title>
              <Card.Text>${producto.precio}</Card.Text>
              <Card.Text>Categoria: {producto.categoria}</Card.Text>
              <Card.Text>Stock: {producto.stock}</Card.Text>
              <Card.Text>Descripción: {producto.descripcion}</Card.Text>
            </Card.Body>
          </Card>
      <ItemCounter initial={1} stock={producto.stock} />
    </div>
  );
};

export default ItemDetail;
