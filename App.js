import React, { useState } from 'react';

function App() {
  // Estados para os inputs e para a mensagem
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleAcessar = () => {
    // Lógica de validação pedida no exercício
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Login</h1>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="email" 
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: '5px', width: '250px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <input 
          type="password" 
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)} 
          style={{ padding: '5px', width: '250px' }}
        />
      </div>

      <button onClick={handleAcessar} style={{ padding: '5px 15px', cursor: 'pointer' }}>
        Acessar
      </button>

      <div style={{ marginTop: '20px' }}>
        <label style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {mensagem}
        </label>
      </div>
    </div>
  );
}

export default App; 
