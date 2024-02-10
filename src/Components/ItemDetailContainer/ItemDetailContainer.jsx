import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    const {id} = useParams();
  
    useEffect(() => {
      const fetchCatalogo = async () => {
        try {
          const response = await fetch("/Catalogo.json");
          const data = await response.json();
          const productoDetallado = data.find((p)=> p.id == id)
          setProducto(productoDetallado);
        } catch (error) {
          console.log("error en el fetch " + error);
        }
      };
      fetchCatalogo();
    }, [id]);


  return (
    <div>
    <ItemDetail producto={producto}/> 
    </div>
    );
};

export default ItemDetailContainer;
