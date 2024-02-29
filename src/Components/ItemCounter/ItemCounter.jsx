import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./itemCounter.css";

const ItemCounter = ({ initial, stock, onAdd }) => {
  const [contadorProductos, setContador] = useState(1);

  const contadorCarroRef = useRef(contadorProductos);

  const incrementar = () => {
    if (contadorProductos < stock) [setContador(contadorProductos + 1)];
  };

  const decrementar = () => {
    if (contadorProductos > initial) [setContador(contadorProductos - 1)];
  };

  const resetear = () => {
    toast("Se ha reseteado el contador");
    setContador(1);
  };

  const agregarCarroRef = () => {
    contadorCarroRef.current = contadorProductos;
    toast(`Se agregaron ${contadorProductos} productos al carrito de compras`);
    <link rel="stylesheet" href="" />;
    onAdd(contadorProductos);
  };

  return (
    <>
      <div className="estiloCentrado">
        <Button onClick={incrementar} variant="outline-success">
          + Agregar
        </Button>{" "}
        <p className="estiloCentrado">{contadorProductos}</p>
        <Button onClick={decrementar} variant="outline-danger">
          - Eliminar
        </Button>{" "}
        <br />
        <Button
          onClick={resetear}
          as="input"
          type="reset"
          value="Resetear contador"
        />{" "}
        <Button onClick={agregarCarroRef} variant="primary">
          Agregar al carrito
        </Button>{" "}
        <ToastContainer />
      </div>
    </>
  );
};

export default ItemCounter;
