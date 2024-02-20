import{ createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [cantidadTotal, setCantidadTotal] = useState(0)

  const agregarCarrito = (producto, counter) => {
    const cartProduct = {producto, counter}
    const productoExistente = cart.findIndex((p) => p.producto.id == producto.id);

    if (!productoExistente) {
      setCart([...cartProduct, {producto, cantidad}])
    } else {
      const newCart = [...cart]
      newCart[productoExistente].cantidad += cantidad
      setCart(newCart)
    }
    
    setCantidadTotal(cart.length);
  }

  const eliminarProducto = (prodcutoId) => {
    const newCart = cart.filter(item => item.prodcuto.id !== prodcutoId)
    setCart(newCart)
  }

  const vaciarCarrito = () => {
    setCart([])
  }

  const cantidadCarrito = () => {
    const totalQuantity = cart.reduce((total, item) => total+item.cantidad,0)
    return totalQuantity
  }

  const totalCarrito = () => {
    const totalPrice = cart.reduce((total,item) => total + (item.prodcuto.precio * item.cantidad),0)
    return totalPrice
  }



  return <CartContext.Provider value={{
    cart,
    agregarCarrito,
    total,
    cantidadTotal,
    vaciarCarrito,
    eliminarProducto,
    cantidadCarrito,
    totalCarrito
  }}>
    {children}</CartContext.Provider>;
};

export  default CartProvider;
