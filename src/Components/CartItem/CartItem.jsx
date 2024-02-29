import React from "react";
import Button from 'react-bootstrap/Button';

const CartItem = ({ producto, eliminarProducto }) => {
  return (
    <div>
      <h3>{producto.producto.nombre}</h3>

      <img src={producto.producto.imagen} alt={producto.producto.imagen} />
      <h3> Cantidad: {producto.cantidad}</h3>
      <p>Total: ${producto.producto.precio * producto.cantidad}</p>
      <Button variant="secondary" onClick={() => eliminarProducto(producto.producto.id)}>
        Eliminar producto
      </Button>
    </div>
  );
};

export default CartItem;
