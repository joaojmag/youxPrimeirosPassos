
import arrow_left from '../../imagens/arrow_left_alt_FILL0_wght400_GRAD0_opsz48.svg'
import arrow_right from '../../imagens/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg'
import './footer.css'


export default function Footer({ changePage }) {
    const numPaginas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function pegarValorPagina(num) {
        changePage(num)
    }

    return (
        <div className='class-div-footer'>
            {/* <button><img src={arrow_left} /></button> */}

            {numPaginas.map((e, i) => (
                <button key={i} style={{ cursor: 'pointer' }} onClick={() => pegarValorPagina(e)}>{e}</button>
            ))}

            {/* <button><img src={arrow_right} /></button> */}
        </div>
    )
}