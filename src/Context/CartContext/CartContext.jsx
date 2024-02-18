import{ createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [cantidadTotal, setCantidadTotal] = useState(0)

  const agregarCarrito = (producto, counter) => {
    const cartProduct = {producto, counter}
    const productIndex = cart.findIndex((p) => p.producto.id == producto.id);

    if (productIndex !== -1) {
      console.log("Existe, lo contamos")
      cart[productIndex].counter += counter;
    } else {
      console.log("No existe, lo agregamos");
      setCart([
        ...cart,
        cartProduct
      ]);
    }
    
    setCantidadTotal(cart.length);
  }

  const eliminarCarrito = () => {
    
  }

  const vaciarCarrito = () => {

  }

  const cantidadCarrito = () => {
    
  }

  const totalCarrito = () => {
  }



  return <CartContext.Provider value={{
    cart,
    agregarCarrito,
    total,
    cantidadTotal

  }}>
    {children}</CartContext.Provider>;
};

export  default CartProvider;
