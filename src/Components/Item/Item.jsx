import { Link } from "react-router-dom";
import './item.css'

const Item = ({ producto }) => {
  return (

  <Link to={`/detalle/${producto.id}`}>
      <div key={producto.id} className="centrarItems">
        <img src={producto.imagen} alt={producto.nombre} />
        <p># {producto.id}</p>
        <p>Nombre: {producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Categoria: {producto.categoria}</p>
      </div>
      </Link>
  );
};

export default Item;
