

export const ItemDetail = ({producto}) => {
  return (
    <div>
       
        <p># {producto.id}</p>
        <p>Nombre: {producto.nombre}</p>
        <img src={producto.imagen} alt={producto.nombre} />
        <p>Precio: ${producto.precio}</p>
        <p>Categoria: {producto.categoria}</p>
        <p>Stock: {producto.stock}</p>
        <p>Descripcion: {producto.descripcion}</p>
    l</div>
  )
}

export default ItemDetail