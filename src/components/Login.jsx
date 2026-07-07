import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { erro, login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    await login(email, senha)
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">Acessar</button>
      </form>

      {erro && <label>{erro}</label>}

      <p>
        Não tem cadastro? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  )
}

export default Login
