import { useState, useContext } from "react";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../../Context/CartContext/CartContext";
import { db } from "../../Firebase/Config";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Checkout = () => {
  const { cart, vaciarCarrito, totalCarrito } =
    useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [error, setError] = useState("");
  const [idCompra, setIdCompra] = useState("");

  const formManager = (event) => {
    event.preventDefault();

    if (
      !nombre ||
      !apellido ||
      !telefono ||
      !ciudad ||
      !codigoPostal ||
      !email ||
      !emailConfirm
    ) {
      setError("Completar los campos requeridos");
      return;
    }

    if (email !== emailConfirm) {
      setError("Las cuentas de email no coinciden");
      return;
    }


    const compraRealizada = {
      items: cart.map((producto) => ({
        id: producto.producto.id,
        nombre: producto.producto.nombre,
        cantidad: producto.cantidad,
      })),
      total: totalCarrito(),
      fecha: new Date(),
      nombre,
      apellido,
      ciudad,
      codigoPostal,
      email,
      telefono,
    };

    Promise.all(
      compraRealizada.items.map(async (productoOrden) => {
        const productoRef = doc(db, "item", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "compras"), compraRealizada)
          .then((docRef) => {
            setError("");
            setIdCompra(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log(error);
            setError("Se produjo un error al crear la orden");
          });
      })
      .catch((error) => {
        console.log(error);
        setError("No se puede actualizar el stock");
      });
  };

  return (
    <>
      <div>
        <h2>Datos del comprador:</h2>
      </div>

      <form onSubmit={formManager}>
        {cart.map((producto) => (
          <div key={producto.producto.id}>
            <p>
              {producto.producto.nombre} x {producto.cantidad}
            </p>
          </div>
        ))}

        <div>
          <label htmlFor="Nombre">Nombre: *</label>
          <input
            name="Nombre"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Apellido">Apellido: *</label>
          <input
            name="Apellido"
            type="text"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Telefono">Telefono: *</label>
          <input
            name="Telefono"
            type="number"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Ciudad">Ciudad: *</label>
          <input
            name="Ciudad"
            type="text"
            onChange={(e) => setCiudad(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="CodigoPostal">C. Postal: *</label>
          <input
            name="CodigoPostal"
            type="number"
            onChange={(e) => setCodigoPostal(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">email: *</label>
          <input
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="EmailConfirm">Confirmar email: *</label>
          <input
            name="EmailConfirm"
            type="text"
            onChange={(e) => setEmailConfirm(e.target.value)}
          />
        </div>
        <button type="submit">Comprar</button>
      </form>

      {error && <p>{error}</p>}

      {idCompra && (
        <p>Muchas gracias por tu compra, tu ID de transacción es: {idCompra}</p>
      )}

      {/* <div>
        <FloatingLabel
        controlId="floatingInput"
        label="email"
        className="mb-6">
        <Form.Control type="email" placeholder="nombre@email.com" />
      </FloatingLabel>
        </div> */}
    </>
  );
};

export default Checkout;
