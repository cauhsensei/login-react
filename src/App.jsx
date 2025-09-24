import { useState } from 'react'
import { validarLogin } from './auth'

export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  function tentarLogin() {
    const ok = validarLogin(email, senha)
    setMensagem(ok ? 'Acessado com sucesso!' : 'Usuário ou senha incorretos!')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') tentarLogin()
  }

  return (
    <div className="page">
      <h1>Login</h1>

      <input
        type="email"
        autoFocus
        placeholder="eduardo.lino@pucpr.br"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setMensagem('') }}
        onKeyDown={handleKeyDown}
        className="input"
      />

      <input
        type="password"
        placeholder="••••••"
        value={senha}
        onChange={(e) => { setSenha(e.target.value); setMensagem('') }}
        onKeyDown={handleKeyDown}
        className="input"
      />

      <button onClick={tentarLogin} className="btn">Acessar</button>
      <p className="label">{mensagem}</p>
    </div>
  )
}
