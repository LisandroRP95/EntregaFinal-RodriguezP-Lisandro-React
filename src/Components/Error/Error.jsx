import { Link } from "react-router-dom"
import './error.css'

const Error = () => {
  return (
      <div>
          <h1>Ha habido un error, volve a la <Link className="estiloLink" to={'/'}>pagina principal</Link></h1>
      </div>
  )
}

export default Error