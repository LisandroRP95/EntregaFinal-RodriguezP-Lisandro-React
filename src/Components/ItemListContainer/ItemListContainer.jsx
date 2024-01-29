import { useState, useEffect } from "react";
import Counter from "../Counter/Counter";


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

      {catalogo.length == 0 ? (
        <h2>Cargando...</h2>
      ) : (
        catalogo.map((producto, indice) => {
          return (
            
              <div key={indice}>
                <h2># {producto.id}</h2>
                <h3>Nombre: {producto.nombre}</h3>
                <h3>Precio: ${producto.precio}</h3>
                <h3>Categoria:{producto.categoria}</h3>
              </div>
            
          )
        })
      )}

      <Counter />
    </>
  );
};

export default ItemListContainer;
