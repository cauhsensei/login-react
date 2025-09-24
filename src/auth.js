// src/auth.js
export const usuariosValidos = [
  { email: 'eduardo.lino@pucpr.br', senha: '123456' },
  { email: 'cauane.cardoso@pucpr.br', senha: '654321' },
  { email: 'maria.eduarda@pucpr.br', senha: '789012' },
];

export function normalizeEmail(s) {
  return (s ?? '').trim().toLowerCase();
}

export function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());
}

export function validarLogin(email, senha, lista = usuariosValidos) {
  const e = normalizeEmail(email);
  return lista.some(u => normalizeEmail(u.email) === e && u.senha === senha);
}
