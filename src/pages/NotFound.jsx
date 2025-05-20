import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Página no encontrada</h1>
      <p>Oops! Esta ruta no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}
