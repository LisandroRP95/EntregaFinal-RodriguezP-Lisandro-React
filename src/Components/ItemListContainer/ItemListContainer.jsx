import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.css'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    const fetchCatalogo = async () => {
      try {
        const response = await fetch("/Catalogo.json");
        const data = await response.json();

        if(categoryId){
          const productosFiltrados = data.filter((p) => p.categoria == categoryId)
          setCatalogo(productosFiltrados)
        }else{
          setCatalogo(data);
        }
      
      } catch (error) {
        console.log("error en el fetch " + error);
      }
    };
    fetchCatalogo();
  }, [categoryId]);

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
