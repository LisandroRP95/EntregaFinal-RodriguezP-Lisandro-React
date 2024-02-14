import {useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './itemCounter.css'

const ItemCounter = ({initial, stock}) => {
    

    const [contadorProductos, setContador] = useState(1);

    const contadorCarroRef = useRef(contadorProductos)
  
    const incrementar = () => {
        if(contadorProductos < stock)[
        setContador( contadorProductos + 1)] 
    }
    
    const decrementar = () => {
        if(contadorProductos > initial)[
        setContador(contadorProductos - 1)]
    }
    
    const resetear = () => {
        toast("Se ha reseteado el contador");
        setContador(1)
      }

    const agregarCarroRef = () => {
        contadorCarroRef.current = contadorProductos;
        toast(`Se agregaron ${contadorProductos} productos al carrito de compras`);
        <link rel="stylesheet" href="" />
      }
  
    return (
    <>
      <p>Contador: {contadorProductos}</p>
      <Button onClick={incrementar} variant="outline-success">+ Agregar</Button>{' '}
      <Button onClick={decrementar} variant="outline-danger">- Eliminar</Button>{' '}
      <Button onClick={resetear} as="input" type="reset" value="Resetear contador" />{' '}
      <Button onClick={agregarCarroRef} variant="primary">
        <Link className='bntCarroCompras' to={'/cart'}>Agregar al carrito</Link>
        </Button>{' '}
      <ToastContainer/>
    </>
    )
}

export default ItemCounter