import { useState } from 'react'

export default function App() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [mensagem, setMensagem] = useState('')

  function handleKeyDown(e) {
    if (e.key === 'Enter') validarLogin()
  }

  const usuariosValidos = [
    { email: 'eduardo.lino@pucpr.br', senha: '123456' },
    { email: 'cauane.cardoso@pucpr.br', senha: '654321' },
    { email: 'maria.eduarda@pucpr.br', senha: '789012' },
  ]

  function validarLogin() {
    const ok = usuariosValidos.some(
      (u) => u.email === email.trim() && u.senha === senha
    )

    if (ok) {
      setMensagem('Acessado com sucesso!')
    } else {
      setMensagem('Usuário ou senha incorretos!')
    }
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

      <button onClick={validarLogin} className="btn">
        Acessar
      </button>

      <p className="label">{mensagem}</p>
    </div>
  )
}
