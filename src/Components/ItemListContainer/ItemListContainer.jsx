import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.css'
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query,where} from 'firebase/firestore';

const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "item")

      getDocs(itemsCollection).then((snapshot) => {
        setCatalogo(snapshot.docs.map((doc) => (
          {id: doc.id,...doc.data()}
        )))
    })

  },[categoryId])

      


  return (
    <>


      {catalogo.length == 0
      ?
      <h2>Cargando...</h2>
      : 
      <ItemList catalogo={catalogo}/>
}
    </>
  );
};

export default ItemListContainer;
