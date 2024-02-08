const Item = ({ producto }) => {
  return (

      <div key={producto.id}>
        <img src={producto.imagen} alt={producto.nombre} />
        <p># {producto.id}</p>
        <p>Nombre: {producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Categoria: {producto.categoria}</p>
      </div>
  
  );
};

export default Item;
