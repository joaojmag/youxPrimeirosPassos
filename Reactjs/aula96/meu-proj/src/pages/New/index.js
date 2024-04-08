import { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiPlusCircle } from 'react-icons/fi'

import { AuthContext } from '../../contexts/auth'

import './new.css';
import { toast } from 'react-toastify'
import { useParams, useNavigate } from 'react-router-dom'


export default function New() {
  const { user, convertStrEmObj } = useContext(AuthContext);
  const { id } = useParams()
  const [idCustomer, setIdCustomer] = useState(false)
  const [passandoUserId, setpassandoUserId] = useState('')


  const [customers, setCustomers] = useState([])
  // const [loadCustomer, setLoadCustomer] = useState(false);
  const loadCustomer = false
  const [customerSelected, setCustomerSelected] = useState(0)

  const [complemento, setComplemento] = useState('')
  const [assunto, setAssunto] = useState('Suporte')
  const [status, setStatus] = useState('Aberto')

  const navigate = useNavigate()

  useEffect(() => {
    function loadCustomers() {
      let vetObjGeral = convertStrEmObj()

      let lista = [];

      vetObjGeral.forEach((doc) => {
        if (doc.uid === user.uid && doc.email !== user.email) {
          lista.push({
            id: doc.uid,
            nomeFantasia: doc.nome
          })
        }
      })
      setCustomers(lista);

      if (id) {
        loadId(vetObjGeral, lista);
      }


    }

    loadCustomers();
  }, [id]);

  function loadId(vetObjGeral, lista) {
    vetObjGeral.forEach((value) => {
      if (value.userId === id) {
        setAssunto(value.assunto)
        setComplemento(value.complemento)
        setStatus(value.status)

        let indexNomeFantasia = lista.findIndex(e => e.nomeFantasia === value.cliente)
        setCustomerSelected(indexNomeFantasia);
        setIdCustomer(true)
        setpassandoUserId(value.userId)

        console.log(value.userId);

        console.log('useState :>> ', value.userId);
      }
    });

  }

  function handleOptionChange(e) {
    setStatus(e.target.value);
  }

  function handleChangeSelect(e) {
    setAssunto(e.target.value)
  }

  function hnadleChangeCustomer(e) {
    setCustomerSelected(e.target.value)
    console.log(customers[e.target.value].nomeFantasia);
  }

  function handleRegister(e) {
    e.preventDefault();

    let data = {
      created: new Date(),
      cliente: customers[customerSelected].nomeFantasia,
      clienteId: customers[customerSelected].id,
      assunto: assunto,
      complemento: complemento,
      status: status,
      userId: idCustomer ? `${passandoUserId}` : `@chamado${Math.random()}`

    }
    sessionStorage.setItem(`${data.userId}`, JSON.stringify(data))
    toast.success("Chamado registrado!")
    setComplemento('')
    setCustomerSelected(0)

    navigate('/dashboard')
  }


  return (
    <div>
      <Header />

      <div className="content">
        <Title name={id ? "Editar chamado" : "Novo chamado"}>
          <FiPlusCircle size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>

            <label>Clientes</label>
            {
              loadCustomer ? (
                <input type="text" disabled={true} value="Carregando..." />
              ) : (
                <select value={customerSelected} onChange={hnadleChangeCustomer}>
                  {customers.map((item, index) => {
                    return (
                      <option key={index} value={index}>
                        {item.nomeFantasia}
                      </option>
                    )
                  })}
                </select>
              )
            }

            <label>Assunto</label>
            <select value={assunto} onChange={handleChangeSelect}>
              <option value="Suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input
                type="radio"
                name="radio"
                value="Aberto"
                onChange={handleOptionChange}
                checked={status === 'Aberto'}
              />
              <span>Em aberto</span>

              <input
                type="radio"
                name="radio"
                value="Progresso"
                onChange={handleOptionChange}
                checked={status === 'Progresso'}
              />
              <span>Progresso</span>

              <input
                type="radio"
                name="radio"
                value="Atendido"
                onChange={handleOptionChange}
                checked={status === 'Atendido'}
              />
              <span>Atendido</span>
            </div>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opcional)."
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />

            <button type="submit">Registrar</button>

          </form>
        </div>
      </div>
    </div>
  )
}