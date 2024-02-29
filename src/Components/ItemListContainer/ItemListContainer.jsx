import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../../Firebase/Config";

const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    const itemsCollection = categoryId
      ? query(collection(db, "item"), where("categoria", "==", categoryId))
      : collection(db, "item");

    getDocs(itemsCollection)
      .then((respuesta) => {
        const nuevosProductos = respuesta.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setCatalogo(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <>
      {catalogo.length == 0 ? (
        <h2>Cargando productos, por favor espere</h2>
      ) : (
        <ItemList className catalogo={catalogo} />
      )}
    </>
  );
};

export default ItemListContainer;
