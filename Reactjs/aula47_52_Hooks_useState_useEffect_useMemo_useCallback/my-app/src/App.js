// Aprendedo sobre useState, useEffect, useMemo, useCallback
// useMemo: para ser esecutado que necessario
// useCallback: retorna uma função. Ele é para coisas mais elaborados
import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tarefas, setTarefas] = useState(['Pagar conta de luz', 'Estudar React Hooks'])
  const [novaTarefa, setNovaTarefa] = useState('')


  const adicionar = useCallback(() => {
    setTarefas([...tarefas, novaTarefa])
    setNovaTarefa('')
  }, [tarefas, novaTarefa])

  //=============================================================== 
  const totalTarefas = useMemo(() => tarefas.length, [tarefas])


  //=============================================================== 
  useEffect(() => {
    let buscandoValores = sessionStorage.getItem('tarefas')
    if (buscandoValores)
      setTarefas(JSON.parse(buscandoValores))

    console.log(buscandoValores);
  }, [])

  //=============================================================== 
  useEffect(() => {
    sessionStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  return (
    <div >
      <ul>
        {tarefas.map((e, i) => (
          <li key={i}>{e}</li>
        )
        )}
      </ul> <br />
      <strong>Você tem {totalTarefas} tarefas</strong><br />
      <input type='text' value={novaTarefa} onChange={e => setNovaTarefa(e.target.value)}></input>
      <button onClick={adicionar}>Add</button>
    </div>
  );
}

export default App;


// ===================================================================================================================
// Contador
// import React, { useState } from 'react'

// function App() {
//   const [contador, setContador] = useState(0);

//   return (
//     <div>
//       Valor: {contador}<br />
//       <button onClick={() => setContador(contador + 1)}>+</button>
//       <button onClick={() => setContador(contador - 1)}>-</button>
//     </div>
//   );
// }

// export default App;