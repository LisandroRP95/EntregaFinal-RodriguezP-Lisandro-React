import { createContext, useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = () => {

  const {cart} = useContext(CartContext)

  return (
    <div className='text-light'>
      {cart.length == 0
      ?
        <>
          <h2>No hay productos en el carrito</h2>
          <Link to={'/'}>Ir al inicio</Link>
        </>
      :
        <>
          <h2>Lista:</h2>
        </>
      }
    </div>
  )
}

export default Cart