import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import Modal from './Modal.jsx'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { sucesso, erro, login, logout } = useAuth()

  function fecharModal() {
    logout()
    setEmail('')
    setSenha('')
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
      />
      <button onClick={() => login(email, senha)}>Acessar</button>
      <label>{sucesso ? 'Acessado com sucesso!' : erro}</label>

      {sucesso && <Modal onClose={fecharModal} />}
    </div>
  )
}

export default Login
