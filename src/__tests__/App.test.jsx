import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test('exibe sucesso após login válido (clique)', async () => {
  render(<App />)
  await userEvent.type(screen.getByPlaceholderText('eduardo.lino@pucpr.br'), 'eduardo.lino@pucpr.br')
  await userEvent.type(screen.getByPlaceholderText('••••••'), '123456')
  await userEvent.click(screen.getByRole('button', { name: /acessar/i }))
  expect(await screen.findByText(/Acessado com sucesso!/i)).toBeInTheDocument()
})

test('Enter dispara validação e mostra erro com credenciais inválidas', async () => {
  render(<App />)
  await userEvent.type(screen.getByPlaceholderText('eduardo.lino@pucpr.br'), 'x@y.com')
  const senha = screen.getByPlaceholderText('••••••')
  await userEvent.type(senha, '000000{enter}')
  expect(await screen.findByText(/Usuário ou senha incorretos!/i)).toBeInTheDocument()
})
