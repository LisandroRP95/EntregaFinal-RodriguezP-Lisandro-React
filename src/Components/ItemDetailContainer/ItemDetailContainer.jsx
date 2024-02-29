import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/Config";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();

  useEffect(() => {

    const productRef = doc(db, "item", id);

    getDoc(productRef)
      .then((snapshot) => {
        if (snapshot.exists) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
