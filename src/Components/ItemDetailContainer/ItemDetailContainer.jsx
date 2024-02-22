import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './itemDetailContainer.css'
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    const {id} = useParams();
  
    useEffect(() => {

          const db = getFirestore()

    const productRef = doc(db, "item", "BWI4o9WsEFOBcQNYOQrm")

    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists){
        setProducto({id: snapshot.id,...snapshot.data()})
      }
    })
  },[id])

  return (
    <div>
    <ItemDetail producto={producto}/> 
    </div>
    );
};

export default ItemDetailContainer;
