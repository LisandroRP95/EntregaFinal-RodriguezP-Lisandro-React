import Item from "../Item/Item";

const ItemList = ({ catalogo }) => {
  return (
    <>
    <div>
      {catalogo.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </div>
    </>
    
  );
};

export default ItemList;
