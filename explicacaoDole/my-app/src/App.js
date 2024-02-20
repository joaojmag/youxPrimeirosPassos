import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [numero, setNumero] = useState(1)
  const [exibirCarinha, setExibirCarinha] = useState(false)

  const [aluno, setAluno] = useState({
    nome: 'joao',
    idade: 33
  })

  useEffect(() => {
    if(aluno.nome !== 'joao') {
      setExibirCarinha(true)
    }
  }, [aluno])

  const alterarNome = () => {
    setAluno({...aluno, nome: 'Marcelo2'})
  }

  return (
    <div className="App">
      <h1>nome: {aluno?.nome}</h1>
      <h1>idade: {aluno?.idade}</h1>
      <button onClick={() => {
        alterarNome()
      }}>set nome</button>
      <button onClick={() => {
        setNumero(numero - 1)
      }}>set idade</button>

      { exibirCarinha ? (
        <h1>{':)'}</h1>
      ) : (
        <h1>{':('}</h1>
      )}
    </div>
  );
}

export default App;
