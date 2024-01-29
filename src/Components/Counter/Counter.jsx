import {useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter = () => {
    

    const [contadorProductos, setContador] = useState(1);

    const contadorCarroRef = useRef(contadorProductos)
  
    const incrementar = () => {
        if(contadorProductos < 10)[
        setContador( contadorProductos + 1)] 
    }
    
    const decrementar = () => {
        if(contadorProductos > 1)[
        setContador(contadorProductos - 1)]
    }
    
    const resetear = () => {
        toast("Se ha reseteado el contador");
        setContador(1)
      }

    const agregarCarroRef = () => {
        contadorCarroRef.current = contadorProductos;
        toast(`Se agregaron ${contadorProductos} productos al carrito de compras`);
      }
  
    return (
    <>
      <h3>Contador: {contadorProductos}</h3>
      <Button onClick={incrementar} variant="outline-success">+ Agregar</Button>{' '}
      <Button onClick={decrementar} variant="outline-danger">- Eliminar</Button>{' '}
      <Button onClick={resetear} as="input" type="reset" value="Resetear contador" />{' '}
      <Button onClick={agregarCarroRef} variant="primary">Agregar al carrito</Button>{' '}
      <ToastContainer/>
    </>
    )
}

export default Counter