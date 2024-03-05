import { useState, useContext } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { toast } from 'react-toastify'

import { FiUser } from 'react-icons/fi'
import { AuthContext } from '../../contexts/auth'


export default function Customers() {
  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')


  const { user, setUser } = useContext(AuthContext)


  function handleRegister(e) {
    e.preventDefault();
    if (nome !== '' && cnpj !== '' && endereco !== '') {
      let data = {
        nome: nome,
        cnpj: cnpj,
        endereco: endereco,
        uid: user.uid,
        uidSer: `@servico${Math.random()}`
      }
      sessionStorage.setItem(`${data.uidSer}}`, JSON.stringify(data))
      setNome('')
      setCnpj('')
      setEndereco('')
      toast.success('Empresa registrada')
    }else{
      toast.error('Preencha todos os campos')
    }
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>
            <label>Nome fantasia</label>
            <input
              type="text"
              placeholder="Nome da empresa"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>CNPJ</label>
            <input
              type="text"
              placeholder="Digite o CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />

            <label>Endereço</label>
            <input
              type="text"
              placeholder="Endereço da empresa"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />

            <button type="submit">
              Salvar
            </button>
          </form>
        </div>

      </div>

    </div>
  )
}