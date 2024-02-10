import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams();
  
    useEffect(() => {

    }, []);


  return (
    <div>
    {/* <ItemDetail producto={producto}/>  */}
    </div>
    );
};

export default ProductDetail;