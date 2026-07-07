import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext.jsx'
import Cadastro from './components/Cadastro.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'

function RotaPrivada({ children }) {
  const { usuario, carregando } = useAuth()

  if (carregando) return null
  if (!usuario) return <Navigate to="/login" replace />

  return children
}

function RotaPublica({ children }) {
  const { usuario, carregando } = useAuth()

  if (carregando) return null
  if (usuario) return <Navigate to="/home" replace />

  return children
}

function RotaInicial() {
  const { usuario, carregando } = useAuth()

  if (carregando) return null

  return <Navigate to={usuario ? '/home' : '/login'} replace />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RotaInicial />} />
        <Route
          path="/cadastro"
          element={
            <RotaPublica>
              <Cadastro />
            </RotaPublica>
          }
        />
        <Route
          path="/login"
          element={
            <RotaPublica>
              <Login />
            </RotaPublica>
          }
        />
        <Route
          path="/home"
          element={
            <RotaPrivada>
              <Home />
            </RotaPrivada>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
