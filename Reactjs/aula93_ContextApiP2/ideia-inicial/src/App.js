import { useState } from 'react';
import Aluno from './components/Alunos';
import UserProvaider from './contexts/user'

function App() {
  return (
    <UserProvaider>
      <div>
        <h1>Escola</h1>
        <hr />
        <Aluno />
      </div>
    </UserProvaider>
  );
}

export default App;