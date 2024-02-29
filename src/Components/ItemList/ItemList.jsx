import Item from "../Item/Item";

const ItemList = ({ catalogo }) => {
  return (
    <>
      {catalogo.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </>
  );
};

export default ItemList;
