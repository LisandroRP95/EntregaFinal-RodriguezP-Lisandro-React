import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error/Error";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Context/CartContext/CartContext";
// import {getFirestore, collection, getDocs} from 'firebase/firestore';
// import {getFirestore, doc, getDoc} from 'firebase/firestore';
// import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

function App() {

  // UN SOLO PRODUCTO
  // const [product, setProduct] = useState(null)

  // useEffect(() => {
  //   const db = getFirestore()

  //   const productRef = doc(db, "item", "BWI4o9WsEFOBcQNYOQrm")

  //   getDoc(productRef).then((snapshot) => {
  //     if (snapshot.exists){
  //       setProduct({id: snapshot.id,...snapshot.data()})
  //     }
  //   })
  // },[])


  // COLECCION ENTERA
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const db = getFirestore()

  //   const itemsCollection = collection(db, "item")

  //   getDocs(itemsCollection).then((snapshot) => {
  //       setProducts(snapshot.docs.map((doc) => (
  //         {id: doc.id,...doc.data()}
  //       )))
  //   })

  // },[])

  //COLECCION FILTRADA
  //  const [products, setProducts] = useState([])

  //  useEffect(() => {

  //   const db = getFirestore()

  //   const q = query(
  //     collection(db, "item"),
  //     where("categoria", "==", "iluminacion")
  //   )

  //   getDocs(q).then((snapshot) => {
  //     if(snapshot.size === 0){
  //       console.log('no hay resultados');
  //     }
  //     setProducts(snapshot.docs.map((doc)=> (
  //       {id: doc.id,...doc.data()}
  //     )))
  //   })

  //  },[])

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
