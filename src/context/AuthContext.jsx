import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const [dados, setDados] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    const cancelar = onAuthStateChanged(auth, async (usuarioAtual) => {
      setUsuario(usuarioAtual)

      if (usuarioAtual) {
        const snap = await getDoc(doc(db, 'usuarios', usuarioAtual.uid))
        setDados(snap.exists() ? snap.data() : null)
      } else {
        setDados(null)
      }

      setCarregando(false)
    })

    return cancelar
  }, [])

  async function cadastrar(email, senha, nome, sobrenome, dataNascimento) {
    setErro('')
    const credencial = await createUserWithEmailAndPassword(auth, email, senha)

    await setDoc(doc(db, 'usuarios', credencial.user.uid), {
      uid: credencial.user.uid,
      email,
      nome,
      sobrenome,
      dataNascimento,
    })
  }

  async function login(email, senha) {
    setErro('')
    try {
      await signInWithEmailAndPassword(auth, email, senha)
    } catch {
      setErro('Usuário não está cadastrado!')
    }
  }

  async function logout() {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider
      value={{ usuario, dados, carregando, erro, cadastrar, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
