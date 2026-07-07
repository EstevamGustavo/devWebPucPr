import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Cadastro.css'

function Cadastro() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [erro, setErro] = useState('')
  const { cadastrar } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')

    try {
      await cadastrar(email, senha, nome, sobrenome, dataNascimento)
      navigate('/login')
    } catch {
      setErro('Não foi possível concluir o cadastro. Verifique os dados e tente novamente.')
    }
  }

  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>
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
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
          required
        />
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>

      {erro && <label>{erro}</label>}

      <p>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </p>
    </div>
  )
}

export default Cadastro
