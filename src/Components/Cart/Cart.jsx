import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom'
import './cart.css'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

  const {cart, vaciarCarrito, eliminarProducto,totalCarrito} = useContext(CartContext)

  return (
    <div>
      {cart.length == 0
      ?
        <>
          <h2>No hay productos en el carrito</h2>
          <Link to={'/'}>Ir al inicio</Link>
        </>
      :
        <>
          <h2>Lista:</h2>
           
           {cart.map((p)=>(
              <CartItem key={p.producto.id} producto={p} eliminarProducto={eliminarProducto}/>
           ))}
        
        

        <p>Total a pagar del carrito: ${totalCarrito()}</p>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button><br />

        <Link to={'/checkout'}>Finalizar Compra</Link>

        </>
      }
    </div>
  )
}

export default Cart