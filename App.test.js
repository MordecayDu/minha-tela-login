import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Teste 1: Verifica se o título de login aparece
test('deve renderizar o título de login', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

// Teste 2: Verifica se o campo de e-mail está na tela
test('deve ter um campo de e-mail', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/digite seu e-mail/i);
  expect(emailInput).toBeInTheDocument();
});

// Teste 3: Verifica se o campo de senha está na tela
test('deve ter um campo de senha', () => {
  render(<App />);
  const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);
  expect(passwordInput).toBeInTheDocument();
});

// Teste 4: Verifica se o botão de entrar existe
test('deve ter um botão de entrar', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /entrar/i });
  expect(buttonElement).toBeInTheDocument();
});

// Teste 5: Simula um erro de login (campo vazio)
test('deve mostrar erro se os campos estiverem vazios', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /entrar/i });
  fireEvent.click(buttonElement);
  const errorMessage = screen.getByText(/campos obrigatórios/i); 
  expect(errorMessage).toBeInTheDocument();
});