import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error/Error";

function App() {
  return (
    <>
      <BrowserRouter>

       <NavBar/>

      <Routes>

        <Route path='/' element=''/>

        <Route path='/detalle' element= {<ItemDetailContainer id={3}/>}  />

        <Route path='*' element={<Error/>} />

      </Routes>

        
        <ItemListContainer greeting={"Bievenidos a mi e.Commerce desarrollado para la venta y armado de espacios informáticos de ocio y trabajo en donde más se los necesite."}/>

      </BrowserRouter>

      <Footer />
    
    </>
  );
}

export default App;
