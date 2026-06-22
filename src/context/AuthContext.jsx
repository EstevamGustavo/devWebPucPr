import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [sucesso, setSucesso] = useState(false)
  const [erro, setErro] = useState('')

  function login(email, senha) {
    if (email === 'gustavo.becker@pucpr.com.br' && senha === '123456') {
      setSucesso(true)
      setErro('')
    } else {
      setErro('Usuário ou senha incorretos!')
    }
  }

  function logout() {
    setSucesso(false)
    setErro('')
  }

  return (
    <AuthContext.Provider value={{ sucesso, erro, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
