import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    const fetchCatalogo = async () => {
      try {
        const response = await fetch("./Catalogo.json");
        const data = await response.json();
        setCatalogo(data);
      } catch (error) {
        console.log("error en el fetch " + error);
      }
    };
    fetchCatalogo();
  }, []);

  return (
    <>
      <h2>{greeting}</h2>

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
