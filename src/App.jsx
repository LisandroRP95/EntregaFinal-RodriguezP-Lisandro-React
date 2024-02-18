import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error/Error";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Context/CartContext/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>

      <CartProvider>

       <NavBar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>

        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

        <Route path='/detalle/:id' element= {<ItemDetailContainer/>}/>

        <Route path='/cart' element= {<Cart/>}/>

        <Route path='*' element={<Error/>} />

      </Routes>

       <Footer />

       </CartProvider>
       
      </BrowserRouter>


    
    </>
  );
}

export default App;
