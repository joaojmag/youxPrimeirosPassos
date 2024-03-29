import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/auth'

import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import './dashboard.css'

export default function Dashboard() {
    const { logout, convertStrEmObj, user } = useContext(AuthContext);

    const [chamados, setChamados] = useState([])

    // function handleLogout() {
    //     logout();
    // }

    useEffect(() => {
        function loadChamados() {

            const querySnapshot = convertStrEmObj();

            let selecionados = querySnapshot.filter(e => e.clienteId === user.uid && (e.status == 'Aberto' || e.status == 'Progresso' || e.status == 'Atendido'))
            updateState(selecionados)
        }

        loadChamados();


        return () => { }
    }, [])



    function updateState(querySnapshot) {
        const isCollectionEmpty = querySnapshot.length === 0;

        if (!isCollectionEmpty) {
            let lista = [];

            querySnapshot.forEach((doc) => {
                lista.push({
                    id: doc.userId,
                    assunto: doc.assunto,
                    cliente: doc.cliente,
                    clienteId: doc.clienteId,
                    created: doc.created,
                    status: doc.status,
                    complemento: doc.complemento,
                })
            })
            console.log('chamados 1-> ', chamados);
            
            setChamados(chamados => [...chamados, ...lista])
            console.log('chamados 2-> ', chamados);
            console.log('lsita :>> ', lista);

        }
    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Tickets">
                    <FiMessageSquare size={25} />
                </Title>

                <>
                    {chamados.length === 0 ? (
                        <div className="container dashboard">
                            <span>Nenhum chamado encontrado...</span>
                            <Link to="/new" className="new">
                                <FiPlus color="#FFF" size={25} />
                                Novo chamado
                            </Link>
                        </div>
                    ) : (
                        <>
                            <Link to="/new" className="new">
                                <FiPlus color="#FFF" size={25} />
                                Novo chamado
                            </Link>

                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">Cliente</th>
                                        <th scope="col">Assunto</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Cadastrando em</th>
                                        <th scope="col">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chamados.map((item, index) => {
                                        return (

                                            <tr key={index}>
                                                <td data-label="Cliente">{item.cliente}</td>
                                                <td data-label="Assunto">{item.assunto}</td>
                                                <td data-label="Status">
                                                    <span className="badge" style={{ backgroundColor: '#999' }}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td data-label="Cadastrado">12/05/2022</td>
                                                <td data-label="#">
                                                    <button className="action" style={{ backgroundColor: '#3583f6' }}>
                                                        <FiSearch color='#FFF' size={17} />
                                                    </button>
                                                    <button className="action" style={{ backgroundColor: '#f6a935' }}>
                                                        <FiEdit2 color='#FFF' size={17} />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}

                                </tbody>
                            </table>
                        </>
                    )}
                </>

            </div>

        </div>
    )
}

