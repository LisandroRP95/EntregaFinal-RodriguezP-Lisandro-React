import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>

        <NavBar />
        <ItemListContainer greeting={"Bievenidos a mi e.Commerce desarrollado para la venta y armado de espacios informáticos de ocio y trabajo en donde más se los necesite."}/>
       <Footer/>
    </>
  );
}

export default App;
