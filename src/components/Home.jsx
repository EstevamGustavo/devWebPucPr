import { useAuth } from '../context/AuthContext.jsx'
import './Home.css'

function Home() {
  const { dados, logout } = useAuth()

  return (
    <div className="home-container">
      <h1>Bem-vindo(a)</h1>

      {dados && (
        <div className="dados">
          <p>
            <strong>Nome:</strong> {dados.nome}
          </p>
          <p>
            <strong>Sobrenome:</strong> {dados.sobrenome}
          </p>
          <p>
            <strong>Data de nascimento:</strong> {dados.dataNascimento}
          </p>
        </div>
      )}

      <button onClick={logout}>Sair</button>
    </div>
  )
}

export default Home
