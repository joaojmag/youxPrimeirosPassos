import React from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeletButton } from './styles.js'
import { useState, useCallback, useEffect } from 'react';

import api from '../../services/api.js';

export default function Main() {

    const [newRepo, setNewRepo] = useState('')
    const [repositorios, setRepositorios] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    // Buscar
    useEffect(() => {
        const repoStorage = sessionStorage.getItem('repos');

        if (repoStorage) {
            setRepositorios(JSON.parse(repoStorage))
        }

    }, []);

    // Salvar alterações
    useEffect(() => {
        sessionStorage.setItem('repos', JSON.stringify(repositorios));

    }, [repositorios])


    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {
            setLoading(true)
            setAlert(null)
            try {

                if (newRepo === '') {
                    throw new Error('Você precisa indicar um repositorio!')
                }

                const response = await api.get(`repos/${newRepo}`)

                const hasRepo = repositorios.find(repo => repo.name === newRepo)

                if (hasRepo) {
                    throw new Error('Repositório Duplicado');
                }

                const data = {
                    name: response.data.full_name,
                }

                setRepositorios([...repositorios, data])
                console.log(repositorios);

                setNewRepo('')
            } catch (error) {
                setAlert(true)
                console.log(error);
            } finally {
                setLoading(false)
            }


        }

        submit()

    }, [newRepo, repositorios]);

    function handleinputChange(e) {
        setNewRepo(e.target.value)
        setAlert(null)
    }

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(e => e.name !== repo);
        setRepositorios(find)
    }, [repositorios]);

    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus Repositorios
            </h1>

            <Form onSubmit={handleSubmit} error={alert}>
                <input
                    type="text"
                    placeholder="Adicionar Repositorios"
                    value={newRepo}
                    onChange={handleinputChange}
                />

                <SubmitButton loading={loading ? 1 : 0}>
                    {loading ? (<FaSpinner color="#fff" size={14} />
                    ) : (
                        <FaPlus color='#fff' size={14} />
                    )}

                </SubmitButton>
            </Form>

            <List>
                {repositorios.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeletButton onClick={() => handleDelete(repo.name)}>
                                <FaTrash size={14} />
                            </DeletButton>
                            {repo.name}
                        </span>
                        <a href="">
                            <FaBars size={20} />
                        </a>
                    </li>
                ))}
            </List>
        </Container>
    )
}