const Item = ({ producto }) => {
  return (
    <>
      <div key={producto.id}>
        <h2># {producto.id}</h2>
        <h3>Nombre: {producto.nombre}</h3>
        <h3>Precio: ${producto.precio}</h3>
        <h3>Categoria:{producto.categoria}</h3>
      </div>
    </>
  );
};

export default Item;
