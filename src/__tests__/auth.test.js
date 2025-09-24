import { normalizeEmail, isValidEmail, validarLogin, usuariosValidos } from '../auth'

describe('auth utils', () => {
  it('normalizeEmail: trim + lowercase', () => {
    expect(normalizeEmail('  Mario@Eduarda.Br ')).toBe('mario@eduarda.br')
  })

  it('isValidEmail: aceita formato válido', () => {
    expect(isValidEmail('eduardo.lino@pucpr.br')).toBe(true)
  })

  it('validarLogin: verdadeiro para credenciais corretas', () => {
    const u = usuariosValidos[0]
    expect(validarLogin(u.email, u.senha)).toBe(true)
  })

  it('validarLogin: falso para senha errada', () => {
    expect(validarLogin('maria.eduarda@pucpr.br', 'xxxxxx')).toBe(false)
  })

  it('validarLogin: ignora espaços e case no e-mail', () => {
    expect(validarLogin('  CAUANE.CARDOSO@PUCPR.BR  ', '654321')).toBe(true)
  })
})
