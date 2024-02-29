import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const { cart, vaciarCarrito, eliminarProducto, totalCarrito } =
    useContext(CartContext);

  return (
    <div>
      {cart.length == 0 ? (
        <>
          <h2>No hay productos en el carrito</h2>
          <Link to={"/"}>
            <Button variant="secondary">Ir al inicio</Button>
          </Link>
        </>
      ) : (
        <>
          <h2>Lista:</h2>

          {cart.map((p) => (
            <CartItem
              key={p.producto.id}
              producto={p}
              eliminarProducto={eliminarProducto}
            />
          ))}

          <p>Total a pagar del carrito: ${totalCarrito()}</p>
          <Button variant="outline-warning"  onClick={vaciarCarrito}>Vaciar Carrito</Button><br />
          <br />

          <Link to={"/checkout"}>
           <Button variant="outline-success"> Finalizar Compra</Button>
            </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
