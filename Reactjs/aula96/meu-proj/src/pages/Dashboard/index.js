import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

export default function Dashboard() {
    const { logout } = useContext(AuthContext)

    function handLogout() {
        logout()
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handLogout} >Sair</button>
        </div>
    )
}