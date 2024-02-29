import React from "react";

const CartItem = ({ producto, eliminarProducto }) => {
  return (
    <div>
      <h3>{producto.producto.nombre}</h3>

      <img src={producto.producto.imagen} alt={producto.producto.imagen} />
      <h3> Cantidad: {producto.cantidad}</h3>
      <p>Total: ${producto.producto.precio * producto.cantidad}</p>
      <button onClick={() => eliminarProducto(producto.producto.id)}>
        Eliminar producto
      </button>
    </div>
  );
};

export default CartItem;
