import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({id}) => {
    const [producto, setProducto] = useState([]);
  
    useEffect(() => {
      const fetchCatalogo = async () => {
        try {
          const response = await fetch("./Catalogo.json");
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
